import { CurrentGameSubscription, GameStatsQuery } from "generated/graphql"
import { Team } from "lib/team"
import { filter, flatten, sum } from "lodash"

export function teamScore(
  team: Team,
  turns: GameStatsQuery["turns"],
  players: CurrentGameSubscription["games"][0]["players"]
) {
  const teamPlayerIds = filter(players, (player) => player.team === team).map(
    (player) => player.id
  )
  const completedTurns = filter(turns, (turn) => !!turn.review_started_at)
  const teamTurns = filter(completedTurns, (turn) =>
    teamPlayerIds.includes(turn.player_id)
  )
  const teamScorings = flatten(teamTurns.map((turn) => turn.scorings))
  return sum(teamScorings.map((turn_scoring) => turn_scoring.score))
}

type PlayerScore = {
  [key: string]: number
}

export function gameStats(
  turns: GameStatsQuery["turns"],
  players: CurrentGameSubscription["games"][0]["players"]
) {
  const playerScores: PlayerScore = {}
  players.forEach((player) => {
    const playerScorings = flatten(
      filter(turns, (turn) => turn.player_id === player.id).map(
        (turn) => turn.scorings
      )
    )
    playerScores[player.id] = sum(
      playerScorings.map((scoring) => scoring.score)
    )
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

  const redScore = teamScore(Team.Red, turns, players)
  const blueScore = teamScore(Team.Blue, turns, players)
  const teamScores = {
    [Team.Blue]: blueScore,
    [Team.Red]: redScore,
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
