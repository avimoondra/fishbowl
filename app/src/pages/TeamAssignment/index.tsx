import { Button, Grid, Typography } from "@material-ui/core"
import PlayerArena from "components/PlayerArena"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import {
  GameStateEnum,
  useCreateTurnMutation,
  useUpdateGameStateMutation,
} from "generated/graphql"
import { filter } from "lodash"
import { Title } from "pages/CardSubmission"
import { nextPlayer } from "pages/Play/turn"
import { Team, TeamColor } from "pages/TeamAssignment/team"
import * as React from "react"

function TeamAssignment() {
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const currentGame = React.useContext(CurrentGameContext)
  const [updateGameState] = useUpdateGameStateMutation()
  const [createFirstTurn] = useCreateTurnMutation()
  const canStartGame = currentPlayer.role === PlayerRole.Host

  const myTeamColor = currentPlayer.team === Team.Blue ? Team.Blue : Team.Red
  const myTeamPlayers = filter(
    currentGame.players,
    (player) => player.team === myTeamColor
  )
  const otherTeamColor = currentPlayer.team === Team.Blue ? Team.Red : Team.Blue
  const otherTeamPlayers = filter(
    currentGame.players,
    (player) => player.team === otherTeamColor
  )

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item style={{ textAlign: "center" }}>
        <Title text="Teams"></Title>
      </Grid>

      <Grid
        item
        style={{
          textAlign: "left",
          color: TeamColor[myTeamColor],
        }}
      >
        <Typography variant="h6">
          {`Team ${myTeamColor}`.toLocaleUpperCase()}
        </Typography>
        <PlayerArena players={myTeamPlayers}></PlayerArena>
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
        <PlayerArena players={otherTeamPlayers}></PlayerArena>
      </Grid>

      {canStartGame && (
        <Grid item style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={async () => {
              await createFirstTurn({
                variables: {
                  gameId: currentGame.id,
                  playerId: nextPlayer(null, currentGame.players).id,
                },
              })
              updateGameState({
                variables: {
                  id: currentGame.id,
                  state: GameStateEnum.ActivePlay,
                },
              })
            }}
          >
            Start Game
          </Button>
        </Grid>
      )}
    </Grid>
  )
}

export default TeamAssignment
