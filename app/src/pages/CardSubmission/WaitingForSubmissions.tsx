import { Button, Grid, Typography } from "@material-ui/core"
import Fishbowl from "components/FishbowlAnimation"
import PlayerChip from "components/PlayerChip"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import {
  GameStateEnum,
  useUpdateAllPlayersMutation,
  useUpdateGameStateMutation
} from "generated/graphql"
import { teamsWithSequence } from "lib/team"
import { reject, some } from "lodash"
import { Title } from "pages/CardSubmission"
import * as React from "react"

function WaitingForSubmissions() {
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const [updateGameState] = useUpdateGameStateMutation()
  const [updateAllPlayers] = useUpdateAllPlayersMutation()

  const numEntriesPerPlayer = currentGame.num_entries_per_player
  const numPlayers = currentGame.players.length

  if (!numEntriesPerPlayer || !numPlayers) {
    return null
  }

  const total = numEntriesPerPlayer * numPlayers
  const submittedSoFar = currentGame.cards.length

  const waitingForPlayers = reject(currentGame.players, player => {
    return some(currentGame.cards, card => card.player_id === player.id)
  })

  if (!submittedSoFar) {
    return null
  }

  const allPlayersSubmitted = total !== 0 && submittedSoFar === total

  return (
    <>
      <Grid item>
        <Title text="Well done!"></Title>
      </Grid>

      {allPlayersSubmitted ? (
        <>
          <Grid item>
            {currentPlayer.role === PlayerRole.Host
              ? "All players submitted! As the host, you can now assign teams."
              : `All players submitted, ${submittedSoFar} cards in total. Now we are waiting on the host to start the game!`}
          </Grid>
          {allPlayersSubmitted && (
            <Grid item>
              {currentPlayer.role === PlayerRole.Host ? (
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={async () => {
                    const players = teamsWithSequence(currentGame.players)
                    await updateAllPlayers({
                      variables: {
                        gameId: currentGame.id,
                        players: players.map(({ id, team, team_sequence }) => ({
                          id,
                          team,
                          team_sequence
                        }))
                      }
                    })
                    updateGameState({
                      variables: {
                        id: currentGame.id,
                        state: GameStateEnum.TeamAssignment
                      }
                    })
                  }}
                >
                  Assign Teams
                </Button>
              ) : null}
            </Grid>
          )}
        </>
      ) : (
        <>
          <Grid item container justify="center">
            Just waiting for everyone else...<div style={{ width: 4 }}></div>
            {waitingForPlayers.map(player => (
              <>
                <PlayerChip username={player.username || ""}></PlayerChip>
                <div style={{ width: 4 }}></div>
              </>
            ))}
          </Grid>
          <Grid item>
            <Typography variant="h5">
              {submittedSoFar}/{`${total} cards so far`}
            </Typography>
          </Grid>
          <Grid item>
            <div style={{ marginTop: 50 }}>
              <Fishbowl></Fishbowl>
            </div>
          </Grid>
        </>
      )}
    </>
  )
}

export default WaitingForSubmissions
