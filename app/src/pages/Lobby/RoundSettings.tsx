import { Box, List, ListItem, ListItemText } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import { CurrentGameContext } from "contexts/CurrentGame"
import { capitalize } from "lodash"
import * as React from "react"

function RoundSettings() {
  const currentGame = React.useContext(CurrentGameContext)

  return (
    <List
      style={{
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(0, 0, 0, 0.23)",
        borderRadius: 4,
        color: grey[500]
      }}
    >
      {currentGame.rounds.map((round, index) => {
        return (
          <ListItem>
            <ListItemText>
              <Box pl={2}>
                {index + 1}. {capitalize(round.value)}
              </Box>
            </ListItemText>
          </ListItem>
        )
      })}
    </List>
  )
}

export default RoundSettings
