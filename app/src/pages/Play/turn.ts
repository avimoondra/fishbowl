import { CurrentGameSubscription } from "generated/graphql"
import {
  countBy,
  difference,
  filter,
  groupBy,
  max,
  reject,
  sortBy,
  values
} from "lodash"

export function nextPlayer(
  activePlayer: CurrentGameSubscription["games"][0]["players"][0] | null,
  players: CurrentGameSubscription["games"][0]["players"]
) {
  const playersSortedBySequence = sortBy(players, ["team_sequence"])
  if (activePlayer?.team_sequence) {
    return playersSortedBySequence[
      activePlayer?.team_sequence % playersSortedBySequence.length
    ]
  } else {
    return playersSortedBySequence[0]
  }
}

export function drawableCards(
  turns: CurrentGameSubscription["games"][0]["turns"],
  cards: CurrentGameSubscription["games"][0]["cards"]
) {
  const allCompletedCardIds = turns.flatMap(turn => turn.completed_card_ids)

  const maxCount = max(values(countBy(allCompletedCardIds)))

  let completedCardIdsForRound = filter(
    groupBy(allCompletedCardIds),
    arr => arr.length === maxCount
  ).map(arr => arr[0])

  const remainingIdsForRound = difference(
    cards.map(card => card.id),
    completedCardIdsForRound
  )

  if (remainingIdsForRound.length === 0) {
    return cards
  } else {
    return filter(cards, card => remainingIdsForRound.includes(card.id))
  }
}

export function drawableCardsWithoutCompletedCardsInActiveTurn(
  cards: CurrentGameSubscription["games"][0]["cards"],
  completedCardIdsInActiveTurn: Array<number>
) {
  return reject(cards, card => completedCardIdsInActiveTurn.includes(card.id))
}
