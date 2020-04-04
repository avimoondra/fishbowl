import * as React from "react"
import {
  makeStyles,
  createStyles,
  Theme,
  Paper,
  styled
} from "@material-ui/core"
import PlayerChip from "components/PlayerChip"
import { Team } from "pages/TeamAssignment/team"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    playerList: {
      minHeight: "120px",
      maxHeight: "180px",
      padding: "10px",
      overflow: "auto",
      "& > *": {
        margin: theme.spacing(0.5)
      }
    }
  })
)

function PlayerArena(props: {
  players: Array<{
    id: number
    username?: string | null | undefined
    team?: string | null | undefined
  }>
}) {
  const classes = useStyles()
  return (
    <Paper elevation={2} className={classes.playerList}>
      {props.players.map(player => {
        return (
          player.username && (
            <PlayerChip
              key={player.id}
              username={player.username}
              team={player.team}
            ></PlayerChip>
          )
        )
      })}
    </Paper>
  )
}

export default PlayerArena
