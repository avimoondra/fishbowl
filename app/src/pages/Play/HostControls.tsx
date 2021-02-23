import { Box, Button, Divider, Grid, Typography } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import PlayerChip from "components/PlayerChip"
import { CurrentGameContext } from "contexts/CurrentGame"
import {
  CurrentGameSubscription,
  useEndCurrentTurnAndStartNextTurnMutation,
} from "generated/graphql"
import { useTitleStyle } from "index"
import { nextPlayerForNextTeam, nextPlayerForSameTeam } from "lib/turn"
import * as React from "react"
import { Trans, useTranslation } from "react-i18next"

function HostControls(props: {
  activeTurn: CurrentGameSubscription["games"][0]["turns"][0]
  activePlayer: CurrentGameSubscription["games"][0]["players"][0]
  currentRoundId: number
}) {
  const { t } = useTranslation()
  const currentGame = React.useContext(CurrentGameContext)
  const titleClasses = useTitleStyle()
  const [endTurn] = useEndCurrentTurnAndStartNextTurnMutation()

  const nextPlayerActiveTeam = nextPlayerForSameTeam(
    props.activePlayer,
    currentGame.players
  )

  const nextPlayerNextTeam = nextPlayerForNextTeam(
    props.activePlayer,
    currentGame.turns,
    currentGame.players
  )

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h4" className={titleClasses.title}>
          {t("hostControls.title", "Host Controls")}
        </Typography>
      </Grid>
      <Grid item>
        <Divider
          variant="middle"
          style={{
            width: 150,
            height: 1,
            backgroundColor: grey[600],
          }}
        ></Divider>
      </Grid>

      <Grid item>
        <Box display="flex" alignItems="center" justifyContent="flex-start">
          <Box display="flex" flex="130px 1 auto" alignItems="center">
            <Button
              variant="outlined"
              onClick={() => {
                if (
                  window.confirm(
                    t(
                      "hostControls.skipPlayer.confirmation",
                      "Are you sure you want to skip {{ activePlayerName }} (team {{ activePlayerTeam }})? {{ nextPlayerName }} from the same team would go instead.",
                      {
                        activePlayerName: props.activePlayer.username,
                        activePlayerTeam: props.activePlayer.team,
                        nextPlayerName: nextPlayerActiveTeam.username,
                      }
                    )
                  )
                ) {
                  endTurn({
                    variables: {
                      currentTurnId: props.activeTurn.id,
                      completedCardIds: [],
                      gameId: currentGame.id,
                      currentTurnScorings: [],
                      nextTurnplayerId: nextPlayerActiveTeam.id,
                      roundId: props.currentRoundId,
                    },
                  })
                }
              }}
            >
              {t("hostControls.skipPlayer.button", "Skip player")}
            </Button>
          </Box>

          <Box ml={2}>
            <PlayerChip
              username={nextPlayerActiveTeam.username || ""}
              team={nextPlayerActiveTeam.team}
            ></PlayerChip>{" "}
            {t("hostControls.skipHelperPredicate", "would be next")}
          </Box>
        </Box>
      </Grid>
      <Grid item>
        <Box display="flex" alignItems="center" justifyContent="flex-start">
          <Box display="flex" flex="130px 1 auto" alignItems="center">
            <Button
              variant="outlined"
              onClick={() => {
                if (
                  window.confirm(
                    t(
                      "hostControls.skipTeam.confirmation",
                      "Are you sure you want to skip {{ activePlayerName }} (team {{ activePlayerTeam }})? {{ nextPlayerName }} from the other team would go next.",
                      {
                        activePlayerName: props.activePlayer.username,
                        activePlayerTeam: props.activePlayer.team,
                        nextPlayerName: nextPlayerNextTeam.username,
                      }
                    )
                  )
                ) {
                  endTurn({
                    variables: {
                      currentTurnId: props.activeTurn.id,
                      completedCardIds: [],
                      gameId: currentGame.id,
                      currentTurnScorings: [],
                      nextTurnplayerId: nextPlayerNextTeam.id,
                      roundId: props.currentRoundId,
                    },
                  })
                }
              }}
            >
              {t("hostControls.skipTeam.button", "Skip team")}
            </Button>
          </Box>
          <Box ml={2}>
            <PlayerChip
              username={nextPlayerNextTeam.username || ""}
              team={nextPlayerNextTeam.team}
            ></PlayerChip>{" "}
            {t("hostControls.skipHelperPredicate", "would be next")}
          </Box>
        </Box>
      </Grid>
      <Grid item>
        <Trans t={t} i18nKey="hostControls.description.joinCode">
          {
            "Someone drop out or lose connection? They can join back in with code "
          }
          <b>{{ joinCode: currentGame.join_code?.toLocaleUpperCase() }}</b>
          {" from the same browser!"}
        </Trans>
      </Grid>
      <Grid item>
        {t(
          "hostControls.description.joinLink",
          "Or if they need additional help, click the settings button {{ settingsIcon }} to send a unique join link for that player. From here, you can also adjust other settings, including seconds per turn, skips, etc.",
          { settingsIcon: "⚙️" }
        )}
      </Grid>
    </Grid>
  )
}

export default HostControls
