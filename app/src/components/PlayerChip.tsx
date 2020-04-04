import { Chip } from "@material-ui/core"
import { Team } from "pages/TeamAssignment/team"
import * as React from "react"

function PlayerChip(props: {
  username: string
  team?: string | null | undefined
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
      label={props.username}
    ></Chip>
  )
}

export default PlayerChip
