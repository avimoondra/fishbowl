import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext } from "contexts/CurrentPlayer"
import { ActiveTurnPlayState } from "lib/turn"
import useInterval from "lib/useInterval"
import { last } from "lodash"
import React, { useContext, useEffect } from "react"
import { calculateSecondsLeft } from "./functions"

/**
 * Milliseconds to delay in between timer updates.
 *
 * Intentional < 1s to mitigate setInterval drift.
 *
 * @see https://stackoverflow.com/q/985670/14386557
 */
const INTERVAL_DELAY = 100

export default function useSecondsLeft(
  activeTurnPlayState: ActiveTurnPlayState
): number {
  const { serverTimeOffset } = useContext(CurrentPlayerContext)
  const currentGame = useContext(CurrentGameContext)
  const activeTurn = last(currentGame.turns)
  const startingSeconds =
    activeTurn?.seconds_per_turn_override || currentGame.seconds_per_turn || 0

  const [secondsLeft, setSecondsLeft] = React.useState(
    calculateSecondsLeft(startingSeconds, serverTimeOffset, activeTurn)
  )
  useEffect(() => {
    setSecondsLeft(
      calculateSecondsLeft(startingSeconds, serverTimeOffset, activeTurn)
    )
  }, [startingSeconds, serverTimeOffset, activeTurn])

  // countdown timer
  useInterval(() => {
    if (
      activeTurnPlayState === ActiveTurnPlayState.Playing &&
      activeTurn?.started_at &&
      secondsLeft >= 1
    ) {
      setSecondsLeft(
        calculateSecondsLeft(startingSeconds, serverTimeOffset, activeTurn)
      )
    }
  }, INTERVAL_DELAY)

  return secondsLeft
}
