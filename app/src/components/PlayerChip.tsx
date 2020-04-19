import { Chip } from "@material-ui/core"
import { Team } from "lib/team"
import * as React from "react"

function PlayerChip(props: {
  username: string
  team?: string | null | undefined
  handleDelete?: () => void
}) {
  return (
    <Chip
      key={props.username}
      color={
        props.team
          ? props.team === Team.Red
            ? "secondary"
            : "primary"
          : "default"
      }
      variant="outlined"
      size="small"
      label={props.username}
      onDelete={props.handleDelete}
    ></Chip>
  )
}

export default PlayerChip
