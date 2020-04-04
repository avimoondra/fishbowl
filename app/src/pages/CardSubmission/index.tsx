import * as React from "react"
import { useYourCardsSubscription } from "generated/graphql"
import { CurrentPlayerContext } from "contexts/CurrentPlayer"
import WaitingForSubmissions from "pages/CardSubmission/WaitingForSubmissions"
import SubmissionForm from "pages/CardSubmission/SubmissionForm"
import { CurrentGameContext } from "contexts/CurrentGame"
import { Typography, Grid } from "@material-ui/core"
import { useTitleStyle } from "index"

export function Title(props: { text: string }) {
  const titleClasses = useTitleStyle()
  return (
    <Typography variant="h3" className={titleClasses.title}>
      {props.text}
    </Typography>
  )
}

function CardSubmission() {
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const currentGame = React.useContext(CurrentGameContext)

  const { data, loading } = useYourCardsSubscription({
    variables: {
      gameId: currentGame.id,
      playerId: currentPlayer.id
    }
  })

  if (!loading && data?.cards_aggregate?.aggregate) {
    const haveWrittenCards = (data.cards_aggregate.aggregate?.count || 0) > 0
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        {haveWrittenCards ? <WaitingForSubmissions /> : <SubmissionForm />}
      </Grid>
    )
  }

  return null
}

export default CardSubmission
