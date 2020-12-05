import { CurrentGameQuery } from "generated/graphql"
import { cloneDeep, filter, find, remove, shuffle } from "lodash"

export enum Team {
  Red = "red",
  Blue = "blue",
}

export const TeamColor = {
  [Team.Red]: "#f50057",
  [Team.Blue]: "#3f51b5",
}

function addTeamAndSequence(players: Players, team: Team) {
  return players.map((player: Player, index) => {
    return { ...player, team: team, team_sequence: index }
  })
}

// [1,2,3,4,5,6].splice(0,Math.ceil(6/ 2))
// > [1, 2, 3]
// [1,2,3,4,5,6].splice(Math.ceil(6/ 2), 6)
// > [4, 5, 6]
// [1,2,3,4,5,6,7].splice(0,Math.ceil(7/ 2))
// > [1, 2, 3, 4] (first half will always be equal or 1 longer)
// [1,2,3,4,5,6,7].splice(Math.ceil(7/ 2), 7)
// > [5, 6, 7]
type Player = CurrentGameQuery["games"][0]["players"][0]
type Players = Array<Player>
export function teamsWithSequence(players: Players) {
  const shuffledPlayers = shuffle(players)
  const halfLength = Math.ceil(shuffledPlayers.length / 2)
  const redTeam = addTeamAndSequence(
    cloneDeep(shuffledPlayers).splice(0, halfLength),
    Team.Red
  )
  const blueTeam = addTeamAndSequence(
    cloneDeep(shuffledPlayers).splice(halfLength, shuffledPlayers.length),
    Team.Blue
  )
  return redTeam.concat(blueTeam)
}

export function teamsWithSequenceWithUpdate(
  players: Players,
  updatedPlayer: Player
) {
  remove(players, (player) => player.id === updatedPlayer.id)
  players.push(updatedPlayer)
  const redTeam = addTeamAndSequence(
    filter(players, (player) => player.team === Team.Red),
    Team.Red
  )
  const blueTeam = addTeamAndSequence(
    filter(players, (player) => player.team === Team.Blue),
    Team.Blue
  )
  return redTeam.concat(blueTeam)
}

export function currentPlayerTeam(
  currentPlayerId: Player["id"],
  players: Players
): Team {
  return find(players, (player) => player.id === currentPlayerId)?.team as Team
}
