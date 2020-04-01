import * as React from "react"
import { Button } from "@material-ui/core"
import { useSubmitCardsMutation } from "generated/graphql"
import { CurrentPlayerContext } from "contexts/CurrentPlayer"
import { cloneDeep } from "lodash"
import SubmissionCard from "pages/CardSubmission/SubmissionCard"
import { CurrentGameContext } from "contexts/CurrentGame"

function SubmissionForm() {
  const DEFAULT_NUM_ENTRIES = 3
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const currentGame = React.useContext(CurrentGameContext)

  const [errors, setErrors] = React.useState<Array<boolean>>(
    Array.from(
      { length: currentGame.num_entries_per_player || DEFAULT_NUM_ENTRIES },
      () => false
    )
  )
  const [submitCards, { called }] = useSubmitCardsMutation()
  const [words, setWords] = React.useState<Array<string>>(
    Array.from(
      { length: currentGame.num_entries_per_player || DEFAULT_NUM_ENTRIES },
      () => ""
    )
  )
  const hasErrors = errors.some(hasError => hasError)
  const emptyWords = words.some(word => word.length < 1)

  return (
    <>
      {words.map((_, index) => {
        return (
          <SubmissionCard
            onChange={(value: string) => {
              const newWords = cloneDeep(words)
              newWords[index] = value
              setWords(newWords)
            }}
            onError={(hasError: boolean) => {
              const newErrors = cloneDeep(errors)
              newErrors[index] = hasError
              setErrors(newErrors)
            }}
          ></SubmissionCard>
        )
      })}
      <Button
        disabled={called || hasErrors || emptyWords}
        onClick={() => {
          submitCards({
            variables: {
              cards: words.map(word => {
                return {
                  player_id: currentPlayer.id,
                  game_id: currentGame.id,
                  word: word
                }
              })
            }
          })
        }}
      >
        Submit
      </Button>
    </>
  )
}

export default SubmissionForm
