import { TextField } from "@material-ui/core"
import BowlCard from "components/BowlCard"
import { CurrentGameContext } from "contexts/CurrentGame"
import { lowerCase } from "lodash"
import * as React from "react"
import { useTranslation } from "react-i18next"

function SubmissionCard(props: {
  onChange: (value: string) => void
  word: string
}) {
  const { t } = useTranslation()
  const currentGame = React.useContext(CurrentGameContext)

  const hasStartingLetterError = (word: string) => {
    return (
      !!currentGame.starting_letter &&
      word.length > 0 &&
      word[0].toLocaleUpperCase() !==
        currentGame.starting_letter.toLocaleUpperCase()
    )
  }

  const hasSimilarSubmissionError = (word: string) => {
    const submittedWords = currentGame.cards.map((card) => lowerCase(card.word))
    return submittedWords.includes(lowerCase(word))
  }

  return (
    <BowlCard>
      <TextField
        size="medium"
        value={props.word}
        error={
          hasStartingLetterError(props.word) ||
          hasSimilarSubmissionError(props.word)
        }
        helperText={
          (currentGame.starting_letter &&
            hasStartingLetterError(props.word) &&
            t(
              "cardSubmission.card.helperLetter",
              `Must start with letter {{ letter }}!`,
              {
                letter: currentGame.starting_letter.toLocaleUpperCase(),
              }
            )) ||
          (hasSimilarSubmissionError(props.word) &&
            t(
              "cardSubmission.card.helperSimilar",
              "Someone made a similar submission - try a new word!"
            ))
        }
        onChange={({ target: { value } }) => {
          props.onChange(value)
        }}
      />
    </BowlCard>
  )
}

export default SubmissionCard
