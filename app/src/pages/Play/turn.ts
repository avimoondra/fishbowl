import { CurrentGameSubscription } from "generated/graphql"
import {
  countBy,
  difference,
  filter,
  findLast,
  groupBy,
  max,
  reject,
  sortBy,
  values
} from "lodash"
import { Team } from "pages/TeamAssignment/team"

export function nextPlayerForSameTeam(
  activePlayer: CurrentGameSubscription["games"][0]["players"][0],
  players: CurrentGameSubscription["games"][0]["players"]
) {
  const sameTeamPlayers = filter(
    players,
    player => activePlayer.team === player.team
  )
  const sameTeamPlayersSortedBySequence = sortBy(sameTeamPlayers, [
    "team_sequence"
  ])
  const nextPositionInSequence =
    ((activePlayer.team_sequence || 0) + 1) %
    sameTeamPlayersSortedBySequence.length
  return sameTeamPlayersSortedBySequence[nextPositionInSequence]
}

export function nextPlayer(
  activePlayer: CurrentGameSubscription["games"][0]["players"][0] | null,
  turns: CurrentGameSubscription["games"][0]["turns"],
  players: CurrentGameSubscription["games"][0]["players"]
) {
  if (!activePlayer) {
    return sortBy(players, ["team_sequence"])[0]
  }
  const lastTeamToPlay = activePlayer.team
  const nextTeamToPlay = lastTeamToPlay === Team.Blue ? Team.Red : Team.Blue
  const nextTeamToPlayPlayers = filter(
    players,
    player => player.team === nextTeamToPlay
  )
  const lastTurnFromNextTeamToPlay = findLast(sortBy(turns, ["id"]), turn =>
    nextTeamToPlayPlayers.map(player => player.id).includes(turn.player_id)
  )
  const lastPlayerFromNextTeamToPlay = lastTurnFromNextTeamToPlay
    ? players.find(player => player.id === lastTurnFromNextTeamToPlay.player_id)
    : null

  const nextTeamPlayersSortedBySequence = sortBy(nextTeamToPlayPlayers, [
    "team_sequence"
  ])
  const nextPlayerFromNextTeamToPlay = lastPlayerFromNextTeamToPlay
    ? nextTeamPlayersSortedBySequence[
        ((lastPlayerFromNextTeamToPlay.team_sequence || 0) + 1) %
          nextTeamToPlayPlayers.length
      ]
    : nextTeamPlayersSortedBySequence[0]

  return nextPlayerFromNextTeamToPlay
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
