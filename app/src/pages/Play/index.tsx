import { Box, Button, Divider, Grid, Typography } from "@material-ui/core"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import { GameStateEnum, useUpdateGameStateMutation } from "generated/graphql"
import { useTitleStyle } from "index"
import { filter, last } from "lodash"
import GameRoundInstructionCard, {
  GameRound
} from "pages/Play/GameRoundInstructionCard"
import { OtherTeamConent, YourTeamTurnContent } from "pages/Play/TeamContent"
import { drawableCards } from "pages/Play/turn"
import YourTurnContent from "pages/Play/YourTurnContent"
import { Team, TeamColor } from "pages/TeamAssignment/team"
import * as React from "react"

function GameOver() {
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const titleClasses = useTitleStyle()
  const [updateGameState] = useUpdateGameStateMutation()

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h4" className={titleClasses.title}>
          Game Over
        </Typography>
      </Grid>
      <Grid item>Your host will end the game to show some stats!</Grid>
      {currentPlayer.role === PlayerRole.Host && (
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              updateGameState({
                variables: {
                  id: currentGame.id,
                  state: GameStateEnum.Ended
                }
              })
            }}
          >
            End Game
          </Button>
        </Grid>
      )}
    </Grid>
  )
}

function Play() {
  const titleClasses = useTitleStyle()
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)

  const completedCardIds = currentGame.turns.flatMap(
    turn => turn.completed_card_ids
  )

  if (completedCardIds.length === 3 * currentGame.cards.length) {
    return <GameOver></GameOver>
  }

  const activeTurn = last(currentGame.turns)
  const activePlayer = currentGame.players.find(
    player => player.id === activeTurn?.player_id
  )

  if (!activeTurn || !activePlayer) {
    return null
  }

  const yourTurn = activePlayer.id === currentPlayer.id
  const yourTeamTurn = activePlayer.team === currentPlayer.team

  let titleText = null
  if (yourTurn) {
    titleText = "Your Turn"
  } else if (yourTeamTurn) {
    titleText = "You're Guessin'"
  } else {
    titleText = "You're Chillin'"
  }

  let content = null
  if (yourTurn) {
    content = (
      <YourTurnContent
        yourTeamPlayers={filter(
          currentGame.players,
          player => activePlayer.team === player.team
        )}
        cardsInBowl={drawableCards(currentGame.turns, currentGame.cards)}
        activePlayer={activePlayer}
        activeTurn={activeTurn}
      ></YourTurnContent>
    )
  } else if (yourTeamTurn) {
    content = (
      <YourTeamTurnContent
        activePlayer={activePlayer}
        activeTurn={activeTurn}
      ></YourTeamTurnContent>
    )
  } else {
    content = (
      <OtherTeamConent
        activePlayer={activePlayer}
        activeTurn={activeTurn}
      ></OtherTeamConent>
    )
  }

  const numCompletedCards = completedCardIds.length
  const totalNumCards = currentGame.cards.length
  let round
  if (numCompletedCards === 0) {
    round = GameRound.Taboo
  } else if (numCompletedCards / totalNumCards === 1.0) {
    round = GameRound.Charades
  } else if (numCompletedCards / totalNumCards === 2.0) {
    round = GameRound.Password
  }

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h4" className={titleClasses.title}>
          {titleText}
        </Typography>
      </Grid>
      <Grid item>
        <Divider
          variant="middle"
          style={{
            width: 150,
            height: 2,
            backgroundColor:
              currentPlayer.team === Team.Blue
                ? TeamColor[Team.Blue]
                : TeamColor[Team.Red]
          }}
        ></Divider>
      </Grid>
      {round && (
        <Grid item>
          <Box mb={1}>
            <GameRoundInstructionCard round={round}></GameRoundInstructionCard>
          </Box>
        </Grid>
      )}
      <Grid item>{content}</Grid>
    </Grid>
  )
}

export default Play
