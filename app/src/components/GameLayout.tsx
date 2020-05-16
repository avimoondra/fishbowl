import { Box, Fab } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import SettingsIcon from "@material-ui/icons/Settings"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import * as React from "react"
import {
  generatePath,
  matchPath,
  useHistory,
  useLocation
} from "react-router-dom"
import routes from "routes"

function GameLayout(props: { children: React.ReactNode; joinCode: string }) {
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const location = useLocation()
  const history = useHistory()

  const inLobby = matchPath(location.pathname, {
    path: routes.game.lobby,
    exact: true
  })
  const inPending = matchPath(location.pathname, {
    path: routes.game.pending,
    exact: true
  })
  const inSettings = matchPath(location.pathname, {
    path: routes.game.settings,
    exact: true
  })

  return (
    <Box>
      <Box>{props.children}</Box>
      {!(inLobby || inPending) && currentPlayer.role === PlayerRole.Host && (
        <Box display="flex" flexDirection="row-reverse" pb={2}>
          <Fab
            color="default"
            size="small"
            onClick={() => {
              if (inSettings) {
                history.goBack()
              } else {
                history.push(
                  generatePath(routes.game.settings, {
                    joinCode: props.joinCode.toLocaleUpperCase()
                  })
                )
              }
            }}
          >
            {inSettings ? <CloseIcon /> : <SettingsIcon />}
          </Fab>
        </Box>
      )}
    </Box>
  )
}

export default GameLayout
