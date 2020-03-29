import * as React from "react"
import { Switch, Route } from "react-router-dom"
import routes from "routes"
import Lobby from "pages/Lobby"

import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import { useCurrentPlayerQuery } from "generated/graphql"
import TeamAssignment from "pages/TeamAssignment"
import { playerUuid } from "contexts/CurrentPlayer"

function Game(props: { joinCode: string }) {
  const { data } = useCurrentPlayerQuery({
    variables: {
      joinCode: props.joinCode,
      playerUuid: playerUuid()
    }
  })
  return data?.players[0]?.game?.host?.id ? (
    <CurrentPlayerContext.Provider
      value={{
        id: data.players[0].id,
        uuid: data.players[0].uuid,
        role:
          data.players[0].id === data.players[0].game.host.id
            ? PlayerRole.Host
            : PlayerRole.Participant,
        gameId: data.players[0].game.id,
        hostId: data.players[0].game.host.id
      }}
    >
      <Switch>
        <Route exact path={routes.game.lobby} component={Lobby} />
        <Route
          exact
          path={routes.game.teamAssignment}
          component={TeamAssignment}
        ></Route>
      </Switch>
    </CurrentPlayerContext.Provider>
  ) : null
}

export default Game
