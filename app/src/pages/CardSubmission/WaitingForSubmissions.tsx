import * as React from "react"
import { Button } from "@material-ui/core"
import { useSubmittedCardsSubscription } from "generated/graphql"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"

function WaitingForSubmissions() {
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const num_entries_per_player = 5
  const num_players = 7

  const { data } = useSubmittedCardsSubscription({
    variables: {
      gameId: currentPlayer.gameId
    }
  })

  const total = num_entries_per_player * num_players
  const submittedSoFar = data?.cards_aggregate.aggregate?.count
  const allPlayersSubmitted = (submittedSoFar || 0) === total

  return (
    <>
      {allPlayersSubmitted ? (
        <div>
          All players submitted, waiting on the host ot start the game!
          {currentPlayer.role === PlayerRole.Host ? (
            <Button
              onClick={() => {
                // advance game state
              }}
            >
              Assign Teams
            </Button>
          ) : null}
        </div>
      ) : (
        <div>
          <div>Waiting for other players</div>
          <div>
            {submittedSoFar}/{total}
          </div>
        </div>
      )}
    </>
  )
}

export default WaitingForSubmissions
