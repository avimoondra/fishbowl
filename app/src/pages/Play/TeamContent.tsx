import { Box, Grid } from "@material-ui/core"
import PlayerChip from "components/PlayerChip"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext } from "contexts/CurrentPlayer"
import { CurrentGameSubscription } from "generated/graphql"
import { nextPlayerForNextTeam } from "lib/turn"
import * as React from "react"
import { Trans, useTranslation } from "react-i18next"

type Props = {
  activePlayer: CurrentGameSubscription["games"][0]["players"][0]
  activeTurn: CurrentGameSubscription["games"][0]["turns"][0]
}

export function YourTeamTurnContent(props: Props) {
  const { t } = useTranslation()
  const currentGame = React.useContext(CurrentGameContext)
  const nextActivePlayer = nextPlayerForNextTeam(
    props.activePlayer,
    currentGame.turns,
    currentGame.players
  )

  return (
    <Box p={2}>
      <Grid item container direction="column" spacing={2}>
        {props.activeTurn.started_at !== null ? (
          <Grid item>
            <Trans t={t} i18nKey="play.yourTeam.context.active">
              <PlayerChip team={props.activePlayer.team}>
                {{ playerUsername: props.activePlayer.username }}
              </PlayerChip>
              {" has started!"}
            </Trans>
          </Grid>
        ) : (
          <Grid item>
            <Trans t={t} i18nKey="play.yourTeam.context.inactive">
              <PlayerChip team={props.activePlayer.team}>
                {{ playerUsername: props.activePlayer.username }}
              </PlayerChip>
              {" from your team is about to start. Pay attention!"}
            </Trans>
          </Grid>
        )}

        <Grid item>
          <Trans t={t} i18nKey="play.yourTeam.context.nextTurn">
            <PlayerChip team={nextActivePlayer.team}>
              {{ playerUsername: nextActivePlayer.username }}
            </PlayerChip>
            {" from the other team is next!"}
          </Trans>
        </Grid>
      </Grid>
    </Box>
  )
}

export function OtherTeamContent(props: Props) {
  const { t } = useTranslation()
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const currentGame = React.useContext(CurrentGameContext)
  const nextActivePlayer = nextPlayerForNextTeam(
    props.activePlayer,
    currentGame.turns,
    currentGame.players
  )

  return (
    <Box p={2}>
      <Grid item container direction="column" spacing={2}>
        {props.activeTurn.started_at !== null ? (
          <Grid item>
            <Trans t={t} i18nKey="play.otherTeam.context.active">
              <PlayerChip team={props.activePlayer.team}>
                {{ playerUsername: props.activePlayer.username }}
              </PlayerChip>
              {
                " has started! Pay attention to the words or phrases the other team is guessing!"
              }
            </Trans>
          </Grid>
        ) : (
          <Grid item>
            <Trans t={t} i18nKey="play.otherTeam.context.inactive">
              <PlayerChip team={props.activePlayer.team}>
                {{ playerUsername: props.activePlayer.username }}
              </PlayerChip>
              {
                " from the other team is about to start. Pay attention to the words or phrases the other team is guessing!"
              }
            </Trans>
          </Grid>
        )}

        <Grid item>
          {nextActivePlayer.id === currentPlayer.id ? (
            <Trans t={t} i18nKey="play.otherTeam.context.yourNextTurn">
              <PlayerChip team={nextActivePlayer.team}>
                {{ playerUsername: nextActivePlayer.username }}
              </PlayerChip>
              {" is next! (that's you!)"}
            </Trans>
          ) : (
            <Trans t={t} i18nKey="play.otherTeam.context.nextTurn">
              <PlayerChip team={nextActivePlayer.team}>
                {{ playerUsername: nextActivePlayer.username }}
              </PlayerChip>
              {" from your team is next!"}
            </Trans>
          )}
        </Grid>
      </Grid>
    </Box>
  )
}
