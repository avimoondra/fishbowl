import { TurnFragment } from "generated/graphql"
import { ActiveTurnPlayState } from "lib/turn"

export const playStateFromTurn = (turn?: TurnFragment) => {
  if (turn?.review_started_at) {
    return ActiveTurnPlayState.Reviewing
  }

  if (turn?.started_at) {
    return ActiveTurnPlayState.Playing
  }

  return ActiveTurnPlayState.Waiting
}

export const calculateSecondsLeft = (
  startingSeconds: number,
  serverTimeOffset: number,
  activeTurn?: TurnFragment
) => {
  if (!activeTurn?.started_at) {
    return startingSeconds
  }

  const end = new Date(activeTurn.started_at).getTime() + 1000 * startingSeconds

  return Math.floor((end - (serverTimeOffset + Date.now())) / 1000)
}
