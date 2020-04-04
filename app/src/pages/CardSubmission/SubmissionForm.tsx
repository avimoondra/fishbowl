import { Button, Grid } from "@material-ui/core"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext } from "contexts/CurrentPlayer"
import { useSubmitCardsMutation } from "generated/graphql"
import { cloneDeep } from "lodash"
import { Title } from "pages/CardSubmission"
import SubmissionCard from "pages/CardSubmission/SubmissionCard"
import * as React from "react"

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
      <Grid item>
        <Title
          text={`Submit ${currentGame.num_entries_per_player ||
            DEFAULT_NUM_ENTRIES}
          cards`}
        ></Title>
      </Grid>

      <Grid item>
        These cards will be put into the "fishbowl," and drawn randomly in
        rounds of Taboo, Charades, and Password. They can be words, familiar
        phrases, or inside jokes!
      </Grid>

      {words.map((_, index) => {
        return (
          <Grid item style={{ width: "100%" }}>
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
          </Grid>
        )
      })}
      <Grid item>
        <Button
          variant="outlined"
          size="large"
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
      </Grid>
    </>
  )
}

export default SubmissionForm
