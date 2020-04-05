import { Button, Grid } from "@material-ui/core"
import PlayerArena from "components/PlayerArena"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import { GameStateEnum, useUpdateGameStateMutation } from "generated/graphql"
import { isEmpty, reject } from "lodash"
import * as React from "react"

function WaitingRoom() {
  const MIN_NUMBER_OF_PLAYERS = 2 // TODO: Update to 4.
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const [updateGameState] = useUpdateGameStateMutation()

  const playersWithUsernames =
    reject(currentGame.players, (player) => isEmpty(player.username)) || []
  const canSeeStartGameButton = currentPlayer.role === PlayerRole.Host
  const canStartGame =
    canSeeStartGameButton &&
    currentGame.seconds_per_turn &&
    currentGame.num_entries_per_player &&
    playersWithUsernames.length >= MIN_NUMBER_OF_PLAYERS

  return (
    <>
      <Grid item>
        <PlayerArena players={playersWithUsernames}></PlayerArena>
      </Grid>
      <Grid item style={{ textAlign: "center" }}>
        {canSeeStartGameButton && (
          <Button
            onClick={() => {
              updateGameState({
                variables: {
                  id: currentGame.id,
                  state: GameStateEnum.CardSubmission,
                },
              })
            }}
            disabled={!canStartGame}
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
