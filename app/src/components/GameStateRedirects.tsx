import { CurrentGameContext } from "contexts/CurrentGame"
import { GameStateEnum } from "generated/graphql"
import * as React from "react"
import {
  generatePath,
  matchPath,
  Redirect,
  useLocation
} from "react-router-dom"
import { some } from "lodash"
import routes from "routes"

const stateRoutePairs = [
  {
    state: GameStateEnum.Lobby,
    route: routes.game.lobby
  },
  {
    state: GameStateEnum.CardSubmission,
    route: routes.game.cardSubmission
  },
  {
    state: GameStateEnum.TeamAssignment,
    route: routes.game.teamAssignment
  },
  {
    state: GameStateEnum.ActivePlay,
    route: routes.game.play
  },
  {
    state: GameStateEnum.Ended,
    route: routes.game.ended
  }
]

function GameStateRedirects(props: { joinCode: string }) {
  const location = useLocation()
  const currentGame = React.useContext(CurrentGameContext)

  // switch to opposite.
  // some(stateRoutePairs.map(pair => pair.route), route => matchPath(location.pathname, {
  //   path: route,
  //   exact: true
  // })
  if (
    matchPath(location.pathname, { path: routes.game.pending, exact: true }) ||
    matchPath(location.pathname, { path: routes.game.settings, exact: true })
  ) {
    return null
  }

  const pair = stateRoutePairs.find(pair => pair.state === currentGame.state)
  if (
    pair?.state &&
    !matchPath(location.pathname, {
      path: pair.route,
      exact: true
    })
  ) {
    return (
      <Redirect
        to={generatePath(pair.route, {
          joinCode: props.joinCode
        })}
      ></Redirect>
    )
  } else {
    return null
  }
}

export default GameStateRedirects
