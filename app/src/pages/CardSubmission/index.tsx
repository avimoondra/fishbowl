import * as React from "react"
import { useYourCardsSubscription } from "generated/graphql"
import { CurrentPlayerContext } from "contexts/CurrentPlayer"
import WaitingForSubmissions from "pages/CardSubmission/WaitingForSubmissions"
import SubmissionForm from "pages/CardSubmission/SubmissionForm"

function CardSubmission() {
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const { data, loading } = useYourCardsSubscription({
    variables: {
      gameId: currentPlayer.gameId,
      playerId: currentPlayer.id
    }
  })

  if (!loading && data?.cards_aggregate?.aggregate) {
    const haveWrittenCards = (data.cards_aggregate.aggregate?.count || 0) > 0
    return haveWrittenCards ? <WaitingForSubmissions /> : <SubmissionForm />
  }

  return null
}

export default CardSubmission
