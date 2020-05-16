import { Box, Fab, Grid, Link } from "@material-ui/core"
import SettingsIcon from "@material-ui/icons/Settings"
import * as React from "react"
import { Link as RouterLink } from "react-router-dom"
import routes from "routes"

function Pending(props: { joinCode: string }) {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        This is embarassing, we cannot seem to figure out which player you are
        in game <b>{props.joinCode.toLocaleUpperCase()}</b>... 😳
      </Grid>
      <Grid item>
        Ask your host to{" "}
        <b>click the settings button ⚙️ in the bottom right corner</b> of their
        page to send your unique join link so you can get back in it!
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
      <Grid item></Grid>
      <Grid item></Grid>
      <Grid item>
        If you meant to join a different game,{" "}
        <Link component={RouterLink} to={routes.root}>
          return to the home page
        </Link>
        .
      </Grid>
    </Grid>
  )
}

export default Pending
