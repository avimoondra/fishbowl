import { Box, Button, Paper, styled, Typography } from "@material-ui/core"
import { useTitleStyle } from "index"
import * as React from "react"

export enum GameRound {
  Taboo = "Taboo",
  Charades = "Charades",
  Password = "Password"
}

export const GameRounds = [
  GameRound.Taboo,
  GameRound.Charades,
  GameRound.Password
]

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
  )
}

function GameRoundInstructionCard(props: {
  round: GameRound | string
  roundNumber: number
  onDismiss: () => void
}) {
  const titleClasses = useTitleStyle()
  return (
    <StyledPaper elevation={2}>
      <Box p={1}>
        <Typography className={titleClasses.title} variant="h5">
          {`Round ${props.roundNumber}: `}
          {props.round}
        </Typography>
      </Box>
      <Box p={1}>
        {GameRoundDescription[props.round as GameRound] ||
          "Your host will give you the rules for this one!"}
      </Box>
      <Box p={1} display="flex" flexDirection="row-reverse">
        <Button
          color="primary"
          size="small"
          onClick={() => {
            props.onDismiss()
          }}
        >
          Dismiss
        </Button>
      </Box>
    </StyledPaper>
  )
}

const StyledPaper = styled(Paper)({
  minWidth: 280
})

export default GameRoundInstructionCard
