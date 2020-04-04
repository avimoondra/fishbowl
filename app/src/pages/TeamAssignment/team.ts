import { shuffle, compact, cloneDeep } from "lodash"
import { CurrentGameSubscription } from "generated/graphql"

export enum Team {
  Red = "red",
  Blue = "blue"
}

export const TeamColor = {
  [Team.Red]: "#f50057",
  [Team.Blue]: "#3f51b5"
}

// only if arr1 is longer than arr2.
function interleave(arr1: Array<any>, arr2: Array<any>) {
  let newArr = []
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i], arr2[i])
  }
  return compact(newArr)
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
    .map((player: Player) => {
      return { ...player, team: Team.Red }
    })
  const blueTeam = cloneDeep(shuffledPlayers)
    .splice(halfLength, shuffledPlayers.length)
    .map((player: Player) => {
      return { ...player, team: Team.Blue }
    })
  const orderedPlayers = interleave(redTeam, blueTeam)
  const orderedPlayersWithSequence = orderedPlayers.map(
    (player: Player, index) => {
      return { ...player, team_sequence: index + 1 }
    }
  )
  return orderedPlayersWithSequence
}
