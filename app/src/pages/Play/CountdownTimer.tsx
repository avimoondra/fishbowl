import { Typography } from "@material-ui/core"
import * as React from "react"

function CountdownTimer(props: { seconds: number }) {
  return <Typography variant="h3">{props.seconds}</Typography>
}

export default CountdownTimer
