import { CurrentGameQuery } from "generated/graphql"
import { Team } from "lib/team"
import { filter, flatMap } from "lodash"

export function teamScore(
  team: Team,
  turns: CurrentGameQuery["games"][0]["turns"],
  players: CurrentGameQuery["games"][0]["players"]
) {
  const teamPlayerIds = filter(players, (player) => player.team === team).map(
    (player) => player.id
  )
  const teamTurns = filter(turns, (turn) =>
    teamPlayerIds.includes(turn.player_id)
  )
  return flatMap(teamTurns, (turn) => turn.completed_card_ids).length
}
