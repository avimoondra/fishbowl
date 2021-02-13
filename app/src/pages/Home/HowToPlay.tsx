import { Box, Typography } from "@material-ui/core"
import { useTitleStyle } from "index"
import {
  GameRoundDescription,
  GameRounds,
} from "pages/Play/GameRoundInstructionCard"
import * as React from "react"
import { useTranslation } from "react-i18next"

function HowToPlay() {
  const { t } = useTranslation(["home", "play"])
  const titleClasses = useTitleStyle()
  return (
    <>
      <Typography variant="h4" className={titleClasses.title}>
        {t("howDoIPlay.heading", "How do I play?")}
      </Typography>
      <Box pt={2}>
        {t(
          "howDoIPlay.content1",
          'It\'s easy! One person will "host" the game, and after everyone has joined in with a link or 4-character code, the game can start!'
        )}
      </Box>
      <Box pt={2}>
        {t(
          "howDoIPlay.content2",
          'First, everyone writes down a few words or phrases on "cards" that will be guessed later. The group will then randomly be split into two teams!'
        )}
      </Box>
      <Box pt={2}>
        {t(
          "howDoIPlay.content3",
          "Players from each team will alternate turns, giving clues to their team to guess as many cards as possible against the clock. There'll be 3 rounds, and cards will get recycled after each round!"
        )}
      </Box>
      {GameRounds.map((round, index) => {
        const roundKey = round.toLowerCase()

        return (
          <Box key={roundKey} pt={2} pl={2}>
            <b>
              {t("play:round.heading", "Round {{ number }}: {{ name }}", {
                number: 1 + index,
                name: t(`play:round.${roundKey}.name`, round),
              })}
              .
            </b>{" "}
            {t(
              `play:round.${roundKey}.description`,
              GameRoundDescription[round]
            )}
          </Box>
        )
      })}
      <Box pt={2}>
        {t(
          "howDoIPlay.content4",
          "The team that guesses the most cards across all rounds wins!"
        )}
      </Box>
    </>
  )
}

export default HowToPlay
