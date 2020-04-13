import {
  Box,
  createStyles,
  Divider,
  Grid,
  makeStyles,
  Theme
} from "@material-ui/core"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentGameSubscription } from "generated/graphql"
import { teamScore } from "lib/score"
import { Team } from "lib/team"
import { drawableCards } from "lib/turn"
import * as React from "react"

function CardsLeftItem() {
  const currentGame = React.useContext(CurrentGameContext)
  const numCardsLeft = drawableCards(currentGame.turns, currentGame.cards)
    .length
  return (
    <Box pl={2} pr={2}>
      <Box style={{ fontSize: "24px", lineHeight: "0.9" }}>{numCardsLeft}</Box>
      <Box>cards</Box>
    </Box>
  )
}

function ScoreCardItem() {
  const currentGame = React.useContext(CurrentGameContext)

  return (
    <Box pl={2} pr={2}>
      <Box style={{ fontSize: "24px", lineHeight: "0.9" }}>
        {teamScore(Team.Red, currentGame.turns, currentGame.players)}
        {" - "}
        {teamScore(Team.Blue, currentGame.turns, currentGame.players)}
      </Box>
      <Box>score</Box>
    </Box>
  )
}

function CountdownTimerItem() {
  return (
    <Box pl={2} pr={2}>
      <Box style={{ fontSize: "24px", lineHeight: "0.9" }}>10</Box>
      <Box>seconds</Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // width: "fit-content",
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: theme.shape.borderRadius
    }
  })
)

function TurnContextPanel(props: {
  activeTurn: CurrentGameSubscription["games"][0]["turns"][0]
}) {
  const classes = useStyles()
  const currentGame = React.useContext(CurrentGameContext)
  const startingSeconds =
    props.activeTurn.seconds_per_turn_override ||
    currentGame.seconds_per_turn ||
    0

  return (
    <div>
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
          <CountdownTimerItem></CountdownTimerItem>
          {/* <CountdownTimer
          seconds={startingSeconds}
          isActive={props.activeTurn.started_at !== null}
          startDate={dateFromTimestamptzNow(props.activeTurn.started_at)}
        ></CountdownTimer> */}
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item>
          <ScoreCardItem></ScoreCardItem>
        </Grid>
      </Grid>
    </div>
  )
}

export default TurnContextPanel
