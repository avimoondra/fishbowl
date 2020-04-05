import { TextField } from "@material-ui/core"
import BowlCard from "components/BowlCard"
import { CurrentGameContext } from "contexts/CurrentGame"
import * as React from "react"

function SubmissionCard(props: {
  onChange: (value: string) => void
  onError: (value: boolean) => void
}) {
  const currentGame = React.useContext(CurrentGameContext)
  const [word, setWord] = React.useState("")

  const hasError = (word: string) => {
    return (
      !!currentGame.starting_letter &&
      word.length > 0 &&
      word[0].toLocaleUpperCase() !==
        currentGame.starting_letter.toLocaleUpperCase()
    )
  }

  return (
    <BowlCard>
      <TextField
        size="medium"
        value={word}
        error={hasError(word)}
        helperText={
          currentGame.starting_letter &&
          hasError(word) &&
          `Must start with letter ${currentGame.starting_letter.toLocaleUpperCase()}`
        }
        onChange={({ target: { value } }) => {
          setWord(value)
          props.onChange(value)
          currentGame.starting_letter && props.onError(hasError(word))
        }}
      />
    </BowlCard>
  )
}

export default SubmissionCard
