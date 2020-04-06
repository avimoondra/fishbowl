import { Box, Button, Paper, styled, Typography } from "@material-ui/core"
import { useTitleStyle } from "index"
import * as React from "react"

export enum GameRound {
  Taboo = "Taboo",
  Charades = "Charades",
  Password = "Password",
}

export const GameRoundNumber = {
  [GameRound.Taboo]: 1,
  [GameRound.Charades]: 2,
  [GameRound.Password]: 3,
}

export const GameRoundDescription = {
  [GameRound.Taboo]: (
    <>
      Use words to describe the word or phrase on the card, without any acting
      or gestures. You cannot use any part of the word or phrase!
    </>
  ),
  [GameRound.Charades]: (
    <>
      Without words or sounds, act and use gestures to communicate the word or
      phrase on the card.
    </>
  ),
  [GameRound.Password]: (
    <>
      You can say exactly one word to describe the word or phrase on the card,
      no more! You'll rely on your team's memory and association.
    </>
  ),
}

function GameRoundInstructionCard(props: { round: GameRound }) {
  const [
    hasDismissedInstructionCard,
    setHasDismissedInstructionCard,
  ] = React.useState(false)
  const titleClasses = useTitleStyle()

  return !hasDismissedInstructionCard ? (
    <StyledPaper elevation={2}>
      <Box p={1}>
        <Typography className={titleClasses.title} variant="h5">
          {`Round ${GameRoundNumber[props.round]}: `}
          {props.round}
        </Typography>
      </Box>
      <Box p={1}>{GameRoundDescription[props.round]}</Box>
      <Box p={1} display="flex" flexDirection="row-reverse">
        <Button
          color="primary"
          size="small"
          onClick={() => {
            setHasDismissedInstructionCard(true)
          }}
        >
          Dismiss
        </Button>
      </Box>
    </StyledPaper>
  ) : null
}

const StyledPaper = styled(Paper)({
  minWidth: 280,
})

export default GameRoundInstructionCard
