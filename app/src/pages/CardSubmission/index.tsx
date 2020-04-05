import { Grid, Typography } from "@material-ui/core"
import { useTitleStyle } from "index"
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
  const [cardSubmissionState, setCardSubmissionState] = React.useState<
    CardSubmissionState
  >(CardSubmissionState.Submitting)

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
