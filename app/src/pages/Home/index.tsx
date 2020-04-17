import { Box, Button, Divider, Grid, Link, Typography } from "@material-ui/core"
import Fishbowl from "components/FishbowlAnimation"
import { CurrentAuthContext } from "contexts/CurrentAuth"
import { clientUuid } from "contexts/CurrentPlayer"
import {
  Games,
  useBecomeHostMutation,
  useJoinGameMutation,
  useStartGameMutation
} from "generated/graphql"
import { useTitleStyle } from "index"
import HostRedirect from "pages/Home/Host"
import HowToPlay from "pages/Home/HowToPlay"
import Join from "pages/Home/Join"
import * as React from "react"

enum PlayerState {
  Joining = 1,
  Hosting,
  Choosing
}

function Home() {
  const titleClasses = useTitleStyle()
  const currentAuth = React.useContext(CurrentAuthContext)
  const [gameId, setGameId] = React.useState<Games["id"] | null>(null)
  const [playerState, setPlayerState] = React.useState<PlayerState>(
    PlayerState.Choosing
  )
  const [startGame] = useStartGameMutation()
  const [joinGame] = useJoinGameMutation()
  const [becomeHost] = useBecomeHostMutation()

  React.useEffect(() => {
    currentAuth.setJwtToken(null)
  }, [])

  return (
    <>
      <Grid container spacing={5} alignItems="center" direction="column">
        <Grid item>
          <Typography variant="h2" className={titleClasses.title}>
            Fishbowl
          </Typography>
        </Grid>
        <Grid item>
          {[PlayerState.Choosing, PlayerState.Hosting].includes(
            playerState
          ) && (
            <>
              {gameId && <HostRedirect gameId={gameId} />}
              <Button
                style={{ marginRight: "10px" }}
                variant="outlined"
                size="large"
                onClick={async () => {
                  setPlayerState(PlayerState.Hosting)
                  const { data } = await startGame()
                  const gameId = data?.insert_games_one?.id
                  if (gameId) {
                    const registration = await joinGame({
                      variables: {
                        gameId: gameId,
                        clientUuid: clientUuid()
                      }
                    })
                    if (registration.data?.joinGame) {
                      await currentAuth.setJwtToken(
                        registration.data.joinGame.jwt_token
                      )
                      await becomeHost({
                        variables: {
                          gameId: gameId,
                          playerId: registration.data.joinGame.id
                        }
                      })
                      setGameId(gameId)
                    }
                  }
                }}
                disabled={playerState === PlayerState.Hosting}
              >
                Host Game
              </Button>
              <Button
                size="large"
                variant="outlined"
                onClick={() => setPlayerState(PlayerState.Joining)}
              >
                Join Game
              </Button>
            </>
          )}
          {playerState === PlayerState.Joining && (
            <Join
              onBack={() => {
                setPlayerState(PlayerState.Choosing)
              }}
            ></Join>
          )}
        </Grid>
        <Grid item>
          <Box pt={2}>
            <Fishbowl></Fishbowl>
          </Box>
        </Grid>
        <Grid item>
          <Box pl={1} pr={1}>
            <Typography variant="h4" className={titleClasses.title}>
              What is it?
            </Typography>
            <Box pt={1}>
              Fishbowl is a virtual version of a fun (and mostly hilarious)
              guessing game, designed for any group of all ages! You'll need at
              least 4 to play, but it only gets more fun with more players. Hop
              on a video call, and play through rounds of Taboo, Charades, and
              Password.
            </Box>
          </Box>
        </Grid>
        <Grid item>
          <Box pl={1} pr={1}>
            <HowToPlay></HowToPlay>
          </Box>
        </Grid>
      </Grid>
      <Box p={4}>
        <Divider variant="middle"></Divider>
      </Box>
      <Box pb={4} pl={1} pr={1}>
        Free,{" "}
        <Link href="https://github.com/avimoondra/fishbowl" target="_blank">
          open source
        </Link>
        , and made with <span style={{ color: "red" }}>♥</span> - if you had
        fun, consider{" "}
        <Link target="_blank" href="https://www.buymeacoffee.com/fishbowlgame">
          buying me a coffee!
        </Link>
      </Box>
    </>
  )
}

export default Home
