import { Box, Button, Divider, Grid, Link, Typography } from "@material-ui/core"
import BuyMeACoffeeButton from "components/BuyMeACoffeeButton"
import PlayerChip from "components/PlayerChip"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext } from "contexts/CurrentPlayer"
import { useTitleStyle } from "index"
import { teamScore } from "lib/score"
import { Team, TeamColor } from "lib/team"
import { filter, flatMap, isEmpty, reject } from "lodash"
import * as React from "react"
import { Trans, useTranslation } from "react-i18next"
import { Redirect } from "react-router-dom"
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share"
import routes from "routes"

function EndGame() {
  const { t } = useTranslation("end")
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const titleClasses = useTitleStyle()
  const [redirectHome, setRedirectHome] = React.useState(false)

  const turnsByPlayer = new Map()
  currentGame.turns.forEach((turn) => {
    turnsByPlayer.set(
      turn.player_id,
      reject(
        (turnsByPlayer.get(turn.player_id) || []).concat([
          turn.completed_card_ids,
        ]),
        (arr) => isEmpty(arr)
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
    (player) => scoresByPlayer.get(player.id) === highScore
  )

  const redScore = teamScore(Team.Red, currentGame.turns, currentGame.players)
  const blueScore = teamScore(Team.Blue, currentGame.turns, currentGame.players)

  const tie = redScore === blueScore
  const winningTeam = redScore > blueScore ? Team.Red : Team.Blue

  const shareContent = t(
    "shareContent",
    "Just had a great time playing {{ url }} online, you should check it out!",
    { url: "fishbowl-game.com" }
  )

  return (
    <>
      {redirectHome && <Redirect to={routes.root}></Redirect>}
      <Grid container direction="column" spacing={2}>
        <Grid item style={{ textAlign: "center" }}>
          <Typography variant="h4" className={titleClasses.title}>
            {t("title", "Game Over")}
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
          <Divider variant="fullWidth"></Divider>
        </Grid>
        <Grid item>
          {tie
            ? t("result.tie", "It's a tie! Play again to break it.")
            : t("result.win", "{{ teamName }} wins! Bask in the glory.", {
                teamName: winningTeam.toLocaleUpperCase(),
              })}
        </Grid>
        {!isEmpty(highScorePlayers) && (
          <Grid item>
            {highScorePlayers.map((player) => (
              <PlayerChip
                key={player.id}
                username={player?.username || ""}
                team={player?.team}
              ></PlayerChip>
            ))}{" "}
            {t(
              "highScore",
              "put the team on their back. They got their team to guess the most number of cards ({{ highScore }}!), across all rounds.",
              { highScore }
            )}
          </Grid>
        )}
        <Grid item>
          {t("yourScore", "You scored {{ score }} across all rounds.", {
            score: scoresByPlayer.get(currentPlayer.id) || 0,
          })}
        </Grid>
        <Grid item>
          <Divider variant="fullWidth"></Divider>
        </Grid>
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Box pb={2}>
            {t(
              "thanks.share",
              "Thanks for playing -- if you had fun, share it with your friends!"
            )}
          </Box>

          <Grid container justify="center" spacing={2}>
            <Grid item>
              <TwitterShareButton
                url={"fishbowl-game.com"}
                title={shareContent}
              >
                <TwitterIcon size={50} round />
              </TwitterShareButton>
            </Grid>
            <Grid item>
              <FacebookShareButton
                url={"fishbowl-game.com"}
                title={shareContent}
              >
                <FacebookIcon size={50} round />
              </FacebookShareButton>
            </Grid>
          </Grid>
          <Trans t={t} i18nKey="thanks.support">
            <Box pb={1} pt={2}>
              Or support the project by
            </Box>
            <Box py={2}>
              <BuyMeACoffeeButton>Buying us a coffee</BuyMeACoffeeButton>
            </Box>
            <Box py={1}>
              <Link href="https://forms.gle/L9qWMsnAUghXqqxE9" target="_blank">
                sharing your feedback
              </Link>
              , and playing again soon!
            </Box>
          </Trans>
        </Grid>
        <Grid item>
          <Divider variant="fullWidth"></Divider>
        </Grid>
        <Grid item container justify="center">
          <Box py={1}>
            <Button variant="outlined" onClick={() => setRedirectHome(true)}>
              {t("playAgainButton", "Play Again")}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default EndGame
