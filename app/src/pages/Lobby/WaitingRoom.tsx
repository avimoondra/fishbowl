import * as React from "react"
import { Button, Chip } from "@material-ui/core"
import {
  useWaitingRoomSubscription,
  useUpdateGameStateMutation,
  GameStateEnum
} from "generated/graphql"
import { PlayerRole, CurrentPlayerContext } from "contexts/CurrentPlayer"
import { CurrentGameContext } from "contexts/CurrentGame"

function WaitingRoom() {
  const MIN_NUMBER_OF_PLAYERS = 2 // TODO: Update to 4.
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)

  const [updateGameState] = useUpdateGameStateMutation()

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
            updateGameState({
              variables: {
                id: currentGame.id,
                state: GameStateEnum.CardSubmission
              }
            })
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
