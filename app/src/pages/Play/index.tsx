import { Box, Divider, Grid, Typography } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import { useStartReviewMutation } from "generated/graphql"
import { useTitleStyle } from "index"
import { currentPlayerTeam, Team, TeamColor } from "lib/team"
import { ActiveTurnPlayState, drawableCards } from "lib/turn"
import { capitalize, filter, flatMap, last } from "lodash"
import GameRoundInstructionCard, {
  GameRound,
} from "pages/Play/GameRoundInstructionCard"
import HostControls from "pages/Play/HostControls"
import NoMoreRounds from "pages/Play/NoMoreRounds"
import { OtherTeamContent, YourTeamTurnContent } from "pages/Play/TeamContent"
import TurnContextPanel from "pages/Play/TurnContextPanel"
import YourTurnContent from "pages/Play/YourTurnContent"
import * as React from "react"
import { playStateFromTurn } from "./functions"
import useSecondsLeft from "./useSecondsLeft"

function Play() {
  const titleClasses = useTitleStyle()
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)

  const [startReview] = useStartReviewMutation()

  const [
    hasDismissedInstructionCard,
    setHasDismissedInstructionCard,
  ] = React.useState(false)

  const completedCardIds = flatMap(
    currentGame.turns,
    (turn) => turn.completed_card_ids
  )

  const activeTurn = last(currentGame.turns)
  const activePlayer = currentGame.players.find(
    (player) => player.id === activeTurn?.player_id
  )

  const [activeTurnPlayState, setActiveTurnPlayState] = React.useState(
    playStateFromTurn(activeTurn)
  )
  React.useEffect(() => {
    setActiveTurnPlayState(playStateFromTurn(activeTurn))
  }, [activeTurn])

  const secondsLeft = useSecondsLeft(activeTurnPlayState)

  // countdown timer
  React.useEffect(() => {
    if (
      activeTurnPlayState === ActiveTurnPlayState.Playing &&
      secondsLeft <= 0
    ) {
      setActiveTurnPlayState(ActiveTurnPlayState.Reviewing)
      if (currentPlayer.id === activeTurn?.player_id && activeTurn?.id) {
        startReview({
          variables: {
            currentTurnId: activeTurn.id,
          },
        })
      }
    }
  }, [secondsLeft]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!activeTurn || !activePlayer) {
    return null
  }

  const numCompletedCards = completedCardIds.length
  const totalNumCards = currentGame.cards.length
  const numRounds = currentGame.rounds.length

  if (numCompletedCards === numRounds * totalNumCards) {
    return <NoMoreRounds />
  }

  const roundMarkers = [...Array(numRounds).keys()]
  let roundNum = Math.floor(numCompletedCards / totalNumCards)
  const currentRoundId = currentGame.rounds[roundNum].id
  const nextRoundId = currentGame.rounds[roundNum + 1]?.id

  let roundMarker = numCompletedCards / totalNumCards
  let round = ""
  if (roundMarkers.includes(roundMarker)) {
    const value = capitalize(currentGame.rounds[roundMarker].value)
    round = GameRound[value as GameRound] || value
  }

  const yourTurn = activePlayer.id === currentPlayer.id
  const yourTeamTurn =
    activePlayer.team ===
    currentPlayerTeam(currentPlayer.id, currentGame.players)

  let titleText = null
  let content = null
  if (yourTurn) {
    titleText = "Your Turn"
    content = (
      <YourTurnContent
        yourTeamPlayers={filter(
          currentGame.players,
          (player) => activePlayer.team === player.team
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
            },
          })
        }}
        currentRoundId={currentRoundId}
        nextRoundId={nextRoundId}
      />
    )
  } else if (yourTeamTurn) {
    titleText = "You're Guessin'"
    content = (
      <YourTeamTurnContent
        activePlayer={activePlayer}
        activeTurn={activeTurn}
      />
    )
  } else {
    titleText = "You're Chillin'"
    content = (
      <OtherTeamContent activePlayer={activePlayer} activeTurn={activeTurn} />
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
              ] || grey[600],
          }}
        />
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
            />
          </Box>
        </Grid>
      )}
      <Grid item>
        <TurnContextPanel
          secondsLeft={Math.round(Math.max(secondsLeft, 0)) || 0}
        />
      </Grid>
      <Grid item>{content}</Grid>

      {currentPlayer.role === PlayerRole.Host && (
        <Grid item>
          <HostControls
            activePlayer={activePlayer}
            activeTurn={activeTurn}
            currentRoundId={currentRoundId}
          />
        </Grid>
      )}
    </Grid>
  )
}

export default Play
