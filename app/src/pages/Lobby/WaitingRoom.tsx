import { Button, Grid } from "@material-ui/core"
import PlayerArena from "components/PlayerArena"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import {
  GameStateEnum,
  useUpdateGameStateMutation,
  useWaitingRoomSubscription
} from "generated/graphql"
import { every } from "lodash"
import * as React from "react"

function WaitingRoom() {
  const MIN_NUMBER_OF_PLAYERS = 2 // TODO: Update to 4.
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const [updateGameState] = useUpdateGameStateMutation()
  const { data, loading } = useWaitingRoomSubscription({
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
      <Grid item>
        <PlayerArena players={players}></PlayerArena>
      </Grid>
      <Grid item style={{ textAlign: "center" }}>
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
            disabled={
              loading ||
              (!canStartGame && !every(players, player => player.username))
            }
            variant="contained"
            color="primary"
          >
            Everyone's Here!
          </Button>
        )}
      </Grid>
    </>
  )
}

export default WaitingRoom
