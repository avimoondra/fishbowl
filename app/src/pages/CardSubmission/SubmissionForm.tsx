import { Button, Grid } from "@material-ui/core"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext } from "contexts/CurrentPlayer"
import { useSubmitCardsMutation } from "generated/graphql"
import { cloneDeep, filter, startCase } from "lodash"
import { Title } from "pages/CardSubmission"
import SubmissionCard from "pages/CardSubmission/SubmissionCard"
import * as React from "react"
import { Trans, useTranslation } from "react-i18next"

function SubmissionForm(props: { onSubmit: () => void }) {
  const { t } = useTranslation()
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const currentGame = React.useContext(CurrentGameContext)
  const [submitCards, { called }] = useSubmitCardsMutation()

  const numSubmitted = filter(
    currentGame.cards,
    (card) => card.player_id === currentPlayer.id
  ).length

  const numToSubmit =
    (currentGame.num_entries_per_player &&
      currentGame.num_entries_per_player - numSubmitted) ||
    0

  const [words, setWords] = React.useState<Array<string>>(
    Array.from(
      {
        length: numToSubmit,
      },
      () => ""
    )
  )

  React.useEffect(() => {
    setWords(
      Array.from(
        {
          length: numToSubmit,
        },
        () => ""
      )
    )
  }, [numToSubmit])

  const emptyWords = words.some((word) => word.length < 1)

  return (
    <>
      <Grid item>
        <Title
          text={t("cardSubmission.title", "Submit {{ count }} card", {
            count: numToSubmit,
            defaultValue_plural: "Submit {{ count }} cards",
          })}
        />
      </Grid>

      <Grid item>
        {t(
          "cardSubmission.description",
          'These cards will be put into the "fishbowl," and drawn randomly in rounds of {{ rounds }}. They can be words, familiar phrases, or inside jokes!',
          {
            rounds: currentGame.rounds
              .map((round) => startCase(round.value))
              .join(", "),
          }
        )}
      </Grid>

      {currentGame.starting_letter && (
        <Grid item>
          <Trans t={t} i18nKey="cardSubmission.descriptionLetter">
            {"They must start with the letter "}
            <b>{{ letter: currentGame.starting_letter.toLocaleUpperCase() }}</b>
            .
          </Trans>
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
                word={words[index]}
              />
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
                cards: words.map((word) => {
                  return {
                    player_id: currentPlayer.id,
                    game_id: currentGame.id,
                    word: word,
                  }
                }),
              },
            })
            props.onSubmit()
          }}
        >
          {t("cardSubmission.submitButton", "Submit")}
        </Button>
      </Grid>
    </>
  )
}

export default SubmissionForm
