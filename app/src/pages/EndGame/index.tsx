import { Grid, Typography } from "@material-ui/core"
import PlayerChip from "components/PlayerChip"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext } from "contexts/CurrentPlayer"
import { useUpdateGameStateMutation } from "generated/graphql"
import { useTitleStyle } from "index"
import { filter, flatMap, isEmpty, reject } from "lodash"
import * as React from "react"

function EndGame() {
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const titleClasses = useTitleStyle()
  const [updateGameState] = useUpdateGameStateMutation()

  const turnsByPlayer = new Map()
  currentGame.turns.forEach((turn) => {
    turnsByPlayer.set(
      turn.player_id,
      reject(
        (turnsByPlayer.get(turn.player_id) || []).concat([
          turn.completed_card_ids,
        ]),
        (arr) => isEmpty(arr)
      )
    )
  })

  const scoresByPlayer = new Map()
  turnsByPlayer.forEach((value, key) => {
    scoresByPlayer.set(key, flatMap(value).length)
  })

  let highScore = -1
  scoresByPlayer.forEach((value, key) => {
    if (key > highScore) {
      highScore = value
    }
  })

  const highScorePlayers = filter(
    currentGame.players,
    (player) => scoresByPlayer.get(player.id) === highScore
  )

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item style={{ textAlign: "center" }}>
        <Typography variant="h4" className={titleClasses.title}>
          Game Over
        </Typography>
      </Grid>
      {!isEmpty(highScorePlayers) && (
        <Grid item>
          {highScorePlayers.map((player) => (
            <PlayerChip
              username={player?.username || ""}
              team={player?.team}
            ></PlayerChip>
          ))}
          {` got their team to guess the most number of cards (${highScore}!), across all rounds.`}
        </Grid>
      )}
      <Grid item>{`You scored ${scoresByPlayer.get(
        currentPlayer.id
      )} across all rounds.`}</Grid>
    </Grid>
  )
}

export default EndGame
