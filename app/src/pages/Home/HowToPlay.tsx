import { Box, Typography } from "@material-ui/core"
import { useTitleStyle } from "index"
import { GameRounds } from "pages/Play/GameRoundInstructionCard"
import * as React from "react"
import { useTranslation } from "react-i18next"

function HowToPlay() {
  const { t } = useTranslation(["home", "play"])
  const titleClasses = useTitleStyle()
  return (
    <>
      <Typography variant="h4" className={titleClasses.title}>
        {t("howDoIPlay.heading")}
      </Typography>
      <Box pt={2}>{t("howDoIPlay.content1")}</Box>
      <Box pt={2}>{t("howDoIPlay.content2")}</Box>
      <Box pt={2}>{t("howDoIPlay.content3")}</Box>
      {GameRounds.map((round, index) => (
        <Box key={round} pt={2} pl={2}>
          <b>
            {t("play:round.heading")}
            {` ${1 + index}: `}
            {t(`play:round.${round}.name`)}.
          </b>{" "}
          {t(`play:round.${round}.description`)}
        </Box>
      ))}
      <Box pt={2}>{t("howDoIPlay.content4")}</Box>
    </>
  )
}

export default HowToPlay
