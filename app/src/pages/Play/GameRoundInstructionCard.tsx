import { Box, Button, Paper, styled, Typography } from "@material-ui/core"
import { useTitleStyle } from "index"
import * as React from "react"
import { useTranslation } from "react-i18next"

export enum GameRound {
  Taboo = "Taboo",
  Charades = "Charades",
  Password = "Password",
}

export const GameRounds = [
  GameRound.Taboo,
  GameRound.Charades,
  GameRound.Password,
]

export const GameRoundDescription: Record<GameRound, string> = {
  [GameRound.Taboo]:
    "Use words to describe the word or phrase on the card, without any acting or gestures. You cannot use any part of the word or phrase!",
  [GameRound.Charades]:
    "Without words or sounds, act and use gestures to communicate the word or phrase on the card.",
  [GameRound.Password]:
    "You can say exactly one word to describe the word or phrase on the card, no more! You'll rely on your team's memory and association.",
}

function GameRoundInstructionCard(props: {
  round: GameRound | string
  roundNumber: number
  onDismiss: () => void
}) {
  const { t } = useTranslation()
  const titleClasses = useTitleStyle()
  let description = GameRoundDescription[props.round as GameRound]

  if (description) {
    description = t(
      `howToPlay.round.${props.round.toLowerCase()}.description`,
      description
    )
  } else {
    description = t(
      "howToPlay.round.customDescription",
      "Your host will give you the rules for this one!"
    )
  }

  return (
    <StyledPaper elevation={2}>
      <Box p={1}>
        <Typography className={titleClasses.title} variant="h5">
          {t("howToPlay.round.heading", "Round {{ number }}: {{ name }}", {
            number: props.roundNumber,
            name: props.round,
          })}
        </Typography>
      </Box>
      <Box p={1}>{description}</Box>
      <Box p={1} display="flex" flexDirection="row-reverse">
        <Button
          color="primary"
          size="small"
          onClick={() => {
            props.onDismiss()
          }}
        >
          {t("dismiss", "Dismiss")}
        </Button>
      </Box>
    </StyledPaper>
  )
}

const StyledPaper = styled(Paper)({
  minWidth: 280,
})

export default GameRoundInstructionCard
