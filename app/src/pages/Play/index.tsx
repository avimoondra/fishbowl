import { Box, Divider, Grid, Typography } from "@material-ui/core"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import { useTitleStyle } from "index"
import { Team, TeamColor } from "lib/team"
import { calculateSecondsLeft, dateFromTimestamptzNow } from "lib/time"
import { ActiveTurnPlayState, drawableCards } from "lib/turn"
import useInterval from "lib/useInterval"
import { filter, last } from "lodash"
import GameRoundInstructionCard, {
  GameRound
} from "pages/Play/GameRoundInstructionCard"
import HostControls from "pages/Play/HostControls"
import NoMoreRounds from "pages/Play/NoMoreRounds"
import { OtherTeamConent, YourTeamTurnContent } from "pages/Play/TeamContent"
import TurnContextPanel from "pages/Play/TurnContextPanel"
import YourTurnContent from "pages/Play/YourTurnContent"
import * as React from "react"

function Play() {
  const titleClasses = useTitleStyle()
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const [
    hasDismissedInstructionCard,
    setHasDismissedInstructionCard
  ] = React.useState(false)

  const completedCardIds = currentGame.turns.flatMap(
    turn => turn.completed_card_ids
  )

  const activeTurn = last(currentGame.turns)
  const activePlayer = currentGame.players.find(
    player => player.id === activeTurn?.player_id
  )

  const [activeTurnPlayState, setActiveTurnPlayState] = React.useState(
    ActiveTurnPlayState.Waiting
  )

  const startingSeconds =
    activeTurn?.seconds_per_turn_override || currentGame.seconds_per_turn || 0

  const [secondsLeft, setSecondsLeft] = React.useState(
    activeTurn?.started_at
      ? calculateSecondsLeft(
          dateFromTimestamptzNow(activeTurn.started_at),
          startingSeconds
        )
      : startingSeconds
  )

  // for non active players
  React.useEffect(() => {
    if (activeTurn?.started_at !== null) {
      setActiveTurnPlayState(ActiveTurnPlayState.Playing)
      setSecondsLeft(
        calculateSecondsLeft(
          dateFromTimestamptzNow(activeTurn?.started_at),
          startingSeconds
        )
      )
    }
  }, [activeTurn?.started_at])

  // new turn, reset state
  React.useEffect(() => {
    setActiveTurnPlayState(ActiveTurnPlayState.Waiting)
    setSecondsLeft(
      activeTurn?.started_at
        ? calculateSecondsLeft(
            dateFromTimestamptzNow(activeTurn.started_at),
            startingSeconds
          )
        : startingSeconds
    )
  }, [activeTurn?.id])

  // countdown timer
  useInterval(() => {
    if (
      activeTurnPlayState === ActiveTurnPlayState.Playing &&
      activeTurn?.started_at &&
      secondsLeft >= 0
    ) {
      setSecondsLeft(
        calculateSecondsLeft(
          dateFromTimestamptzNow(activeTurn.started_at),
          startingSeconds
        )
      )
    } else if (
      activeTurnPlayState === ActiveTurnPlayState.Playing &&
      secondsLeft <= 0
    ) {
      setActiveTurnPlayState(ActiveTurnPlayState.Reviewing)
    }
  }, 1000)

  if (!activeTurn || !activePlayer) {
    return null
  }

  const yourTurn = activePlayer.id === currentPlayer.id
  const yourTeamTurn = activePlayer.team === currentPlayer.team

  let titleText = null
  let content = null
  if (yourTurn) {
    titleText = "Your Turn"
    content = (
      <YourTurnContent
        yourTeamPlayers={filter(
          currentGame.players,
          player => activePlayer.team === player.team
        )}
        cardsInBowl={drawableCards(currentGame.turns, currentGame.cards)}
        secondsLeft={secondsLeft}
        activePlayer={activePlayer}
        activeTurn={activeTurn}
        activeTurnPlayState={activeTurnPlayState}
        onStart={() => {
          setActiveTurnPlayState(ActiveTurnPlayState.Playing)
        }}
        onOutOfCards={() => {
          setActiveTurnPlayState(ActiveTurnPlayState.Reviewing)
        }}
      ></YourTurnContent>
    )
  } else if (yourTeamTurn) {
    titleText = "You're Guessin'"
    content = (
      <YourTeamTurnContent
        activePlayer={activePlayer}
        activeTurn={activeTurn}
      ></YourTeamTurnContent>
    )
  } else {
    titleText = "You're Chillin'"
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

  if (completedCardIds.length === 3 * currentGame.cards.length) {
    return <NoMoreRounds></NoMoreRounds>
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

      {round && !hasDismissedInstructionCard && (
        <Grid item>
          <Box mb={1}>
            <GameRoundInstructionCard
              round={round}
              onDismiss={() => {
                setHasDismissedInstructionCard(true)
              }}
            ></GameRoundInstructionCard>
          </Box>
        </Grid>
      )}
      <Grid item>
        <Grid item>
          <TurnContextPanel
            secondsLeft={Math.round(Math.max(secondsLeft, 0))}
          ></TurnContextPanel>
        </Grid>
      </Grid>
      <Grid item>{content}</Grid>

      {currentPlayer.role === PlayerRole.Host && (
        <HostControls
          activePlayer={activePlayer}
          activeTurn={activeTurn}
        ></HostControls>
      )}
    </Grid>
  )
}

export default Play
