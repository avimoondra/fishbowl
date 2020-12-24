import { useQuery } from "@apollo/react-hooks"
import { ServerTimeDocument, ServerTimeQuery } from "generated/graphql"
import { mean, median, std } from "mathjs"
import React from "react"

const DELAY = 1000 // delay in milliseconds between each request
const REPEAT = 5 // number of server requests to sample

interface Sample {
  roundtrip: number
  offset: number
}

/**
 * Return the approximate client offset from the server time in milliseconds.
 *
 * @see https://github.com/enmasseio/timesync#algorithm
 */
export default function useServerTimeOffset(): number {
  const [offset, setOffset] = React.useState(0)
  const { refetch: fetchServerTime } = useQuery<ServerTimeQuery>(
    ServerTimeDocument,
    {
      skip: true,
    }
  )

  React.useEffect(() => {
    let first = true
    const samples: Array<Sample | null> = []

    const sample: () => Promise<Sample | null> = async () => {
      try {
        const start = Date.now()
        const { data } = await fetchServerTime()

        if (!data?.server_time?.length) {
          throw new Error("Unexpected server time response")
        }

        const end = Date.now()
        const roundtrip = end - start
        const offset =
          new Date(data.server_time[0].now).getTime() - end + roundtrip / 2 // offset from local system time

        if (first) {
          first = false
          setOffset(offset) // apply the first ever retrieved offset immediately
        }

        return { roundtrip, offset }
      } catch (e) {
        return null // ignore failed requests
      }
    }

    const computeOffset = async () => {
      samples.push(await sample())

      if (samples.length < REPEAT) {
        setTimeout(computeOffset, DELAY)

        return
      }

      // calculate the limit for outliers
      const roundtrips = samples
        .filter(successfulSample)
        .map((sample) => sample.roundtrip)
      const limit = median(roundtrips) + std(roundtrips)

      const offsets = samples
        .filter(successfulSample)
        .filter((sample) => sample.roundtrip < limit) // exclude long request outliers
        .map((sample) => sample.offset)

      setOffset(mean(offsets))
    }

    computeOffset()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return offset
}

function successfulSample(sample: Sample | null): sample is Sample {
  return null !== sample
}
