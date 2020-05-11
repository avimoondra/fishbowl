import {
  Box,
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
  Rounds,
  useEndCurrentTurnAndStartNextTurnMutation,
  useStartTurnMutation
} from "generated/graphql"
import { timestamptzNow, timestamptzNowFromDate } from "lib/time"
import {
  ActiveTurnPlayState,
  drawableCardsWithoutCompletedCardsInActiveTurn,
  nextPlayerForNextTeam,
  nextPlayerForSameTeam
} from "lib/turn"
import { compact, filter, includes, reject, sample } from "lodash"
import * as React from "react"
import { isMobile } from "react-device-detect"

enum ShownCardStatus {
  Complete = "complete",
  Skipped = "skipped",
  Incomplete = "incomplete",
  Incorrect = "incorrect"
}

const GreenCheckbox = withStyles({
  root: {
    color: grey[600],
    "&$checked": {
      color: green[600]
    }
  },
  checked: {}
})((props: CheckboxProps) => <Checkbox color="default" {...props} />)

function YourTurnContent(props: {
  yourTeamPlayers: CurrentGameSubscription["games"][0]["players"]
  cardsInBowl: CurrentGameSubscription["games"][0]["cards"]
  activePlayer: CurrentGameSubscription["games"][0]["players"][0]
  activeTurn: CurrentGameSubscription["games"][0]["turns"][0]
  activeTurnPlayState: ActiveTurnPlayState
  secondsLeft: number
  currentRoundId: Rounds["id"]
  nextRoundId?: Rounds["id"]
  onStart: () => void
  onOutOfCards: () => void
}) {
  const currentGame = React.useContext(CurrentGameContext)
  const [startTurn] = useStartTurnMutation()
  const [endTurn] = useEndCurrentTurnAndStartNextTurnMutation()

  const [startingTurn, setStartingTurn] = React.useState(false)
  const [endingTurn, setEndingTurn] = React.useState(false)
  const [skippingTurn, setSkippingTurn] = React.useState(false)

  const [activeCard, setActiveCard] = React.useState<
    CurrentGameSubscription["games"][0]["cards"][0] | null
  >(null)

  const [shownCardsInActiveTurn, setShownCardsInActiveTurn] = React.useState<
    Map<number, { status: ShownCardStatus; startedAt?: Date; endedAt?: Date }>
  >(new Map())

  // Attach keyboard shortcuts to the Correct and Skip actions
  const SHORTCUTS_COMPLETE = [" ", "c"]
  const SHORTCUTS_SKIP = ["s"]
  const upHandler = (event: KeyboardEvent) => {
    if (includes(SHORTCUTS_COMPLETE, event.key)) {
      onNextCardClick(ShownCardStatus.Complete)
    } else if (
      currentGame.allow_card_skips &&
      includes(SHORTCUTS_SKIP, event.key)
    ) {
      onNextCardClick(ShownCardStatus.Skipped)
    }
  }
  React.useEffect(() => {
    window.addEventListener("keyup", upHandler)
    return () => {
      window.removeEventListener("keyup", upHandler)
    }
  }, [activeCard])

  React.useEffect(() => {
    if (activeCard && props.secondsLeft <= 0) {
      const shownCard = shownCardsInActiveTurn.get(activeCard.id)
      if (shownCard) {
        setShownCardsInActiveTurn(
          new Map(
            shownCardsInActiveTurn.set(activeCard.id, {
              ...shownCard,
              endedAt: new Date()
            })
          )
        )
      }
    }
  }, [props.secondsLeft, activeCard])

  const onNextCardClick = (status: ShownCardStatus) => {
    if (activeCard) {
      const shownCard = shownCardsInActiveTurn.get(activeCard.id)
      if (shownCard) {
        setShownCardsInActiveTurn(
          new Map(
            shownCardsInActiveTurn.set(activeCard.id, {
              ...shownCard,
              status: status,
              endedAt: new Date()
            })
          )
        )
      }

      const nextSet = drawableCardsWithoutCompletedCardsInActiveTurn(
        props.cardsInBowl,
        [...shownCardsInActiveTurn.keys()]
      )
      const outOfCards = nextSet.length === 0
      if (outOfCards) {
        props.onOutOfCards()
      } else {
        const nextActiveCard = sample(nextSet) || null
        setActiveCard(nextActiveCard)
        if (nextActiveCard) {
          const nextMap = new Map(
            shownCardsInActiveTurn.set(nextActiveCard.id, {
              status: ShownCardStatus.Incomplete,
              startedAt: new Date()
            })
          )
          setShownCardsInActiveTurn(nextMap)
        }
      }
    }
  }

  return (
    <Box p={2}>
      <Grid container direction="column" spacing={4} alignItems="center">
        {props.activeTurnPlayState === ActiveTurnPlayState.Reviewing &&
        props.secondsLeft >= 0 ? (
          <Grid item>{`You'll be starting the next round with ${Math.round(
            props.secondsLeft
          )} seconds leftover from this turn!`}</Grid>
        ) : null}

        {/* Cards */}
        {[ActiveTurnPlayState.Waiting, ActiveTurnPlayState.Playing].includes(
          props.activeTurnPlayState
        ) && (
          <>
            <Grid item container>
              {reject(
                props.yourTeamPlayers,
                player => player.id === props.activePlayer.id
              ).map(player => {
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
                  <div style={{ textAlign: "center", color: grey[600] }}>
                    You'll see cards here!
                  </div>
                )}
              </BowlCard>
            </Grid>
          </>
        )}
        {props.activeTurnPlayState === ActiveTurnPlayState.Reviewing && (
          <>
            <Grid item>
              Review the cards you went through this turn. If you
              {currentGame.allow_card_skips && "skipped or"}
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
                    <Grid item>
                      <Box>
                        <GreenCheckbox
                          checked={
                            shownCardsInActiveTurn.get(cardId)?.status ===
                            ShownCardStatus.Complete
                          }
                          onChange={({ target: { checked } }) => {
                            const shownCard = shownCardsInActiveTurn.get(cardId)
                            if (shownCard) {
                              setShownCardsInActiveTurn(
                                new Map(
                                  shownCardsInActiveTurn.set(cardId, {
                                    ...shownCard,
                                    status: checked
                                      ? ShownCardStatus.Complete
                                      : ShownCardStatus.Incomplete
                                  })
                                )
                              )
                            }
                          }}
                        ></GreenCheckbox>
                      </Box>
                      {shownCardsInActiveTurn.get(cardId)?.status ===
                        ShownCardStatus.Skipped && (
                        <Box color={grey[600]}>(skip)</Box>
                      )}
                    </Grid>
                    <Grid item>
                      <BowlCard>
                        {
                          props.cardsInBowl.find(card => card.id === cardId)
                            ?.word
                        }
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
          {props.activeTurnPlayState === ActiveTurnPlayState.Playing && (
            <>
              {currentGame.allow_card_skips && (
                <Grid item>
                  <Button
                    color="default"
                    onClick={async () => {
                      onNextCardClick(ShownCardStatus.Skipped)
                    }}
                  >
                    Skip
                  </Button>
                </Grid>
              )}
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={async () => {
                    onNextCardClick(ShownCardStatus.Complete)
                  }}
                >
                  Correct
                </Button>
              </Grid>
            </>
          )}

          {props.activeTurnPlayState === ActiveTurnPlayState.Waiting && (
            <Grid item>
              <Button
                disabled={skippingTurn}
                onClick={async () => {
                  setSkippingTurn(true)
                  if (
                    window.confirm(`Are you sure you want to skip your turn?`)
                  ) {
                    const response = await endTurn({
                      variables: {
                        currentTurnId: props.activeTurn.id,
                        completedCardIds: [],
                        endedAt: timestamptzNow(),
                        gameId: currentGame.id,
                        currentTurnScorings: [],
                        nextTurnplayerId: nextPlayerForSameTeam(
                          props.activePlayer,
                          currentGame.players
                        ).id,
                        roundId: props.currentRoundId
                      }
                    })
                    if (response.errors) {
                      setSkippingTurn(false)
                    }
                  } else {
                    setSkippingTurn(false)
                  }
                }}
              >
                Skip turn
              </Button>
            </Grid>
          )}

          {props.activeTurnPlayState === ActiveTurnPlayState.Reviewing && (
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                disabled={endingTurn}
                onClick={async () => {
                  setEndingTurn(true)
                  const shownCardIds = [...shownCardsInActiveTurn.keys()]
                  const completedCardIds = filter(shownCardIds, cardId => {
                    return (
                      shownCardsInActiveTurn.get(cardId)?.status ===
                      ShownCardStatus.Complete
                    )
                  })
                  const continueTurnIntoNewRound =
                    completedCardIds.length === shownCardIds.length &&
                    drawableCardsWithoutCompletedCardsInActiveTurn(
                      props.cardsInBowl,
                      [...shownCardsInActiveTurn.keys()]
                    ).length === 0 &&
                    props.secondsLeft !== 0

                  const scorings = compact(
                    shownCardIds.map(cardId => {
                      const card = shownCardsInActiveTurn.get(cardId)
                      if (card && card.startedAt && card.endedAt) {
                        return {
                          turn_id: props.activeTurn.id,
                          card_id: cardId,
                          score:
                            card.status === ShownCardStatus.Complete ? 1 : 0,
                          status: card.status,
                          started_at: timestamptzNowFromDate(card.startedAt),
                          ended_at: timestamptzNowFromDate(card.endedAt)
                        }
                      } else {
                        return null
                      }
                    })
                  )

                  const response = await endTurn({
                    variables: {
                      currentTurnId: props.activeTurn.id,
                      completedCardIds: completedCardIds,
                      endedAt: timestamptzNow(),
                      gameId: currentGame.id,
                      currentTurnScorings: scorings,
                      roundId: continueTurnIntoNewRound
                        ? props.nextRoundId
                        : props.currentRoundId,
                      nextTurnplayerId: continueTurnIntoNewRound
                        ? props.activePlayer.id
                        : nextPlayerForNextTeam(
                            props.activePlayer,
                            currentGame.turns,
                            currentGame.players
                          ).id,
                      nextTurnSecondsPerTurnOverride: continueTurnIntoNewRound
                        ? Math.round(Number(props.secondsLeft))
                        : null
                    }
                  })

                  if (response.errors) {
                    setEndingTurn(false)
                  } else if (continueTurnIntoNewRound) {
                    window.location.reload()
                  }
                }}
              >
                End turn
              </Button>
            </Grid>
          )}

          {props.activeTurnPlayState === ActiveTurnPlayState.Waiting && (
            <Grid item>
              <Button
                variant="contained"
                size="large"
                color="primary"
                disabled={startingTurn}
                onClick={async () => {
                  setStartingTurn(true)
                  const response = await startTurn({
                    variables: {
                      currentTurnId: props.activeTurn.id,
                      startedAt: timestamptzNow()
                    }
                  })
                  if (response.errors) {
                    setStartingTurn(false)
                  } else {
                    const nextActiveCard = sample(
                      drawableCardsWithoutCompletedCardsInActiveTurn(
                        props.cardsInBowl,
                        [...shownCardsInActiveTurn.keys()]
                      )
                    )
                    if (nextActiveCard) {
                      setShownCardsInActiveTurn(
                        new Map([
                          [
                            nextActiveCard.id,
                            {
                              status: ShownCardStatus.Incomplete,
                              startedAt: new Date()
                            }
                          ]
                        ])
                      )
                      setActiveCard(nextActiveCard)
                    }
                    props.onStart()
                  }
                }}
              >
                Start Turn
              </Button>
            </Grid>
          )}
        </Grid>

        {!isMobile &&
          props.activeTurnPlayState === ActiveTurnPlayState.Playing && (
            <Grid item style={{ color: grey[600] }}>
              Hint: Press the spacebar for "Correct"
              {currentGame.allow_card_skips && ', and S for "Skip"'}
            </Grid>
          )}
      </Grid>
    </Box>
  )
}

export default YourTurnContent
