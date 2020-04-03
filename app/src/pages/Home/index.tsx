import * as React from "react"
import {
  Typography,
  Button,
  Container,
  Grid,
  makeStyles
} from "@material-ui/core"
import Join from "pages/Home/Join"
import { playerUuid } from "contexts/CurrentPlayer"
import { useStartGameMutation, useBecomeHostMutation } from "generated/graphql"
import HostRedirect from "pages/Home/Host"
import Fishbowl from "components/FishbowlAnimation"
import { useTitleStyle } from "index"

enum PlayerState {
  Joining = 1,
  Hosting,
  Choosing
}

function Home() {
  const titleClasses = useTitleStyle()
  const [gameId, setGameId] = React.useState<number | null>(null)
  const [playerState, setPlayerState] = React.useState<PlayerState>(
    PlayerState.Choosing
  )
  const [startGame] = useStartGameMutation()
  const [becomeHost] = useBecomeHostMutation()

  return (
    <>
      <Grid container spacing={3} alignItems="center" direction="column">
        <Grid item xs={12}>
          <Typography variant="h2" className={titleClasses.title}>
            Fishbowl
          </Typography>
        </Grid>
        <Grid item xs={12} direction="row">
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
                    variables: {
                      playerUuid: playerUuid()
                    }
                  })
                  const gameId = data?.insert_games_one?.id
                  const playerId = data?.insert_games_one?.players[0].id
                  if (gameId && playerId) {
                    await becomeHost({
                      variables: {
                        gameId,
                        playerId
                      }
                    })
                    setGameId(gameId)
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
      </Grid>
      <Fishbowl></Fishbowl>
    </>
  )
}

export default Home
