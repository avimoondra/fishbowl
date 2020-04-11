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
import PlayerChip from "components/PlayerChip"
import { CurrentGameContext } from "contexts/CurrentGame"
import {
  CurrentGameSubscription,
  useEndCurrentTurnAndStartNextTurnMutation,
  useStartTurnMutation
} from "generated/graphql"
import { filter, sample } from "lodash"
import CountdownTimer from "pages/Play/CountdownTimer"
import { timestamptzNow } from "lib/time"
import {
  drawableCardsWithoutCompletedCardsInActiveTurn,
  nextPlayer,
  nextPlayerForSameTeam
} from "lib/turn"
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

function YourTurnContent(props: {
  yourTeamPlayers: CurrentGameSubscription["games"][0]["players"]
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
    props.activeTurn.seconds_per_turn_override ||
    currentGame.seconds_per_turn ||
    0

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
        <>
          <Grid item container>
            {props.yourTeamPlayers.map(player => {
              return (
                <>
                  <PlayerChip
                    key={player.id}
                    username={player.username || ""}
                    team={player.team}
                  ></PlayerChip>
                  <div style={{ width: 4 }}></div>
                </>
              )
            })}
            <div> from your team are guessing!</div>
          </Grid>
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
        </>
      )}
      {activeTurnPlayState === ActiveTurnPlayState.Reviewing && (
        <>
          <Grid item>
            Review the cards you went through this turn. If you skipped or
            missed any, just uncheck them.
          </Grid>
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
        </>
      )}

      {/* Controls */}
      <Grid item container justify="space-around">
        {activeTurnPlayState === ActiveTurnPlayState.Playing && (
          <>
            {turnStartedAt && (
              <Grid item style={{ minWidth: 100 }}>
                <CountdownTimer
                  seconds={startingSeconds}
                  startDate={turnStartedAt}
                  isActive
                  onCountdown={secondsLeft => {
                    setSecondsLeft(secondsLeft)
                    if (secondsLeft <= 0) {
                      setActiveTurnPlayState(ActiveTurnPlayState.Reviewing)
                    }
                  }}
                ></CountdownTimer>
              </Grid>
            )}
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={async () => {
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
                    } else {
                      const nextActiveCard = sample(nextSet) || null
                      setActiveCard(nextActiveCard)
                      if (nextActiveCard) {
                        const nextMap = new Map(
                          shownCardsInActiveTurn.set(
                            nextActiveCard.id,
                            ShownCardStatus.Incomplete
                          )
                        )
                        setShownCardsInActiveTurn(nextMap)
                      }
                    }
                  }
                }}
              >
                Next Card
              </Button>
            </Grid>
          </>
        )}

        {activeTurnPlayState === ActiveTurnPlayState.Waiting && (
          <Grid item>
            <Button
              onClick={async () => {
                endTurn({
                  variables: {
                    currentTurnId: props.activeTurn.id,
                    completedCardIds: [],
                    endedAt: timestamptzNow(),
                    gameId: currentGame.id,
                    nextTurnplayerId: nextPlayerForSameTeam(
                      props.activePlayer,
                      currentGame.players
                    ).id
                  }
                })
              }}
            >
              Skip turn
            </Button>
          </Grid>
        )}

        {activeTurnPlayState === ActiveTurnPlayState.Reviewing && (
          <Grid item>
            <Button
              variant="contained"
              color="primary"
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
              End turn
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
                const nextActiveCard =
                  sample(
                    drawableCardsWithoutCompletedCardsInActiveTurn(
                      props.cardsInBowl,
                      [...shownCardsInActiveTurn.keys()]
                    )
                  ) || null
                if (nextActiveCard) {
                  const nextMap = new Map(
                    shownCardsInActiveTurn.set(
                      nextActiveCard.id,
                      ShownCardStatus.Incomplete
                    )
                  )
                  setShownCardsInActiveTurn(nextMap)
                  setActiveCard(nextActiveCard)
                }
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
