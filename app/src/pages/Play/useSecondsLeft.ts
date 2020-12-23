import { CurrentGameContext } from "contexts/CurrentGame"
import { dateFromTimestamptzNow } from "lib/time"
import { ActiveTurnPlayState } from "lib/turn"
import useInterval from "lib/useInterval"
import { last } from "lodash"
import React from "react"
import useServerDateOffset from "./useServerDateOffset"

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
  const serverDateOffset = useServerDateOffset()
  const currentGame = React.useContext(CurrentGameContext)
  const activeTurn = last(currentGame.turns)
  const startingSeconds =
    activeTurn?.seconds_per_turn_override || currentGame.seconds_per_turn || 0

  const calculateSecondsLeft = () => {
    if (!activeTurn?.started_at) {
      return startingSeconds
    }

    const end =
      dateFromTimestamptzNow(activeTurn.started_at).getTime() +
      1000 * startingSeconds

    return Math.floor((end - (serverDateOffset + Date.now())) / 1000)
  }

  const [secondsLeft, setSecondsLeft] = React.useState(calculateSecondsLeft())

  React.useEffect(() => {
    setSecondsLeft(calculateSecondsLeft())
  }, [
    currentGame.seconds_per_turn, // change in settings
    activeTurn?.id, // new turn, reset state
  ])

  // countdown timer
  useInterval(() => {
    if (
      activeTurnPlayState === ActiveTurnPlayState.Playing &&
      activeTurn?.started_at &&
      secondsLeft >= 1
    ) {
      setSecondsLeft(calculateSecondsLeft())
    }
  }, INTERVAL_DELAY)

  return secondsLeft
}
