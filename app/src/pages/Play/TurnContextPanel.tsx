import {
  Box,
  createStyles,
  Divider,
  Grid,
  makeStyles,
  Theme,
} from "@material-ui/core"
import { CurrentGameContext } from "contexts/CurrentGame"
import { useGameStatsLazyQuery } from "generated/graphql"
import { teamScore } from "lib/score"
import { Team, TeamColor } from "lib/team"
import { drawableCards } from "lib/turn"
import { flatten } from "lodash"
import * as React from "react"
import { useTranslation } from "react-i18next"

function CardsLeftItem() {
  const { t } = useTranslation()
  const currentGame = React.useContext(CurrentGameContext)
  const numCardsLeft = drawableCards(currentGame.turns, currentGame.cards)
    .length
  return (
    <Box pl={2} pr={2}>
      <Box style={{ fontSize: "24px", lineHeight: "0.9" }}>{numCardsLeft}</Box>
      <Box>{t("play.turnContext.cards", "cards")}</Box>
    </Box>
  )
}

function ScoreCardItem() {
  const { t } = useTranslation()
  const currentGame = React.useContext(CurrentGameContext)
  const numTurns = currentGame.turns.length
  const [fetchStats, { data }] = useGameStatsLazyQuery({
    fetchPolicy: "no-cache",
  })

  React.useEffect(() => {
    fetchStats()
  }, [numTurns, fetchStats])

  return (
    <Box pl={2} pr={2}>
      <Box style={{ fontSize: "24px", lineHeight: "0.9" }}>
        {
          <span style={{ color: TeamColor[Team.Red] }}>
            {data?.turns &&
              teamScore(Team.Red, data.turns, currentGame.players)}
          </span>
        }
        {" - "}
        {
          <span style={{ color: TeamColor[Team.Blue] }}>
            {data?.turns &&
              teamScore(Team.Blue, data.turns, currentGame.players)}
          </span>
        }
      </Box>
      <Box>{t("play.turnContext.score", "score")}</Box>
    </Box>
  )
}

function CountdownTimerItem(props: { secondsLeft: number }) {
  const { t } = useTranslation()
  return (
    <Box pl={2} pr={2}>
      <Box style={{ fontSize: "24px", lineHeight: "0.9" }}>
        {props.secondsLeft}
      </Box>
      <Box>{t("play.turnContext.seconds", "seconds")}</Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: theme.shape.borderRadius,
    },
  })
)

function TurnContextPanel(props: { secondsLeft: number }) {
  const classes = useStyles()

  return (
    <Box mt={2}>
      <Grid
        container
        alignItems="center"
        direction="row"
        justify="center"
        spacing={2}
        className={classes.root}
      >
        <Grid item>
          <CardsLeftItem></CardsLeftItem>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item>
          <CountdownTimerItem
            secondsLeft={props.secondsLeft}
          ></CountdownTimerItem>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item>
          <ScoreCardItem></ScoreCardItem>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TurnContextPanel
