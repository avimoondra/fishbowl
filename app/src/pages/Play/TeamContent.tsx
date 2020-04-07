import { Box } from "@material-ui/core"
import PlayerChip from "components/PlayerChip"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext } from "contexts/CurrentPlayer"
import { CurrentGameSubscription } from "generated/graphql"
import { nextPlayer } from "pages/Play/turn"
import * as React from "react"

type ContentProps = {
  activePlayer: CurrentGameSubscription["games"][0]["players"][0]
}

export function YourTeamTurnContent(props: ContentProps) {
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const nextActivePlayer = nextPlayer(
    props.activePlayer,
    currentGame.turns,
    currentGame.players
  )

  return (
    <Box>
      <Box p={2}>
        <PlayerChip
          username={props.activePlayer.username || ""}
          team={props.activePlayer.team}
        ></PlayerChip>
        {` from your team is playing right now. Pay attention!`}
      </Box>
      <Box p={2}>
        <PlayerChip
          username={nextActivePlayer.username || ""}
          team={nextActivePlayer.team}
        ></PlayerChip>
        {nextActivePlayer.id === currentPlayer.id
          ? " is next! (that's you!)"
          : " from the other team is next!"}
      </Box>
    </Box>
  )
}

export function OtherTeamConent(props: ContentProps) {
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const currentGame = React.useContext(CurrentGameContext)
  const nextActivePlayer = nextPlayer(
    props.activePlayer,
    currentGame.turns,
    currentGame.players
  )
  return (
    <Box>
      <Box p={2}>
        <PlayerChip
          username={props.activePlayer.username || ""}
          team={props.activePlayer.team}
        ></PlayerChip>
        {` from the other team is playing right now. Pay attention to the words or phrases the other team is guessing!`}
      </Box>
      <Box p={2}>
        <PlayerChip
          username={nextActivePlayer.username || ""}
          team={nextActivePlayer.team}
        ></PlayerChip>
        {nextActivePlayer.id === currentPlayer.id
          ? " is next! (that's you!)"
          : " from your team is next!"}
      </Box>
    </Box>
  )
}
