import * as React from "react"

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// https://gist.github.com/babakness/faca3b633bc23d9a0924efb069c9f1f5 (typescript version)

type IntervalFunction = () => unknown | void

function useInterval(callback: IntervalFunction, delay: number | null) {
  const savedCallback = React.useRef<IntervalFunction | null>(null)

  React.useEffect(() => {
    if (delay === null) return
    savedCallback.current = callback
  })

  React.useEffect(() => {
    if (delay === null) return
    function tick() {
      if (savedCallback.current !== null) {
        savedCallback.current()
      }
    }
    const id = setInterval(tick, delay)
    return () => clearInterval(id)
  }, [delay])
}

export default useInterval
