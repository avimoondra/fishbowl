import { Box, Button, Grid } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import PlayerArena from "components/PlayerArena"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import {
  GameStateEnum,
  useLoadWordsMutation,
  useRemovePlayerMutation,
  useUpdateGameStateMutation,
} from "generated/graphql"
import { compact, filter, find, isEmpty, reject } from "lodash"
import * as React from "react"

function WaitingRoom(props: { wordList?: string }) {
  const MIN_NUMBER_OF_PLAYERS = 2 // TODO: Update to 4.
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const [updateGameState] = useUpdateGameStateMutation()
  const [removePlayer] = useRemovePlayerMutation()
  const [loadWords] = useLoadWordsMutation()

  const playersWithUsernames =
    reject(currentGame.players, (player) => isEmpty(player.username)) || []
  const playersWithoutUsernames =
    filter(currentGame.players, (player) => isEmpty(player.username)) || []
  const canSeeStartGameButton = currentPlayer.role === PlayerRole.Host
  const canStartGame =
    canSeeStartGameButton &&
    currentGame.seconds_per_turn &&
    currentGame.num_entries_per_player &&
    playersWithUsernames.length >= MIN_NUMBER_OF_PLAYERS &&
    find(playersWithUsernames, (player) => player.id === currentPlayer.id)

  return (
    <>
      <Grid item>
        <PlayerArena
          players={playersWithUsernames}
          hostCanRemovePlayer={currentPlayer.role === PlayerRole.Host}
        ></PlayerArena>
        {currentPlayer.role === PlayerRole.Host && (
          <>
            <Box mt={2} color={grey[600]}>
              In case someone is switching devices or browsers, you can remove
              them as the host.
            </Box>
            <Box my={2} color={grey[600]}>
              <b>Once you start the game, new players cannot join</b>. We'll add
              support for players joining late soon!
            </Box>
          </>
        )}
      </Grid>
      <Grid item style={{ textAlign: "center" }}>
        {canSeeStartGameButton && (
          <Button
            onClick={async () => {
              await Promise.all(
                playersWithoutUsernames.map((player) => {
                  return removePlayer({
                    variables: {
                      id: player.id,
                    },
                  })
                })
              )
              if (props.wordList) {
                await loadWords({
                  variables: {
                    objects: compact(
                      props.wordList.split(",").map((word) => word.trim())
                    ).map((word) => {
                      return {
                        word,
                        game_id: currentGame.id,
                        player_id: currentPlayer.id,
                        is_allowed: true,
                      }
                    }),
                  },
                })
                await updateGameState({
                  variables: {
                    id: currentGame.id,
                    state: GameStateEnum.TeamAssignment,
                  },
                })
              } else {
                await updateGameState({
                  variables: {
                    id: currentGame.id,
                    state: GameStateEnum.CardSubmission,
                  },
                })
              }
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
