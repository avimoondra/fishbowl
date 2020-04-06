import {
  Button,
  Checkbox,
  CheckboxProps,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core"
import { green, grey } from "@material-ui/core/colors"
import BowlCard from "components/BowlCard"
import { CurrentGameContext } from "contexts/CurrentGame"
import {
  CurrentGameSubscription,
  useEndCurrentTurnAndStartNextTurnMutation,
  useStartTurnMutation,
} from "generated/graphql"
import { cloneDeep, filter, sample } from "lodash"
import CountdownTimer from "pages/Play/CountdownTimer"
import { timestamptzNow } from "pages/Play/time"
import {
  drawableCards,
  drawableCardsWithoutCompletedCardsInActiveTurn,
  nextPlayer,
} from "pages/Play/turn"
import * as React from "react"

enum ActiveTurnPlayState {
  Waiting = 1,
  Playing,
  Reviewing,
}

const GreenCheckbox = withStyles({
  root: {
    color: grey[500],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />)

function YourTurnContent(props: {
  activePlayer: CurrentGameSubscription["games"][0]["players"][0]
  activeTurn: CurrentGameSubscription["games"][0]["turns"][0]
}) {
  const currentGame = React.useContext(CurrentGameContext)
  const [startTurn] = useStartTurnMutation()
  const [endTurn] = useEndCurrentTurnAndStartNextTurnMutation()
  const [activeCard, setActiveCard] = React.useState<
    CurrentGameSubscription["games"][0]["cards"][0] | null
  >(null)
  const [
    completedCardIdsInActiveTurn,
    setCompletedCardIdsInActiveTurn,
  ] = React.useState<Array<number>>([])
  const [activeTurnPlayState, setActiveTurnPlayState] = React.useState(
    ActiveTurnPlayState.Waiting
  )
  const [
    completedCardIdsInActiveTurnChecked,
    setCompletedCardIdsInActiveTurnChecked,
  ] = React.useState<Array<boolean>>([])
  const [turnStartedAt, setTurnStartedAt] = React.useState<Date | null>(null)

  const calculateSecondsLeft = (startDate: Date, seconds: number) => {
    const endInSeconds = startDate.getSeconds() + seconds
    const nowInSeconds = new Date().getSeconds()
    return endInSeconds - nowInSeconds
  }

  const [secondsLeft, setSecondsLeft] = React.useState<number | null>(
    props.activeTurn.seconds_per_turn_override ||
      currentGame.seconds_per_turn ||
      null
  )

  React.useEffect(() => {
    if (
      (props.activeTurn.seconds_per_turn_override ||
        currentGame.seconds_per_turn) &&
      turnStartedAt &&
      activeTurnPlayState === ActiveTurnPlayState.Playing
    ) {
      setTimeout(() => {
        const secLeft = calculateSecondsLeft(
          turnStartedAt,
          Number(
            props.activeTurn.seconds_per_turn_override ||
              currentGame.seconds_per_turn
          )
        )
        if (secLeft <= 0) {
          setActiveTurnPlayState(ActiveTurnPlayState.Reviewing)
        }
        setSecondsLeft(secLeft)
      }, 1000)
    }
  })

  const cardsInBowl = drawableCards(currentGame.turns, currentGame.cards)
  const cardsInBowlWithoutCompleted = drawableCardsWithoutCompletedCardsInActiveTurn(
    cardsInBowl,
    completedCardIdsInActiveTurn
  )

  return (
    <Grid container direction="column" spacing={4} alignItems="center">
      {/* Cards */}
      {[ActiveTurnPlayState.Waiting, ActiveTurnPlayState.Playing].includes(
        activeTurnPlayState
      ) && (
        <Grid item>
          <BowlCard>
            {activeCard ? (
              <Typography variant="h5">{activeCard.word}</Typography>
            ) : (
              <div style={{ textAlign: "center", color: grey[500] }}>
                You'll see cards here!
              </div>
            )}
          </BowlCard>
        </Grid>
      )}
      {activeTurnPlayState === ActiveTurnPlayState.Reviewing && (
        <Grid item container direction="column" spacing={2}>
          {completedCardIdsInActiveTurn.map((cardId, index) => {
            return (
              <Grid
                key={cardId}
                item
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
              >
                <Grid>
                  <GreenCheckbox
                    checked={completedCardIdsInActiveTurnChecked[index]}
                    onChange={({ target: { checked } }) => {
                      const newcompletedCardIdsInActiveTurnChecked = cloneDeep(
                        completedCardIdsInActiveTurnChecked
                      )
                      newcompletedCardIdsInActiveTurnChecked[index] = checked
                      setCompletedCardIdsInActiveTurnChecked(
                        newcompletedCardIdsInActiveTurnChecked
                      )
                    }}
                  ></GreenCheckbox>
                </Grid>
                <Grid item>
                  <BowlCard>
                    {cardsInBowl.find((card) => card.id === cardId)?.word}
                  </BowlCard>
                </Grid>
              </Grid>
            )
          })}
        </Grid>
      )}

      {/* Controls */}
      <Grid item container justify="space-around">
        {activeTurnPlayState === ActiveTurnPlayState.Playing && (
          <>
            {secondsLeft && (
              <Grid item style={{ minWidth: 100 }}>
                <CountdownTimer seconds={secondsLeft}></CountdownTimer>
              </Grid>
            )}
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={async () => {
                  if (activeCard?.id) {
                    const completed = completedCardIdsInActiveTurn.concat(
                      activeCard.id
                    )
                    const completedChecked = completedCardIdsInActiveTurnChecked.concat(
                      true
                    )
                    setCompletedCardIdsInActiveTurn(completed)
                    setCompletedCardIdsInActiveTurnChecked(completedChecked)
                    const nextSet = drawableCardsWithoutCompletedCardsInActiveTurn(
                      cardsInBowl,
                      completed
                    )
                    const outOfCards = nextSet.length === 0
                    const outOfTime = secondsLeft === 0
                    if (outOfCards || outOfTime) {
                      setActiveTurnPlayState(ActiveTurnPlayState.Reviewing)
                    } else {
                      setActiveCard(sample(nextSet) || null)
                    }
                  }
                }}
              >
                Next Card
              </Button>
            </Grid>
          </>
        )}

        {[ActiveTurnPlayState.Waiting, ActiveTurnPlayState.Reviewing].includes(
          activeTurnPlayState
        ) && (
          <Grid item>
            <Button
              variant={
                activeTurnPlayState === ActiveTurnPlayState.Waiting
                  ? undefined
                  : "contained"
              }
              color={
                activeTurnPlayState === ActiveTurnPlayState.Waiting
                  ? "default"
                  : "primary"
              }
              onClick={async () => {
                const verifiedCompletedCardIds = filter(
                  completedCardIdsInActiveTurn,
                  (_, index) => {
                    return completedCardIdsInActiveTurnChecked[index]
                  }
                )
                const continueTurnIntoNewRound =
                  verifiedCompletedCardIds.length ===
                    completedCardIdsInActiveTurnChecked.length &&
                  cardsInBowlWithoutCompleted.length === 0 &&
                  secondsLeft !== 0
                await endTurn({
                  variables: {
                    currentTurnId: props.activeTurn.id,
                    completedCardIds: verifiedCompletedCardIds,
                    endedAt: timestamptzNow(),
                    gameId: currentGame.id,
                    nextTurnplayerId: continueTurnIntoNewRound
                      ? props.activePlayer.id
                      : nextPlayer(props.activePlayer, currentGame.players).id,
                    nextTurnSecondsPerTurnOverride: continueTurnIntoNewRound
                      ? secondsLeft
                      : null,
                  },
                })
                if (continueTurnIntoNewRound) {
                  window.location.reload()
                }
              }}
            >
              {activeTurnPlayState === ActiveTurnPlayState.Waiting
                ? "Skip turn"
                : "End turn"}
            </Button>
          </Grid>
        )}

        {activeTurnPlayState === ActiveTurnPlayState.Waiting && (
          <Grid item>
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={async () => {
                await startTurn({
                  variables: {
                    currentTurnId: props.activeTurn.id,
                    startedAt: timestamptzNow(),
                  },
                })
                setTurnStartedAt(new Date())
                setActiveTurnPlayState(ActiveTurnPlayState.Playing)
                setActiveCard(sample(cardsInBowlWithoutCompleted) || null)
              }}
            >
              Start Turn
            </Button>
          </Grid>
        )}
      </Grid>
    </Grid>
  )
}

export default YourTurnContent
