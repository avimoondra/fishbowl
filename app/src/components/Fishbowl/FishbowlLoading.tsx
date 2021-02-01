import { Box, makeStyles } from "@material-ui/core"
import React from "react"
import Fishbowl from "."

const useStyles = makeStyles(() => ({
  root: {
    left: "50%",
    position: "absolute",
    top: "50%",
    transform: "translateX(-50%) translateY(-50%)",
  },
}))

export const FishbowlLoading = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Fishbowl />
    </Box>
  )
}
