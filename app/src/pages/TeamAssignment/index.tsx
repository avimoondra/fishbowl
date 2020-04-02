import * as React from "react"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import { Button } from "@material-ui/core"
import {
  useUpdateGameStateMutation,
  useCreateTurnMutation,
  GameStateEnum
} from "generated/graphql"
import { nextPlayer } from "pages/Play/turn"

function TeamAssignment() {
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const currentGame = React.useContext(CurrentGameContext)
  const [updateGameState] = useUpdateGameStateMutation()
  const [createFirstTurn] = useCreateTurnMutation()
  const canStartGame = currentPlayer.role === PlayerRole.Host
  return (
    <>
      {canStartGame ? (
        <Button
          onClick={async () => {
            await createFirstTurn({
              variables: {
                gameId: currentGame.id,
                playerId: nextPlayer(null, currentGame.players).id
              }
            })
            updateGameState({
              variables: {
                id: currentGame.id,
                state: GameStateEnum.ActivePlay
              }
            })
          }}
        >
          Start Game
        </Button>
      ) : (
        <></>
      )}
    </>
  )
}

export default TeamAssignment
