import { createStyles, makeStyles, Paper, Theme } from "@material-ui/core"
import PlayerChip from "components/PlayerChip"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext } from "contexts/CurrentPlayer"
import {
  Players,
  useRemovePlayerMutation,
  useUpdateAllPlayersMutation,
} from "generated/graphql"
import { Team, teamsWithSequenceWithUpdate } from "lib/team"
import * as React from "react"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    playerList: {
      minHeight: "200px",
      maxHeight: "300px",
      padding: "10px",
      overflow: "auto",
      "& > *": {
        margin: theme.spacing(0.5),
      },
    },
  })
)

function PlayerArena(props: {
  players: Array<{
    id: Players["id"]
    username?: string | null | undefined
    team?: string | null | undefined
  }>
  hostCanRemovePlayer?: boolean
  hostCanSwitchTeams?: boolean
}) {
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const currentGame = React.useContext(CurrentGameContext)
  const classes = useStyles()
  const [removePlayer] = useRemovePlayerMutation()
  const [updateAllPlayers] = useUpdateAllPlayersMutation()

  return (
    <Paper elevation={2} className={classes.playerList}>
      {props.players.map((player) => {
        return (
          player.username && (
            <PlayerChip
              handleSwitch={
                props.hostCanSwitchTeams
                  ? () => {
                      const updatedPlayer = currentGame.players.find(
                        (p) => p.id === player.id
                      )
                      if (updatedPlayer) {
                        updatedPlayer.team =
                          updatedPlayer?.team === Team.Red
                            ? Team.Blue
                            : Team.Red

                        const players = teamsWithSequenceWithUpdate(
                          currentGame.players,
                          updatedPlayer
                        )
                        updateAllPlayers({
                          variables: {
                            gameId: currentGame.id,
                            players: players.map(
                              ({ id, team, team_sequence }) => ({
                                id,
                                team,
                                team_sequence,
                              })
                            ),
                          },
                        })
                      }
                    }
                  : undefined
              }
              key={player.id}
              username={player.username}
              team={player.team}
              handleDelete={
                props.hostCanRemovePlayer && player.id !== currentPlayer.id
                  ? () => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this player?"
                        )
                      ) {
                        removePlayer({
                          variables: {
                            id: player.id,
                          },
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
