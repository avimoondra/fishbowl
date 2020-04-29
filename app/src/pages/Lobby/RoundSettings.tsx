import { Box, ListItem, ListItemText } from "@material-ui/core"
import RoundSettingsList from "components/RoundSettingsList"
import { CurrentGameContext } from "contexts/CurrentGame"
import { capitalize } from "lodash"
import * as React from "react"

function RoundSettings() {
  const currentGame = React.useContext(CurrentGameContext)

  return (
    <RoundSettingsList>
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
    </RoundSettingsList>
  )
}

export default RoundSettings
