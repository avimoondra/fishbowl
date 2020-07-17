import { Grid, Typography } from "@material-ui/core"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext } from "contexts/CurrentPlayer"
import { useTitleStyle } from "index"
import { filter } from "lodash"
import SubmissionForm from "pages/CardSubmission/SubmissionForm"
import WaitingForSubmissions from "pages/CardSubmission/WaitingForSubmissions"
import * as React from "react"

export function Title(props: { text: string }) {
  const titleClasses = useTitleStyle()
  return (
    <Typography variant="h3" className={titleClasses.title}>
      {props.text}
    </Typography>
  )
}

enum CardSubmissionState {
  Submitting = 1,
  Waiting,
}

function CardSubmission() {
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)

  const numSubmitted = filter(
    currentGame.cards,
    (card) => card.player_id === currentPlayer.id
  ).length

  const [cardSubmissionState, setCardSubmissionState] = React.useState<
    CardSubmissionState
  >(
    numSubmitted === currentGame.num_entries_per_player
      ? CardSubmissionState.Waiting
      : CardSubmissionState.Submitting
  )

  React.useEffect(() => {
    if (
      currentGame.num_entries_per_player &&
      numSubmitted < currentGame.num_entries_per_player
    ) {
      setCardSubmissionState(CardSubmissionState.Submitting)
    }
  }, [numSubmitted])

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      {cardSubmissionState === CardSubmissionState.Submitting ? (
        <SubmissionForm
          onSubmit={() => setCardSubmissionState(CardSubmissionState.Waiting)}
        />
      ) : (
        <WaitingForSubmissions />
      )}
    </Grid>
  )
}

export default CardSubmission
