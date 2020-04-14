import { Typography } from "@material-ui/core"
import { calculateSecondsLeft } from "lib/time"
import useInterval from "lib/useInterval"
import * as React from "react"

function CountdownTimer(props: {
  seconds: number
  startDate: Date
  isActive: boolean
  onCountdown?: (secondsLeft: number) => void
}) {
  const [secondsLeft, setSecondsLeft] = React.useState(
    calculateSecondsLeft(props.startDate, props.seconds) || props.seconds
  )

  useInterval(() => {
    if (props.isActive && secondsLeft >= 0) {
      const nextSecondsLeft = calculateSecondsLeft(
        props.startDate,
        props.seconds
      )
      setSecondsLeft(nextSecondsLeft)
      props.onCountdown && props.onCountdown(nextSecondsLeft)
    }
  }, 1000)

  return (
    <Typography variant="h3">{Math.round(Math.max(secondsLeft, 0))}</Typography>
  )
}

export default CountdownTimer
