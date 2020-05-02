import { useLazyQuery } from "@apollo/react-hooks"
import GameStateRedirects from "components/GameStateRedirects"
import { CurrentAuthContext } from "contexts/CurrentAuth"
import { CurrentGameContext } from "contexts/CurrentGame"
import {
  clientUuid,
  CurrentPlayerContext,
  PlayerRole
} from "contexts/CurrentPlayer"
import {
  GameByJoinCodeDocument,
  useCurrentGameSubscription,
  useCurrentPlayerQuery,
  useJoinGameMutation
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
  const [redirectRoute, setRedirectRoute] = React.useState("")
  const [, updateState] = React.useState()
  const forceUpdate = React.useCallback(() => updateState({}), [])

  // https://github.com/apollographql/react-apollo/issues/3505#issuecomment-568112061
  const [skipCallback, setSkipCallback] = React.useState(false)

  const [joinGame] = useJoinGameMutation()
  const [loadGame] = useLazyQuery(GameByJoinCodeDocument, {
    variables: { joinCode: props.joinCode.toLocaleUpperCase() },
    onCompleted: async data => {
      if (skipCallback) {
        return
      }
      if (data && data.games[0]) {
        const registration = await joinGame({
          variables: {
            gameId: data.games[0].id,
            clientUuid: clientUuid()
          }
        })
        if (registration.data?.joinGame) {
          await currentAuth.setJwtToken(registration.data.joinGame.jwt_token)
        }
        setSkipCallback(true)
        forceUpdate()
      } else {
        setRedirectRoute(routes.game.root)
      }
    },
    onError: _ => {
      setRedirectRoute(routes.game.root)
    }
  })

  // sign in
  const { data, loading } = useCurrentPlayerQuery({
    variables: {
      joinCode: props.joinCode,
      clientUuid: clientUuid()
    }
  })

  // sign up
  React.useEffect(() => {
    if (!loading && !data?.players[0]) {
      loadGame()
    }
  }, [loading, data?.players[0]])

  if (redirectRoute) {
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
  const { data, loading } = useCurrentGameSubscription({
    variables: {
      joinCode: props.joinCode
    }
  })

  if (!loading && !data?.games[0]) {
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
