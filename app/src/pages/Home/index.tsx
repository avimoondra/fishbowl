import * as React from "react"
import { Typography, Button } from "@material-ui/core"
import { Serif } from "styles/font"
import Join from "pages/Home/Join"
import { playerUuid } from "contexts/CurrentPlayer"
import { useStartGameMutation, useBecomeHostMutation } from "generated/graphql"
import Host from "pages/Home/Host"
import Fishbowl from "components/FishbowlAnimation"

enum PlayerState {
  Joining = 1,
  Hosting,
  Choosing
}

function Home() {
  const [gameId, setGameId] = React.useState<number | null>(null)
  const [playerState, setPlayerState] = React.useState<PlayerState>(
    PlayerState.Choosing
  )
  const [startGame] = useStartGameMutation()
  const [becomeHost] = useBecomeHostMutation()

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
            <Button onClick={() => setPlayerState(PlayerState.Joining)}>
              Join Game
            </Button>
          </>
        )}
        {playerState === PlayerState.Joining && <Join></Join>}
      </div>
      <Fishbowl></Fishbowl>
    </>
  )
}

export default Home
