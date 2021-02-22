import { Box, Button, Divider, Grid, Link, Typography } from "@material-ui/core"
import BuyMeACoffeeButton from "components/BuyMeACoffeeButton"
import PlayerChip from "components/PlayerChip"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext } from "contexts/CurrentPlayer"
import { useGameStatsQuery } from "generated/graphql"
import { useTitleStyle } from "index"
import { gameStats, Stats } from "lib/score"
import { Team, TeamColor } from "lib/team"
import { isEmpty } from "lodash"
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
  const { t } = useTranslation()
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const titleClasses = useTitleStyle()
  const [redirectHome, setRedirectHome] = React.useState(false)
  const { data } = useGameStatsQuery({
    fetchPolicy: "no-cache",
  })

  let stats: Stats | undefined
  if (data && data.turns) {
    stats = gameStats(data.turns, currentGame.players)
  }

  const shareContent = t(
    "end.shareContent",
    "Just had a great time playing {{ url }} online, you should check it out!",
    { url: "fishbowl-game.com" }
  )

  return (
    <>
      {redirectHome && <Redirect to={routes.root}></Redirect>}
      <Grid container direction="column" spacing={2}>
        <Grid item style={{ textAlign: "center" }}>
          <Typography variant="h4" className={titleClasses.title}>
            {t("end.title", "Game Over")}
          </Typography>
        </Grid>
        <Grid item style={{ textAlign: "center" }}>
          <Box style={{ fontSize: "24px", lineHeight: "0.9" }}>
            {stats && (
              <span style={{ color: TeamColor[Team.Red] }}>
                {stats.teamScores[Team.Red]}
              </span>
            )}
            {" - "}
            {stats && (
              <span style={{ color: TeamColor[Team.Blue] }}>
                {stats.teamScores[Team.Blue]}
              </span>
            )}
          </Box>
        </Grid>
        <Grid item>
          <Divider variant="fullWidth"></Divider>
        </Grid>
        {stats && (
          <Grid item>
            {stats.tie
              ? t("end.result.tie", "It's a tie! Play again to break it.")
              : t("end.result.win", "{{ teamName }} wins! Bask in the glory.", {
                  teamName: stats.winningTeam.toLocaleUpperCase(),
                })}
          </Grid>
        )}
        {!isEmpty(stats?.highScorePlayers) && (
          <Grid item>
            {stats?.highScorePlayers.map((player) => (
              <PlayerChip
                key={player.id}
                username={player?.username || ""}
                team={player?.team}
              ></PlayerChip>
            ))}{" "}
            {t(
              "end.highScore",
              "put the team on their back. They got their team to guess the most number of cards ({{ highScore }}!), across all rounds.",
              { highScore: stats?.highScore }
            )}
          </Grid>
        )}
        {stats && (
          <Grid item>
            {t("end.yourScore", "You scored {{ score }} across all rounds.", {
              score: stats.playerScores[currentPlayer.id] || 0,
            })}
          </Grid>
        )}
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
              "end.thanks.share",
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
          <Trans t={t} i18nKey="end.thanks.support">
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
              {t("end.playAgainButton", "Play Again")}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default EndGame
