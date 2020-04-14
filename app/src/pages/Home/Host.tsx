import { Games, useGameByIdSubscription } from "generated/graphql"
import * as React from "react"
import { generatePath, Redirect } from "react-router-dom"
import routes from "routes"

function HostRedirect(props: { gameId: Games["id"] }) {
  const { data } = useGameByIdSubscription({
    variables: {
      id: props.gameId
    }
  })
  const joinCode = data?.games_by_pk?.join_code
  if (joinCode) {
    return (
      <Redirect
        push
        to={generatePath(routes.game.lobby, {
          joinCode: joinCode
        })}
      />
    )
  } else {
    return null
  }
}

export default HostRedirect
