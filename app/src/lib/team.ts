import { CurrentGameSubscription } from "generated/graphql"
import { cloneDeep, shuffle } from "lodash"

export enum Team {
  Red = "red",
  Blue = "blue"
}

export const TeamColor = {
  [Team.Red]: "#f50057",
  [Team.Blue]: "#3f51b5"
}

// [1,2,3,4,5,6].splice(0,Math.ceil(6/ 2))
// > [1, 2, 3]
// [1,2,3,4,5,6].splice(Math.ceil(6/ 2), 6)
// > [4, 5, 6]
// [1,2,3,4,5,6,7].splice(0,Math.ceil(7/ 2))
// > [1, 2, 3, 4] (first half will always be equal or 1 longer)
// [1,2,3,4,5,6,7].splice(Math.ceil(7/ 2), 7)
// > [5, 6, 7]
type Player = CurrentGameSubscription["games"][0]["players"][0]
type Players = Array<Player>
export function teamsWithSequence(players: Players) {
  const shuffledPlayers = shuffle(players)
  const halfLength = Math.ceil(shuffledPlayers.length / 2)
  const redTeam = cloneDeep(shuffledPlayers)
    .splice(0, halfLength)
    .map((player: Player, index) => {
      return { ...player, team: Team.Red, team_sequence: index }
    })
  const blueTeam = cloneDeep(shuffledPlayers)
    .splice(halfLength, shuffledPlayers.length)
    .map((player: Player, index) => {
      return { ...player, team: Team.Blue, team_sequence: index }
    })
  return redTeam.concat(blueTeam)
}
