import { Chip } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import LoopIcon from "@material-ui/icons/Loop"
import { Team } from "lib/team"
import * as React from "react"

interface Props {
  username?: string
  team?: string | null | undefined
  handleDelete?: () => void
  handleSwitch?: () => void
}

const PlayerChip: React.FC<Props> = (props) => {
  const username =
    props.username ?? (props.children ? String(props.children) : "")
  return (
    <Chip
      avatar={
        props.handleSwitch && (
          <LoopIcon
            style={{
              color: grey[600],
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
            onClick={props.handleSwitch}
          ></LoopIcon>
        )
      }
      key={username}
      color={
        props.team
          ? props.team === Team.Red
            ? "secondary"
            : "primary"
          : "default"
      }
      variant="outlined"
      size="small"
      label={username}
      onDelete={props.handleDelete}
    ></Chip>
  )
}

export default PlayerChip
