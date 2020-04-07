import { Box, Button, Divider, Grid, Typography } from "@material-ui/core"
import Fishbowl from "components/FishbowlAnimation"
import { playerUuid } from "contexts/CurrentPlayer"
import { useBecomeHostMutation, useStartGameMutation } from "generated/graphql"
import { useTitleStyle } from "index"
import HostRedirect from "pages/Home/Host"
import Join from "pages/Home/Join"
import {
  GameRound,
  GameRoundDescription,
  GameRoundNumber
} from "pages/Play/GameRoundInstructionCard"
import * as React from "react"

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
              Fishbowl is a guessing game for any group of all ages! You'll need
              at least 4 to play, but it only gets more fun with more players.
              Hop on a video call, and play through rounds of Taboo, Charades,
              and Password.
            </Box>
          </Box>
        </Grid>
        <Grid item>
          <Box pl={1} pr={1}>
            <Typography variant="h4" className={titleClasses.title}>
              How do I play?
            </Typography>
            <Box pt={2}>
              It's easy! One person will "host" the game, and after everyone has
              joined in with a link or 4-character code, the game can start!
            </Box>
            <Box pt={2}>
              First, everyone writes down a few words or phrases on "cards" that
              will be guessed later. The group will then randomly be split into
              two teams!
            </Box>
            <Box pt={2}>
              Players from each team will alternate turns, giving clues to their
              team to guess as many cards as possible against the clock.
              There'll be 3 rounds! And cards will get recycled after each
              round.
            </Box>
            <Box pt={2} pl={2}>
              <b>
                Round {GameRoundNumber[GameRound.Taboo]}: {GameRound.Taboo}.
              </b>{" "}
              {GameRoundDescription[GameRound.Taboo]}
            </Box>
            <Box pt={2} pl={2}>
              <b>
                Round {GameRoundNumber[GameRound.Charades]}:{" "}
                {GameRound.Charades}.
              </b>{" "}
              {GameRoundDescription[GameRound.Charades]}
            </Box>
            <Box pt={2} pl={2}>
              <b>
                Round {GameRoundNumber[GameRound.Password]}:{" "}
                {GameRound.Password}.
              </b>{" "}
              {GameRoundDescription[GameRound.Password]}
            </Box>
            <Box pt={2}>
              The team that guesses the most cards across all rounds wins!
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box p={6}>
        <Divider variant="middle"></Divider>
      </Box>
    </>
  )
}

export default Home
