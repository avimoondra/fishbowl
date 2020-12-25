import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Link,
  Typography,
} from "@material-ui/core"
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline"
import Fishbowl from "components/FishbowlAnimation"
import { CurrentAuthContext } from "contexts/CurrentAuth"
import { clientUuid } from "contexts/CurrentPlayer"
import {
  Games,
  useJoinGameMutation,
  useStartGameMutation,
} from "generated/graphql"
import { useTitleStyle } from "index"
import HostRedirect from "pages/Home/Host"
import HowToPlay from "pages/Home/HowToPlay"
import Join from "pages/Home/Join"
import * as React from "react"

enum PlayerState {
  Joining = 1,
  Hosting,
  Choosing,
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
          <Card style={{ backgroundColor: "#ff9800" }}>
            <Box
              p={2}
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
              style={{ color: "white", fontWeight: 500 }}
            >
              <ErrorOutlineIcon fontSize="small"></ErrorOutlineIcon>
              <Box pl={1}>
                Unfortunately, our database is down. We are working on bringing
                it back up!
              </Box>
            </Box>
          </Card>
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
                  const { data } = await startGame({
                    context: {
                      headers: {
                        "X-Hasura-Role": "anonymous",
                      },
                    },
                  })
                  const gameId = data?.insert_games_one?.id
                  if (gameId) {
                    const registration = await joinGame({
                      variables: {
                        gameId: gameId,
                        clientUuid: clientUuid(),
                      },
                      context: {
                        headers: {
                          "X-Hasura-Role": "anonymous",
                        },
                      },
                    })
                    if (registration.data?.joinGame) {
                      await currentAuth.setJwtToken(
                        registration.data.joinGame.jwt_token
                      )
                      setGameId(gameId)
                    }
                  }
                }}
                disabled
                // disabled={playerState === PlayerState.Hosting}
              >
                Host Game
              </Button>
              <Button
                disabled
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
      <Box pb={4} pl={1} pr={1} style={{ textAlign: "center" }}>
        Free,{" "}
        <Link href="https://github.com/avimoondra/fishbowl" target="_blank">
          open source
        </Link>
        , and made with <span style={{ color: "red" }}>♥</span> - if you had
        fun, consider{" "}
        <Link target="_blank" href="https://www.buymeacoffee.com/fishbowlgame">
          buying me a coffee
        </Link>{" "}
        or{" "}
        <Link href="https://forms.gle/L9qWMsnAUghXqqxE9" target="_blank">
          sharing any feedback!
        </Link>
      </Box>
    </>
  )
}

export default Home
