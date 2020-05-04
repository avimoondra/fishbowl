import { Box, Button, Grid, Link, Typography } from "@material-ui/core"
import BuyMeACoffeeButton from "components/BuyMeACoffeeButton"
import PlayerChip from "components/PlayerChip"
import { CurrentAuthContext } from "contexts/CurrentAuth"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext } from "contexts/CurrentPlayer"
import { useTitleStyle } from "index"
import { teamScore } from "lib/score"
import { Team, TeamColor } from "lib/team"
import { filter, flatMap, isEmpty, reject } from "lodash"
import * as React from "react"
import { Redirect } from "react-router-dom"
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton
} from "react-share"
import routes from "routes"

function EndGame() {
  const currentAuth = React.useContext(CurrentAuthContext)
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const titleClasses = useTitleStyle()
  const [redirectHome, setRedirectHome] = React.useState(false)

  const turnsByPlayer = new Map()
  currentGame.turns.forEach(turn => {
    turnsByPlayer.set(
      turn.player_id,
      reject(
        (turnsByPlayer.get(turn.player_id) || []).concat([
          turn.completed_card_ids
        ]),
        arr => isEmpty(arr)
      )
    )
  })

  const scoresByPlayer = new Map()
  turnsByPlayer.forEach((value, key) => {
    scoresByPlayer.set(key, flatMap(value).length)
  })

  let highScore = -1
  scoresByPlayer.forEach((value, key) => {
    if (value > highScore) {
      highScore = value
    }
  })

  const highScorePlayers = filter(
    currentGame.players,
    player => scoresByPlayer.get(player.id) === highScore
  )

  const redScore = teamScore(Team.Red, currentGame.turns, currentGame.players)
  const blueScore = teamScore(Team.Blue, currentGame.turns, currentGame.players)

  const tie = redScore === blueScore
  const winningTeam = redScore > blueScore ? Team.Red : Team.Blue

  return (
    <>
      {redirectHome && <Redirect to={routes.root}></Redirect>}
      <Grid container direction="column" spacing={2}>
        <Grid item style={{ textAlign: "center" }}>
          <Typography variant="h4" className={titleClasses.title}>
            Game Over
          </Typography>
        </Grid>
        <Grid item style={{ textAlign: "center" }}>
          <Box style={{ fontSize: "24px", lineHeight: "0.9" }}>
            {<span style={{ color: TeamColor[Team.Red] }}>{redScore}</span>}
            {" - "}
            {<span style={{ color: TeamColor[Team.Blue] }}>{blueScore}</span>}
          </Box>
        </Grid>
        <Grid item>
          {tie
            ? "It's a tie! Play again to break it."
            : `${winningTeam.toLocaleUpperCase()} wins! Bask in the glory.`}
        </Grid>
        {!isEmpty(highScorePlayers) && (
          <Grid item>
            {highScorePlayers.map(player => (
              <PlayerChip
                key={player.id}
                username={player?.username || ""}
                team={player?.team}
              ></PlayerChip>
            ))}
            {` put the team on their back. They got their team to guess the most number of cards (${highScore}!), across all rounds.`}
          </Grid>
        )}
        <Grid item>{`You scored ${scoresByPlayer.get(currentPlayer.id) ||
          0} across all rounds.`}</Grid>
        <Grid item> Thanks for playing! </Grid>
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Box pt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                currentAuth.setJwtToken(null)
                setRedirectHome(true)
              }}
            >
              Play Again
            </Button>
          </Box>
          <Box py={3}>or, if you had fun, share with your friends!</Box>

          <Grid container justify="center" spacing={2}>
            <Grid item>
              <TwitterShareButton
                url={"fishbowl-game.com"}
                title={"Fishbowl Game"}
                className="twitter"
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </Grid>
            <Grid item>
              <FacebookShareButton
                url={"fishbowl-game.com"}
                title={"Fishbowl Game"}
                className="twitter"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </Grid>
          </Grid>

          <Box pt={3}>
            <BuyMeACoffeeButton></BuyMeACoffeeButton>
          </Box>
          <Box pt={3}>
            or, just{" "}
            <Link href="https://forms.gle/L9qWMsnAUghXqqxE9" target="_blank">
              share any feedback!
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default EndGame
