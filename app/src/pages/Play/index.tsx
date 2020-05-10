import { Box, Divider, Grid, Typography } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import { useStartReviewMutation } from "generated/graphql"
import { useTitleStyle } from "index"
import { currentPlayerTeam, Team, TeamColor } from "lib/team"
import {
  calculateSecondsLeft,
  dateFromTimestamptzNow,
  timestamptzNow
} from "lib/time"
import { ActiveTurnPlayState, drawableCards } from "lib/turn"
import useInterval from "lib/useInterval"
import { capitalize, filter, last } from "lodash"
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

  const [startReview] = useStartReviewMutation()

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

      activeTurn &&
        startReview({
          variables: {
            currentTurnId: activeTurn.id,
            reviewStartedAt: timestamptzNow()
          }
        })
    }
  }, 1000)

  if (!activeTurn || !activePlayer) {
    return null
  }

  const numCompletedCards = completedCardIds.length
  const totalNumCards = currentGame.cards.length
  const numRounds = currentGame.rounds.length

  if (numCompletedCards === numRounds * totalNumCards) {
    return <NoMoreRounds></NoMoreRounds>
  }

  const roundMarkers = [...Array(numRounds).keys()]
  let roundMarker = numCompletedCards / totalNumCards
  const roundId = currentGame.rounds[roundMarker].id
  let round
  if (roundMarkers.includes(roundMarker)) {
    const value = capitalize(currentGame.rounds[roundMarker].value)
    round = GameRound[value as GameRound] || value
  }

  const yourTurn = activePlayer.id === currentPlayer.id
  const yourTeamTurn =
    activePlayer.team ===
    currentPlayerTeam(currentPlayer.id, currentGame.players)

  console.log("round id", roundId)

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
          startReview({
            variables: {
              currentTurnId: activeTurn.id,
              reviewStartedAt: timestamptzNow()
            }
          })
        }}
        roundId={roundId}
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
              TeamColor[
                currentPlayerTeam(currentPlayer.id, currentGame.players) as Team
              ] || grey[600]
          }}
        ></Divider>
      </Grid>

      {round && !hasDismissedInstructionCard && (
        <Grid item>
          <Box mb={1}>
            <GameRoundInstructionCard
              round={round}
              roundNumber={Number(roundMarker + 1)}
              onDismiss={() => {
                setHasDismissedInstructionCard(true)
              }}
            ></GameRoundInstructionCard>
          </Box>
        </Grid>
      )}
      <Grid item>
        <TurnContextPanel
          secondsLeft={Math.round(Math.max(secondsLeft, 0)) || 0}
        ></TurnContextPanel>
      </Grid>
      <Grid item>{content}</Grid>

      {currentPlayer.role === PlayerRole.Host && (
        <Grid item>
          <HostControls
            activePlayer={activePlayer}
            activeTurn={activeTurn}
            roundId={roundId}
          ></HostControls>
        </Grid>
      )}
    </Grid>
  )
}

export default Play
