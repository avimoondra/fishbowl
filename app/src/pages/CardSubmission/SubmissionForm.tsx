import { Button, Grid } from "@material-ui/core"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext } from "contexts/CurrentPlayer"
import { useSubmitCardsMutation } from "generated/graphql"
import { cloneDeep } from "lodash"
import { Title } from "pages/CardSubmission"
import SubmissionCard from "pages/CardSubmission/SubmissionCard"
import * as React from "react"

function SubmissionForm(props: { onSubmit: () => void }) {
  const DEFAULT_NUM_ENTRIES = 3
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const currentGame = React.useContext(CurrentGameContext)
  const [submitCards, { called }] = useSubmitCardsMutation()
  const [words, setWords] = React.useState<Array<string>>(
    Array.from(
      { length: currentGame.num_entries_per_player || DEFAULT_NUM_ENTRIES },
      () => ""
    )
  )

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

      {currentGame.starting_letter && (
        <Grid item>
          <>
            They must start with the letter{" "}
            <b>{currentGame.starting_letter.toLocaleUpperCase()}</b>.
          </>
        </Grid>
      )}

      <Grid item container direction="column" spacing={2} alignItems="center">
        {words.map((_, index) => {
          return (
            <Grid item key={index}>
              <SubmissionCard
                onChange={(value: string) => {
                  const newWords = cloneDeep(words)
                  newWords[index] = value
                  setWords(newWords)
                }}
              ></SubmissionCard>
            </Grid>
          )
        })}
      </Grid>

      <Grid item>
        <Button
          variant="contained"
          color="primary"
          size="large"
          disabled={called || emptyWords}
          onClick={async () => {
            await submitCards({
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
            props.onSubmit()
          }}
        >
          Submit
        </Button>
      </Grid>
    </>
  )
}

export default SubmissionForm
