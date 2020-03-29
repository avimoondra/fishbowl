import * as React from "react"
import { Typography, Button } from "@material-ui/core"
import { Serif } from "styles/font"
import Join from "pages/Home/Join"
import { userUuid } from "contexts/CurrentUser"
import { useHostGameMutation } from "generated/graphql"
import Host from "pages/Home/Host"

enum PlayerState {
  Joining = 1,
  Hosting,
  Choosing
}

function Home() {
  const [playerState, setPlayerState] = React.useState<PlayerState>(
    PlayerState.Choosing
  )
  const [hostGame, { data }] = useHostGameMutation({
    variables: {
      playerUuid: userUuid()
    }
  })
  const gameId = data?.insert_games_one?.id

  return (
    <>
      <div>
        <Typography variant="h1">
          <Serif>Fishbowl</Serif>
        </Typography>

        {[PlayerState.Choosing, PlayerState.Hosting].includes(playerState) && (
          <>
            {gameId && <Host gameId={gameId} />}
            <Button
              onClick={() => {
                setPlayerState(PlayerState.Hosting)
                hostGame()
              }}
              disabled={playerState == PlayerState.Hosting}
            >
              Host Game
            </Button>
            <Button onClick={() => setPlayerState(PlayerState.Joining)}>
              Join Game
            </Button>
          </>
        )}
        {playerState == PlayerState.Joining && <Join></Join>}
      </div>
    </>
  )
}

export default Home
