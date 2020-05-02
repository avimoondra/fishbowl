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
  GameByJoinCodeQuery,
  useCurrentGameSubscription,
  useCurrentPlayerLazyQuery,
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
  const [player, setPlayer] = React.useState<any>([])
  const [attemptedGameLoad, setAttemptedGameLoad] = React.useState(false)
  const [isLoading, setLoading] = React.useState(true)
  const [joinGame] = useJoinGameMutation()

  const [getPlayers] = useCurrentPlayerLazyQuery({
    variables: {
      joinCode: props.joinCode,
      clientUuid: clientUuid()
    },
    onCompleted: data => {
      setPlayer(data?.players[0])
      setLoading(false)
    }
  })

  // This "skip logic" is sort of hacky but handles a bug in useQuery
  // https://github.com/apollographql/react-apollo/issues/3505#issuecomment-568112061
  const [skipCallback, setSkipCallback] = React.useState(false)
  const [loadGame] = useLazyQuery(GameByJoinCodeDocument, {
    variables: { joinCode: props.joinCode?.toLocaleUpperCase() },
    onCompleted: async (data: GameByJoinCodeQuery) => {
      if (skipCallback) {
        return
      }

      if (data && data.games[0]) {
        // If we found a game from the game code, now try to join it
        const registration = await joinGame({
          variables: {
            gameId: data.games[0].id,
            clientUuid: clientUuid()
          }
        })
        if (registration.data?.joinGame) {
          await currentAuth.setJwtToken(registration.data.joinGame.jwt_token)
        }

        // If we successfully joined a game and set the JWT token, re-fetch the
        //  current player (which should now be set)
        getPlayers()
      } else {
        setLoading(false)
      }

      setSkipCallback(true)
      setAttemptedGameLoad(true)
    }
  })

  // To start, fetch the current player and the games they are a part of
  React.useEffect(() => {
    getPlayers()
  }, [])

  // If we've finished trying to load the current player, and there isn't one,
  // attempt to join a game (which will create a player) from the code in the
  // URL (if a code is present)
  React.useEffect(() => {
    if (!isLoading && !player) {
      setLoading(true)
      loadGame()
    }
  }, [isLoading, player])

  // If we're still loading, OR if we don't have a player but have not yet
  //  attempted to load a game from the URL (could happen between renders)
  if (isLoading || (!player && !attemptedGameLoad)) {
    return <div>loading</div>
  }

  if (!player) {
    return <Redirect to={routes.root}></Redirect>
  }

  return player?.game?.host?.id ? (
    <CurrentPlayerContext.Provider
      value={{
        ...player,
        role:
          player.id === player.game.host.id
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
