import { CurrentGameSubscription } from "generated/graphql"
import { sortBy, lastIndexOf, last, difference, filter } from "lodash"

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
  cards: CurrentGameSubscription["games"][0]["cards"],
  completedCardIdsInActiveTurn: Array<number>
) {
  const cardsSortedById = sortBy(cards, ["id"])
  const completedCardIds = turns.flatMap(turn => turn.completed_card_ids)
  const index = lastIndexOf(completedCardIds, last(cardsSortedById)?.id)
  const remainingIds = difference(
    cards.map(card => card.id),
    completedCardIds.splice(index + 1)
  )
  return filter(
    cards,
    card =>
      remainingIds.includes(card.id) &&
      !completedCardIdsInActiveTurn.includes(card.id)
  )
}
