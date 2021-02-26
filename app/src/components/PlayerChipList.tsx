import { makeStyles } from "@material-ui/core/styles"
import { Players } from "generated/graphql"
import * as React from "react"
import PlayerChip from "./PlayerChip"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
    listStyleType: "none",
    margin: 0,
    padding: 0,
    "& > li + li": {
      marginLeft: theme.spacing(0.5),
    },
  },
}))

interface Props {
  players: Array<Pick<Players, "id" | "team" | "username">>
}

export const PlayerChipList: React.FC<Props> = (props: Props) => {
  const classes = useStyles()

  return (
    <ul className={classes.root}>
      {props.players.map((player) => (
        <li key={player.id}>
          <PlayerChip team={player?.team}>{player?.username}</PlayerChip>
        </li>
      ))}
    </ul>
  )
}
