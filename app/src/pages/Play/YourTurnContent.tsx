import {
  Button,
  Checkbox,
  CheckboxProps,
  Grid,
  Typography,
  withStyles
} from "@material-ui/core"
import { green, grey } from "@material-ui/core/colors"
import BowlCard from "components/BowlCard"
import { CurrentGameContext } from "contexts/CurrentGame"
import {
  CurrentGameSubscription,
  useEndCurrentTurnAndStartNextTurnMutation,
  useStartTurnMutation
} from "generated/graphql"
import { filter, sample } from "lodash"
import CountdownTimer from "pages/Play/CountdownTimer"
import { timestamptzNow } from "pages/Play/time"
import {
  drawableCardsWithoutCompletedCardsInActiveTurn,
  nextPlayer
} from "pages/Play/turn"
import * as React from "react"

enum ActiveTurnPlayState {
  Waiting = 1,
  Playing,
  Reviewing
}

enum ShownCardStatus {
  Completed = 1,
  Skipped,
  Incomplete
}

const GreenCheckbox = withStyles({
  root: {
    color: grey[500],
    "&$checked": {
      color: green[600]
    }
  },
  checked: {}
})((props: CheckboxProps) => <Checkbox color="default" {...props} />)

const calculateSecondsLeft = (startDate: Date, seconds: number) => {
  const endInSeconds = startDate.getTime() / 1000 + seconds
  const nowInSeconds = new Date().getTime() / 1000
  return endInSeconds - nowInSeconds
}

function YourTurnContent(props: {
  activePlayer: CurrentGameSubscription["games"][0]["players"][0]
  activeTurn: CurrentGameSubscription["games"][0]["turns"][0]
  cardsInBowl: CurrentGameSubscription["games"][0]["cards"]
}) {
  const currentGame = React.useContext(CurrentGameContext)
  const [startTurn] = useStartTurnMutation()
  const [endTurn] = useEndCurrentTurnAndStartNextTurnMutation()

  const [activeTurnPlayState, setActiveTurnPlayState] = React.useState(
    ActiveTurnPlayState.Waiting
  )
  const [activeCard, setActiveCard] = React.useState<
    CurrentGameSubscription["games"][0]["cards"][0] | null
  >(null)

  const [shownCardsInActiveTurn, setShownCardsInActiveTurn] = React.useState<
    Map<number, ShownCardStatus>
  >(new Map())

  const [turnStartedAt, setTurnStartedAt] = React.useState<Date | null>(null)
  const [secondsLeft, setSecondsLeft] = React.useState<number | null>(null)

  const startingSeconds =
    props.activeTurn.seconds_per_turn_override || currentGame.seconds_per_turn

  React.useEffect(() => {
    if (
      startingSeconds &&
      turnStartedAt &&
      activeTurnPlayState === ActiveTurnPlayState.Playing
    ) {
      setTimeout(() => {
        const secLeft = calculateSecondsLeft(
          turnStartedAt,
          Number(startingSeconds)
        )
        setSecondsLeft(secLeft)
        if (secLeft <= 0.0) {
          if (activeCard) {
            setActiveTurnPlayState(ActiveTurnPlayState.Reviewing)
            setShownCardsInActiveTurn(
              new Map(
                shownCardsInActiveTurn.set(
                  activeCard.id,
                  ShownCardStatus.Incomplete
                )
              )
            )
          }
          setActiveCard(null)
        }
      }, 1000)
    }
  })

  return (
    <Grid container direction="column" spacing={4} alignItems="center">
      {activeTurnPlayState === ActiveTurnPlayState.Reviewing &&
      secondsLeft &&
      secondsLeft >= 0 ? (
        <Grid item>{`You'll be starting the next round with ${Math.round(
          secondsLeft
        )} seconds leftover from this turn!`}</Grid>
      ) : null}

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
          {[...shownCardsInActiveTurn.keys()].map(cardId => {
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
                    checked={
                      shownCardsInActiveTurn.get(cardId) ===
                      ShownCardStatus.Completed
                    }
                    onChange={({ target: { checked } }) => {
                      setShownCardsInActiveTurn(
                        new Map(
                          shownCardsInActiveTurn.set(
                            cardId,
                            checked
                              ? ShownCardStatus.Completed
                              : ShownCardStatus.Incomplete
                          )
                        )
                      )
                    }}
                  ></GreenCheckbox>
                </Grid>
                <Grid item>
                  <BowlCard>
                    {props.cardsInBowl.find(card => card.id === cardId)?.word}
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
                <CountdownTimer
                  seconds={Math.round(secondsLeft)}
                ></CountdownTimer>
              </Grid>
            )}
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={async () => {
                  debugger
                  if (activeCard?.id) {
                    const nextMap = new Map(
                      shownCardsInActiveTurn.set(
                        activeCard.id,
                        ShownCardStatus.Completed
                      )
                    )
                    setShownCardsInActiveTurn(nextMap)
                    const nextSet = drawableCardsWithoutCompletedCardsInActiveTurn(
                      props.cardsInBowl,
                      [...shownCardsInActiveTurn.keys()]
                    )
                    const outOfCards = nextSet.length === 0
                    if (outOfCards) {
                      setActiveTurnPlayState(ActiveTurnPlayState.Reviewing)
                      setActiveCard(null)
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
                const shownCardIds = [...shownCardsInActiveTurn.keys()]
                const completedCardIds = filter(shownCardIds, cardId => {
                  return (
                    shownCardsInActiveTurn.get(cardId) ===
                    ShownCardStatus.Completed
                  )
                })
                const continueTurnIntoNewRound =
                  completedCardIds.length === shownCardIds.length &&
                  drawableCardsWithoutCompletedCardsInActiveTurn(
                    props.cardsInBowl,
                    [...shownCardsInActiveTurn.keys()]
                  ).length === 0 &&
                  secondsLeft !== 0
                await endTurn({
                  variables: {
                    currentTurnId: props.activeTurn.id,
                    completedCardIds: completedCardIds,
                    endedAt: timestamptzNow(),
                    gameId: currentGame.id,
                    nextTurnplayerId: continueTurnIntoNewRound
                      ? props.activePlayer.id
                      : nextPlayer(
                          props.activePlayer,
                          currentGame.turns,
                          currentGame.players
                        ).id,
                    nextTurnSecondsPerTurnOverride: continueTurnIntoNewRound
                      ? Math.round(Number(secondsLeft))
                      : null
                  }
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
                    startedAt: timestamptzNow()
                  }
                })
                setTurnStartedAt(new Date())
                setSecondsLeft(Number(startingSeconds))
                setActiveTurnPlayState(ActiveTurnPlayState.Playing)
                setActiveCard(
                  sample(
                    drawableCardsWithoutCompletedCardsInActiveTurn(
                      props.cardsInBowl,
                      [...shownCardsInActiveTurn.keys()]
                    )
                  ) || null
                )
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
