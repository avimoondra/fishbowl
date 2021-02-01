import { CurrentGameSubscription, GameStatsQuery } from "generated/graphql"
import { Team } from "lib/team"
import { filter, sum } from "lodash"

export function teamScore(
  team: Team,
  turn_scorings: GameStatsQuery["turn_scorings"],
  players: CurrentGameSubscription["games"][0]["players"]
) {
  const teamPlayerIds = filter(players, (player) => player.team === team).map(
    (player) => player.id
  )
  const teamTurnScorings = filter(turn_scorings, (turn_scoring) =>
    teamPlayerIds.includes(turn_scoring.turn.player_id)
  )

  return sum(teamTurnScorings.map(turn_scoring => turn_scoring.score))
}

type PlayerScore = {
  [key: string]: number
}

export function gameStats(
  turn_scorings: GameStatsQuery["turn_scorings"],
  players: CurrentGameSubscription["games"][0]["players"]
) {
  const playerScores: PlayerScore = {}
  players.forEach(player => {
    const playerTurnScorings = filter(turn_scorings, turn_scoring => turn_scoring.turn.player_id === player.id)
    playerScores[player.id] = sum(playerTurnScorings.map(turnScoring => turnScoring.score))
  })

  let highScore = -1
  for (const [, playerScore] of Object.entries(playerScores)) {
    if (playerScore > highScore) {
      highScore = playerScore
    }
  }
  
  const highScorePlayers = filter(
    players,
    (player) => playerScores[player.id] === highScore
  )

  const redScore = teamScore(Team.Red, turn_scorings, players) 
  const blueScore = teamScore(Team.Blue, turn_scorings, players)
  const teamScores = {
    [Team.Blue]: blueScore,
    [Team.Red]: redScore
  }
  const tie = redScore === blueScore
  const winningTeam = redScore > blueScore ? Team.Red : Team.Blue

  return {
    playerScores,
    highScore,
    highScorePlayers,
    teamScores,
    winningTeam,
    tie,
  }
}