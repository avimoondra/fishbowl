import { List } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import * as React from "react"

function RoundSettingsList(props: { children: React.ReactNode }) {
  return (
    <List
      style={{
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(0, 0, 0, 0.23)",
        borderRadius: 4,
        color: grey[600],
      }}
    >
      {props.children}
    </List>
  )
}

export default RoundSettingsList
