import { Box, Grid } from "@material-ui/core"
import PlayerChip from "components/PlayerChip"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext } from "contexts/CurrentPlayer"
import { CurrentGameSubscription } from "generated/graphql"
import { nextPlayerForNextTeam } from "lib/turn"
import * as React from "react"

type Props = {
  activePlayer: CurrentGameSubscription["games"][0]["players"][0]
  activeTurn: CurrentGameSubscription["games"][0]["turns"][0]
}

export function YourTeamTurnContent(props: Props) {
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
            ></PlayerChip>
            {" has started!"}
          </Grid>
        ) : (
          <Grid item>
            <PlayerChip
              username={props.activePlayer.username || ""}
              team={props.activePlayer.team}
            ></PlayerChip>
            {" from your team is about to start. Pay attention!"}
          </Grid>
        )}

        <Grid item>
          <PlayerChip
            username={nextActivePlayer.username || ""}
            team={nextActivePlayer.team}
          ></PlayerChip>
          {" from the other team is next!"}
        </Grid>
      </Grid>
    </Box>
  )
}

export function OtherTeamContent(props: Props) {
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
            ></PlayerChip>
            {` has started! Pay attention to the words or phrases the other team is guessing!`}
          </Grid>
        ) : (
          <Grid item>
            <PlayerChip
              username={props.activePlayer.username || ""}
              team={props.activePlayer.team}
            ></PlayerChip>
            {
              " from the other team is about to start. Pay attention to the words or phrases the other team is guessing!"
            }
          </Grid>
        )}

        <Grid item>
          <PlayerChip
            username={nextActivePlayer.username || ""}
            team={nextActivePlayer.team}
          ></PlayerChip>
          {nextActivePlayer.id === currentPlayer.id
            ? " is next! (that's you!)"
            : " from your team is next!"}
        </Grid>
      </Grid>
    </Box>
  )
}
