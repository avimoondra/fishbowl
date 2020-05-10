import { Box, Button, Grid, Link, Typography } from "@material-ui/core"
import grey from "@material-ui/core/colors/grey"
import PlayerArena from "components/PlayerArena"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import {
  GameStateEnum,
  useCreateTurnMutation,
  useUpdateAllPlayersMutation,
  useUpdateGameStateMutation
} from "generated/graphql"
import { currentPlayerTeam, Team, TeamColor, teamsWithSequence } from "lib/team"
import { nextPlayerForNextTeam } from "lib/turn"
import { filter } from "lodash"
import { Title } from "pages/CardSubmission"
import * as React from "react"

function TeamAssignment() {
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const currentGame = React.useContext(CurrentGameContext)
  const [updateGameState] = useUpdateGameStateMutation()
  const [createFirstTurn] = useCreateTurnMutation()
  const [updateAllPlayers] = useUpdateAllPlayersMutation()

  const myTeamColor = currentPlayerTeam(currentPlayer.id, currentGame.players)
  const myTeamPlayers = filter(
    currentGame.players,
    player => player.team === myTeamColor
  )
  const otherTeamColor =
    currentPlayerTeam(currentPlayer.id, currentGame.players) === Team.Blue
      ? Team.Red
      : Team.Blue
  const otherTeamPlayers = filter(
    currentGame.players,
    player => player.team === otherTeamColor
  )

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item style={{ textAlign: "center" }}>
        <Title text="Teams"></Title>
      </Grid>

      <Grid
        item
        style={{
          textAlign: "left"
        }}
        container
        direction="column"
      >
        <Grid item container direction="row" alignItems="center" spacing={1}>
          <Grid item>
            <Typography variant="h6" style={{ color: TeamColor[myTeamColor] }}>
              {`Team ${myTeamColor}`.toLocaleUpperCase()}
            </Typography>
          </Grid>
          <Grid item style={{ color: grey[600], fontStyle: "italic" }}>
            (your team)
          </Grid>
        </Grid>

        <PlayerArena
          players={myTeamPlayers}
          hostCanSwitchTeams={currentPlayer.role === PlayerRole.Host}
        ></PlayerArena>
      </Grid>

      <Grid item style={{ textAlign: "center" }}>
        <Typography variant="h6">- vs -</Typography>
      </Grid>

      <Grid
        item
        style={{ textAlign: "right", color: TeamColor[otherTeamColor] }}
      >
        <Typography variant="h6">
          {`Team ${otherTeamColor}`.toLocaleUpperCase()}
        </Typography>
        <PlayerArena
          players={otherTeamPlayers}
          hostCanSwitchTeams={currentPlayer.role === PlayerRole.Host}
        ></PlayerArena>
      </Grid>

      {currentPlayer.role === PlayerRole.Participant && (
        <Grid item>
          <Box mt={1} mb={1}>
            Don't like the teams? Your host can re-randomize them or switch
            players from one team to another.
          </Box>
        </Grid>
      )}

      {currentPlayer.role === PlayerRole.Host && (
        <>
          <Grid item>
            <Box mt={1} mb={1}>
              Don't like the teams?{" "}
              <span>
                <Link
                  href=""
                  onClick={(e: React.MouseEvent<HTMLElement>) => {
                    e.preventDefault()
                    const players = teamsWithSequence(currentGame.players)
                    updateAllPlayers({
                      variables: {
                        gameId: currentGame.id,
                        players: players.map(({ id, team, team_sequence }) => ({
                          id,
                          team,
                          team_sequence
                        }))
                      }
                    })
                  }}
                >
                  Re-randomize
                </Link>
              </span>{" "}
              them. Or switch players from one team to another.
            </Box>
          </Grid>
          <Grid item style={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={async () => {
                await createFirstTurn({
                  variables: {
                    gameId: currentGame.id,
                    playerId: nextPlayerForNextTeam(
                      null,
                      currentGame.turns,
                      currentGame.players
                    ).id,
                    roundId: currentGame.rounds[0].id
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
          </Grid>
        </>
      )}
    </Grid>
  )
}

export default TeamAssignment
