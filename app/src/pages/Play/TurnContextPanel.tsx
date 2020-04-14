import {
  Box,
  createStyles,
  Divider,
  Grid,
  makeStyles,
  Theme
} from "@material-ui/core"
import { CurrentGameContext } from "contexts/CurrentGame"
import { teamScore } from "lib/score"
import { Team, TeamColor } from "lib/team"
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
        {
          <span style={{ color: TeamColor[Team.Red] }}>
            {teamScore(Team.Red, currentGame.turns, currentGame.players)}
          </span>
        }
        {" - "}
        {
          <span style={{ color: TeamColor[Team.Blue] }}>
            {teamScore(Team.Blue, currentGame.turns, currentGame.players)}
          </span>
        }
      </Box>
      <Box>score</Box>
    </Box>
  )
}

function CountdownTimerItem(props: { secondsLeft: number }) {
  return (
    <Box pl={2} pr={2}>
      <Box style={{ fontSize: "24px", lineHeight: "0.9" }}>
        {props.secondsLeft}
      </Box>
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

function TurnContextPanel(props: { secondsLeft: number }) {
  const classes = useStyles()

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
          <CountdownTimerItem
            secondsLeft={props.secondsLeft}
          ></CountdownTimerItem>
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
