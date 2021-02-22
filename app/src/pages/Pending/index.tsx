import { Box, Fab, Grid, Link } from "@material-ui/core"
import SettingsIcon from "@material-ui/icons/Settings"
import * as React from "react"
import { Trans, useTranslation } from "react-i18next"
import { Link as RouterLink } from "react-router-dom"
import routes from "routes"

function Pending(props: { joinCode: string }) {
  const { t } = useTranslation()
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Trans t={t} i18nKey="pending.explanation1">
          {
            "This is embarrassing, we cannot seem to figure out which player you are in game "
          }
          <strong>{{ joinCode: props.joinCode.toLocaleUpperCase() }}</strong>...
          😳
        </Trans>
      </Grid>
      <Grid item>
        <Trans t={t} i18nKey="pending.explanation2">
          {"Ask your host to "}
          <strong>
            {"click the settings button "}
            <span role="img" aria-label="settings button">
              ⚙️
            </span>
            {" in the bottom right corner"}
          </strong>
          {
            " of their page to send your unique join link so you can get back in it!"
          }
        </Trans>
      </Grid>
      <Grid item>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Box pr={2}>
            {t("pending.settingsButtonExample", "It looks like this")} →{" "}
          </Box>
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
        <Trans t={t} i18nKey="pending.differentGame">
          {"If you meant to join a different game, "}
          <Link component={RouterLink} to={routes.root}>
            return to the home page
          </Link>
          .
        </Trans>
      </Grid>
    </Grid>
  )
}

export default Pending
