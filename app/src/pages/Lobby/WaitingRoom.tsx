import * as React from "react"
import { Button, Chip } from "@material-ui/core"
import { useWaitingRoomSubscription } from "generated/graphql"
import { PlayerRole, CurrentPlayerContext } from "contexts/CurrentPlayer"
import { CurrentGameContext } from "contexts/CurrentGame"

function WaitingRoom() {
  const MIN_NUMBER_OF_PLAYERS = 4
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const { data } = useWaitingRoomSubscription({
    variables: {
      gameId: currentGame.id
    }
  })

  const players = data?.games_by_pk?.players || []
  const canSeeStartGameButton = currentPlayer.role === PlayerRole.Host
  const canStartGame =
    canSeeStartGameButton &&
    data?.games_by_pk?.starting_letter &&
    data?.games_by_pk?.seconds_per_turn &&
    data?.games_by_pk?.num_entries_per_player &&
    players.length >= MIN_NUMBER_OF_PLAYERS

  return (
    <>
      {players.length < MIN_NUMBER_OF_PLAYERS && (
        <div>You need at least 4 players!</div>
      )}
      {players?.map(player => {
        return (
          player.username && (
            <Chip
              key={player.username}
              color="secondary"
              variant="outlined"
              label={player.username}
            ></Chip>
          )
        )
      })}
      {canSeeStartGameButton && (
        <Button
          onClick={() => {
            // advance game state
          }}
          disabled={!canStartGame}
          variant="contained"
          color="primary"
        >
          Everyone's Here!
        </Button>
      )}
    </>
  )
}

export default WaitingRoom
