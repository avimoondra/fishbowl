import GameStateRedirects from "components/GameStateRedirects"
import { CurrentAuthContext } from "contexts/CurrentAuth"
import { CurrentGameContext } from "contexts/CurrentGame"
import {
  clientUuid,
  CurrentPlayerContext,
  PlayerRole
} from "contexts/CurrentPlayer"
import {
  useCurrentGameSubscription,
  useCurrentPlayerQuery
} from "generated/graphql"
import CardSubmission from "pages/CardSubmission"
import EndGame from "pages/EndGame"
import Lobby from "pages/Lobby"
import Play from "pages/Play"
import TeamAssignment from "pages/TeamAssignment"
import * as React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import routes from "routes"

function CurrentPlayerProvider(props: {
  joinCode: string
  children: React.ReactNode
}) {
  const currentAuth = React.useContext(CurrentAuthContext)
  const { data, loading } = useCurrentPlayerQuery({
    variables: {
      joinCode: props.joinCode,
      clientUuid: clientUuid()
    }
  })

  if (!loading && !data?.players[0]) {
    currentAuth.setJwtToken(null)
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
  const currentAuth = React.useContext(CurrentAuthContext)
  const { data, loading } = useCurrentGameSubscription({
    variables: {
      joinCode: props.joinCode
    }
  })

  if (!loading && !data?.games[0]) {
    currentAuth.setJwtToken(null)
    return <Redirect to={routes.root}></Redirect>
  }

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
          <Route exact path={routes.game.play} component={Play}></Route>
          <Route exact path={routes.game.ended} component={EndGame}></Route>
        </Switch>
      </CurrentGameProvider>
    </CurrentPlayerProvider>
  )
}

export default GameRoutes
