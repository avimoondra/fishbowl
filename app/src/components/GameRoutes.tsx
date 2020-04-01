import * as React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import routes from "routes"
import Lobby from "pages/Lobby"

import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import {
  useCurrentPlayerQuery,
  useCurrentGameSubscription
} from "generated/graphql"
import TeamAssignment from "pages/TeamAssignment"
import { playerUuid } from "contexts/CurrentPlayer"
import GameStateRedirects from "components/GameStateRedirects"
import CardSubmission from "pages/CardSubmission"
import { CurrentGameContext } from "contexts/CurrentGame"

function CurrentPlayerProvider(props: {
  joinCode: string
  children: React.ReactNode
}) {
  const { data, loading } = useCurrentPlayerQuery({
    variables: {
      joinCode: props.joinCode,
      playerUuid: playerUuid()
    }
  })

  if (!loading && !data?.players[0]) {
    return <Redirect to={routes.root}></Redirect>
  }

  return data?.players[0]?.game?.host?.id ? (
    <CurrentPlayerContext.Provider
      value={{
        ...data.players[0],
        role:
          data.players[0].id === data.players[0].game.host.id
            ? PlayerRole.Host
            : PlayerRole.Participant
      }}
    >
      {props.children}
    </CurrentPlayerContext.Provider>
  ) : null
}

function CurrentGameProvider(props: {
  joinCode: string
  children: React.ReactNode
}) {
  const { data } = useCurrentGameSubscription({
    variables: {
      joinCode: props.joinCode
    }
  })

  return data?.games[0] ? (
    <CurrentGameContext.Provider value={data.games[0]}>
      {props.children}
    </CurrentGameContext.Provider>
  ) : null
}

function GameRoutes(props: { joinCode: string }) {
  return (
    <CurrentPlayerProvider joinCode={props.joinCode}>
      <CurrentGameProvider joinCode={props.joinCode}>
        <GameStateRedirects joinCode={props.joinCode}></GameStateRedirects>
        <Switch>
          <Route exact path={routes.game.lobby} component={Lobby} />
          <Route
            exact
            path={routes.game.cardSubmission}
            component={CardSubmission}
          ></Route>
          <Route
            exact
            path={routes.game.teamAssignment}
            component={TeamAssignment}
          ></Route>
        </Switch>
      </CurrentGameProvider>
    </CurrentPlayerProvider>
  )
}

export default GameRoutes
