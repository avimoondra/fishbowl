import { Box, Grid } from "@material-ui/core"
import PlayerChip from "components/PlayerChip"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext } from "contexts/CurrentPlayer"
import { CurrentGameSubscription } from "generated/graphql"
import { nextPlayerForNextTeam } from "lib/turn"
import * as React from "react"
import { useTranslation } from "react-i18next"

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
            <PlayerChip
              username={props.activePlayer.username || ""}
              team={props.activePlayer.team}
            ></PlayerChip>{" "}
            {t("play.yourTeam.contextPredicate.active", "has started!")}
          </Grid>
        ) : (
          <Grid item>
            <PlayerChip
              username={props.activePlayer.username || ""}
              team={props.activePlayer.team}
            ></PlayerChip>{" "}
            {t(
              "play.yourTeam.contextPredicate.inactive",
              "from your team is about to start. Pay attention!"
            )}
          </Grid>
        )}

        <Grid item>
          <PlayerChip
            username={nextActivePlayer.username || ""}
            team={nextActivePlayer.team}
          ></PlayerChip>{" "}
          {t(
            "play.yourTeam.contextPredicate.nextTurn",
            "from the other team is next!"
          )}
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
            <PlayerChip
              username={props.activePlayer.username || ""}
              team={props.activePlayer.team}
            ></PlayerChip>{" "}
            {t(
              "play.otherTeam.contextPredicate.active",
              "has started! Pay attention to the words or phrases the other team is guessing!"
            )}
          </Grid>
        ) : (
          <Grid item>
            <PlayerChip
              username={props.activePlayer.username || ""}
              team={props.activePlayer.team}
            ></PlayerChip>{" "}
            {t(
              "play.otherTeam.contextPredicate.inactive",
              "from the other team is about to start. Pay attention to the words or phrases the other team is guessing!"
            )}
          </Grid>
        )}

        <Grid item>
          <PlayerChip
            username={nextActivePlayer.username || ""}
            team={nextActivePlayer.team}
          ></PlayerChip>{" "}
          {nextActivePlayer.id === currentPlayer.id
            ? t(
                "play.otherTeam.contextPredicate.yourNextTurn",
                "is next! (that's you!)"
              )
            : t(
                "play.otherTeam.contextPredicate.nextTurn",
                "from your team is next!"
              )}
        </Grid>
      </Grid>
    </Box>
  )
}
