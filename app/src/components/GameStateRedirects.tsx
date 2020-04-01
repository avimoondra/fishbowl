import * as React from "react"
import { CurrentGameContext } from "contexts/CurrentGame"
import { GameStateEnum } from "generated/graphql"
import {
  useLocation,
  matchPath,
  Redirect,
  generatePath
} from "react-router-dom"
import routes from "routes"

function GameStateRedirects(props: { joinCode: string }) {
  const location = useLocation()
  const currentGame = React.useContext(CurrentGameContext)

  // TODO consolidate this code
  if (
    currentGame.state === GameStateEnum.Lobby &&
    !matchPath(location.pathname, {
      path: routes.game.lobby,
      exact: true
    })
  ) {
    return (
      <Redirect
        to={generatePath(routes.game.lobby, {
          joinCode: props.joinCode
        })}
      ></Redirect>
    )
  }

  if (
    currentGame.state === GameStateEnum.CardSubmission &&
    !matchPath(location.pathname, {
      path: routes.game.cardSubmission,
      exact: true
    })
  ) {
    return (
      <Redirect
        to={generatePath(routes.game.cardSubmission, {
          joinCode: props.joinCode
        })}
      ></Redirect>
    )
  }

  if (
    currentGame.state === GameStateEnum.TeamAssignment &&
    !matchPath(location.pathname, {
      path: routes.game.teamAssignment,
      exact: true
    })
  ) {
    return (
      <Redirect
        to={generatePath(routes.game.teamAssignment, {
          joinCode: props.joinCode
        })}
      ></Redirect>
    )
  }

  return <></>
}

export default GameStateRedirects
