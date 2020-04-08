import { Typography } from "@material-ui/core"
import * as React from "react"

const calculateSecondsLeft = (startDate: Date, seconds: number) => {
  const endInSeconds = startDate.getTime() / 1000 + seconds
  const nowInSeconds = new Date().getTime() / 1000
  return endInSeconds - nowInSeconds
}

function CountdownTimer(props: {
  seconds: number
  startDate: Date
  isActive: boolean
  onCountdown?: (secondsLeft: number) => void
}) {
  const [secondsLeft, setSecondsLeft] = React.useState(
    calculateSecondsLeft(props.startDate, props.seconds)
  )

  React.useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (props.isActive && secondsLeft >= 0) {
      interval = setInterval(() => {
        const newSecondsLeft = calculateSecondsLeft(
          props.startDate,
          props.seconds
        )
        setSecondsLeft(newSecondsLeft)
        props.onCountdown && props.onCountdown(newSecondsLeft)
      }, 1000)
    } else if (!props.isActive && interval) {
      clearInterval(interval)
    }
    return () => (interval ? clearInterval(interval) : undefined)
  }, [props.isActive])

  return (
    <Typography variant="h3">{Math.round(Math.max(secondsLeft, 0))}</Typography>
  )
}

export default CountdownTimer
