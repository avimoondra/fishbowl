import { useLazyQuery } from "@apollo/react-hooks"
import * as Sentry from "@sentry/browser"
import GameStateRedirects from "components/GameStateRedirects"
import { CurrentAuthContext } from "contexts/CurrentAuth"
import { CurrentGameContext } from "contexts/CurrentGame"
import {
  clientUuid,
  CurrentPlayerContext,
  PlayerRole
} from "contexts/CurrentPlayer"
import {
  CurrentPlayerDocument,
  CurrentPlayerQuery,
  GameByJoinCodeDocument,
  useCurrentGameSubscription,
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

  const [currentPlayer, setCurrentPlayer] = React.useState<
    CurrentPlayerQuery["players"][0] | null
  >(null)
  const [redirectRoute, setRedirectRoute] = React.useState("")

  // https://github.com/apollographql/react-apollo/issues/3505#issuecomment-568112061
  const [skipCallback, setSkipCallback] = React.useState(false)

  const [joinGame] = useJoinGameMutation()
  const [signUp] = useLazyQuery(GameByJoinCodeDocument, {
    variables: { joinCode: props.joinCode.toLocaleUpperCase() },
    onCompleted: async data => {
      if (skipCallback) {
        return
      }

      if (data?.games[0]) {
        try {
          const registration = await joinGame({
            variables: {
              gameId: data.games[0].id,
              clientUuid: clientUuid()
            },
            context: {
              headers: {
                "X-Hasura-Role": "anonymous"
              }
            }
          })
          if (registration.data?.joinGame) {
            await currentAuth.setJwtToken(registration.data.joinGame.jwt_token)
            setSkipCallback(true)
          }
        } catch (err) {
          // cannot join game
          Sentry.captureException(
            new Error(
              `(url) Cannot join game, ${props.joinCode.toLocaleUpperCase()}. Client uuid: ${clientUuid()}`
            )
          )
          setRedirectRoute(routes.root)
        }
      } else {
        // cannot find game
        Sentry.captureException(
          new Error(
            `(url) Cannot find game, ${props.joinCode.toLocaleUpperCase()}`
          )
        )
        setRedirectRoute(routes.root)
      }
    },
    onError: _ => {
      setRedirectRoute(routes.root)
    }
  })

  const [
    signIn,
    { loading: loadingSignIn, called: calledSignIn }
  ] = useLazyQuery(CurrentPlayerDocument, {
    variables: {
      joinCode: props.joinCode.toLocaleUpperCase(),
      clientUuid: clientUuid()
    },
    onCompleted: async data => {
      if (data?.players[0]) {
        setCurrentPlayer(data?.players[0])
      } else {
        await currentAuth.setJwtToken(null)
      }
    },
    onError: _ => {
      currentAuth.setJwtToken(null)
    }
  })

  // sign in
  React.useEffect(() => {
    if (currentAuth.jwtToken) {
      signIn()
    }
  }, [currentAuth.jwtToken])

  // sign up
  React.useEffect(() => {
    if (!loadingSignIn && !currentPlayer) {
      signUp({
        context: {
          headers: {
            "X-Hasura-Role": "anonymous"
          }
        }
      })
    }
  }, [loadingSignIn, currentPlayer])

  if (redirectRoute) {
    return <Redirect to={routes.root}></Redirect>
  }

  return currentPlayer?.game?.host?.id ? (
    <CurrentPlayerContext.Provider
      value={{
        ...currentPlayer,
        role:
          currentPlayer.id === currentPlayer.game.host.id
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
