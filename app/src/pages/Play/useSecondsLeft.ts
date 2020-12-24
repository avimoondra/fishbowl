import { CurrentGameContext } from "contexts/CurrentGame"
import { ActiveTurnPlayState } from "lib/turn"
import useInterval from "lib/useInterval"
import { last } from "lodash"
import React from "react"

/**
 * Milliseconds to delay in between timer updates.
 *
 * Intentional < 1s to mitigate setInterval drift.
 *
 * @see https://stackoverflow.com/q/985670/14386557
 */
const INTERVAL_DELAY = 100

export default function useSecondsLeft(
  activeTurnPlayState: ActiveTurnPlayState,
  serverTimeOffset: number
): number {
  const currentGame = React.useContext(CurrentGameContext)
  const activeTurn = last(currentGame.turns)
  const activeTurnId = activeTurn?.id
  const startingSeconds =
    activeTurn?.seconds_per_turn_override || currentGame.seconds_per_turn || 0

  const calculateSecondsLeft = () => {
    if (!activeTurn?.started_at) {
      return startingSeconds
    }

    const end =
      new Date(activeTurn.started_at).getTime() + 1000 * startingSeconds

    return Math.floor((end - (serverTimeOffset + Date.now())) / 1000)
  }

  const [secondsLeft, setSecondsLeft] = React.useState(calculateSecondsLeft())

  React.useEffect(() => {
    setSecondsLeft(calculateSecondsLeft())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentGame.seconds_per_turn, // change in settings
    activeTurnId, // new turn, reset state
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
