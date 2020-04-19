import { createStyles, makeStyles, Paper, Theme } from "@material-ui/core"
import PlayerChip from "components/PlayerChip"
import { CurrentPlayerContext } from "contexts/CurrentPlayer"
import { Players, useRemovePlayerMutation } from "generated/graphql"
import * as React from "react"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    playerList: {
      minHeight: "200px",
      maxHeight: "300px",
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
    id: Players["id"]
    username?: string | null | undefined
    team?: string | null | undefined
  }>
  hostCanRemovePlayer?: boolean
}) {
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const classes = useStyles()
  const [removePlayer] = useRemovePlayerMutation()

  return (
    <Paper elevation={2} className={classes.playerList}>
      {props.players.map(player => {
        return (
          player.username && (
            <PlayerChip
              key={player.id}
              username={player.username}
              team={player.team}
              handleDelete={
                props.hostCanRemovePlayer && player.id !== currentPlayer.id
                  ? () => {
                      if (window.confirm("Are you sure?")) {
                        removePlayer({
                          variables: {
                            id: player.id
                          }
                        })
                      }
                    }
                  : undefined
              }
            ></PlayerChip>
          )
        )
      })}
    </Paper>
  )
}

export default PlayerArena
