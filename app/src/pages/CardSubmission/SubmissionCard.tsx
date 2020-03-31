import * as React from "react"
import { Card, TextField } from "@material-ui/core"

function SubmissionCard(props: {
  onChange: (value: string) => void
  onError: (value: boolean) => void
}) {
  const starting_letter = "A"
  const [word, setWord] = React.useState("")

  const hasError = (word: string) => {
    return (
      word.length > 0 &&
      word[0].toLocaleUpperCase() !== starting_letter.toLocaleUpperCase()
    )
  }

  return (
    <Card>
      <TextField
        value={word}
        error={hasError(word)}
        helperText={
          hasError(word) &&
          `Word must start with letter ${starting_letter.toLocaleUpperCase()}!`
        }
        variant="outlined"
        onChange={({ target: { value } }) => {
          setWord(value)
          props.onChange(value)
          props.onError(hasError(word))
        }}
      />
    </Card>
  )
}

export default SubmissionCard
