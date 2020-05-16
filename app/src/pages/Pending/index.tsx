import { Box, Fab, Grid } from "@material-ui/core"
import SettingsIcon from "@material-ui/icons/Settings"
import * as React from "react"

function Pending() {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>This is awkward, we cannot seem to identify you...</Grid>
      <Grid item>
        Ask your host to <b>click the gear icon in the bottom right corner</b>{" "}
        of their page to send your unique join link so you can get back in it!
      </Grid>
      <Grid item>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Box pr={2}>It looks like this → </Box>
          <Box>
            <Fab size="small" disabled={true}>
              <SettingsIcon></SettingsIcon>
            </Fab>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Pending
