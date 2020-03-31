import * as React from "react"
import { useYourCardsSubscription } from "generated/graphql"
import { CurrentPlayerContext } from "contexts/CurrentPlayer"
import WaitingForSubmissions from "pages/CardSubmission/WaitingForSubmissions"
import SubmissionForm from "pages/CardSubmission/SubmissionForm"
import { CurrentGameContext } from "contexts/CurrentGame"

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
    return haveWrittenCards ? <WaitingForSubmissions /> : <SubmissionForm />
  }

  return null
}

export default CardSubmission
