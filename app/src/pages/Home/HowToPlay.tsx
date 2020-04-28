import { Box, Typography } from "@material-ui/core"
import { useTitleStyle } from "index"
import {
  GameRound,
  GameRoundDescription
} from "pages/Play/GameRoundInstructionCard"
import * as React from "react"

const GameRoundNumber = {
  [GameRound.Taboo]: 1,
  [GameRound.Charades]: 2,
  [GameRound.Password]: 3
}

function HowToPlay() {
  const titleClasses = useTitleStyle()
  return (
    <>
      <Typography variant="h4" className={titleClasses.title}>
        How do I play?
      </Typography>
      <Box pt={2}>
        It's easy! One person will "host" the game, and after everyone has
        joined in with a link or 4-character code, the game can start!
      </Box>
      <Box pt={2}>
        First, everyone writes down a few words or phrases on "cards" that will
        be guessed later. The group will then randomly be split into two teams!
      </Box>
      <Box pt={2}>
        Players from each team will alternate turns, giving clues to their team
        to guess as many cards as possible against the clock. There'll be 3
        rounds, and cards will get recycled after each round!
      </Box>
      <Box pt={2} pl={2}>
        <b>
          Round {GameRoundNumber[GameRound.Taboo]}: {GameRound.Taboo}.
        </b>{" "}
        {GameRoundDescription[GameRound.Taboo]}
      </Box>
      <Box pt={2} pl={2}>
        <b>
          Round {GameRoundNumber[GameRound.Charades]}: {GameRound.Charades}.
        </b>{" "}
        {GameRoundDescription[GameRound.Charades]}
      </Box>
      <Box pt={2} pl={2}>
        <b>
          Round {GameRoundNumber[GameRound.Password]}: {GameRound.Password}.
        </b>{" "}
        {GameRoundDescription[GameRound.Password]}
      </Box>
      <Box pt={2}>
        The team that guesses the most cards across all rounds wins!
      </Box>
    </>
  )
}

export default HowToPlay
