import { Grid, Typography } from "@material-ui/core"
import Fishbowl from "components/FishbowlAnimation"
import PlayerChip from "components/PlayerChip"
import ScreenCard from "components/ReviewCard"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import { reject, some } from "lodash"
import { Title } from "pages/CardSubmission"
import AssignTeamsButton from "pages/CardSubmission/AssignTeamsButton"
import * as React from "react"

enum WaitingForSubmissionsState {
  Waiting,
  SubmittedAssign,
  SubmittedWait,
}

function WaitingForSubmissions() {
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)

  const numEntriesPerPlayer = currentGame.num_entries_per_player
  const numPlayers = currentGame.players.length

  if (!numEntriesPerPlayer || !numPlayers) {
    return null
  }

  const total = numEntriesPerPlayer * numPlayers
  const submittedSoFar = currentGame.cards.length

  const waitingForPlayers = reject(currentGame.players, (player) => {
    return some(currentGame.cards, (card) => card.player_id === player.id)
  })

  if (!submittedSoFar) {
    return null
  }

  let state: WaitingForSubmissionsState

  if (total === 0 || submittedSoFar !== total) {
    state = WaitingForSubmissionsState.Waiting
  } else if (PlayerRole.Host === currentPlayer.role) {
    state = WaitingForSubmissionsState.SubmittedAssign
  } else {
    state = WaitingForSubmissionsState.SubmittedWait
  }

  const unscreenedCards = currentGame.cards.filter(function (card) {
    return (
      PlayerRole.Host === currentPlayer.role &&
      currentGame.screen_cards &&
      null === card.is_allowed
    )
  })

  return (
    <>
      <Grid item>
        <Title text="Well done!" />
      </Grid>
      {
        {
          [WaitingForSubmissionsState.Waiting]: (
            <>
              <Grid item container justify="center">
                Just waiting for everyone else...
                <div style={{ width: 4 }} />
                {waitingForPlayers.map((player) => (
                  <>
                    <PlayerChip username={player.username || ""} />
                    <div style={{ width: 4 }} />
                  </>
                ))}
              </Grid>
              <Grid item>
                <Typography variant="h5">
                  {submittedSoFar}/{`${total} cards so far`}
                </Typography>
              </Grid>
            </>
          ),
          [WaitingForSubmissionsState.SubmittedAssign]: (
            <Grid item>
              All players submitted! As the host, you can now assign teams.
            </Grid>
          ),
          [WaitingForSubmissionsState.SubmittedWait]: (
            <Grid item>
              {`All players submitted, ${submittedSoFar} cards in total. Now we
              are waiting on the host to start the game!`}
            </Grid>
          ),
        }[state]
      }
      <Grid item container direction="column" spacing={2} alignItems="center">
        {unscreenedCards.map((card, index) => (
          <Grid item key={index}>
            <ScreenCard card={card}></ScreenCard>
          </Grid>
        ))}
      </Grid>
      {WaitingForSubmissionsState.SubmittedAssign === state ? (
        <AssignTeamsButton />
      ) : WaitingForSubmissionsState.Waiting === state &&
        !unscreenedCards.length ? (
        <div style={{ marginTop: 50 }}>
          <Fishbowl />
        </div>
      ) : null}
    </>
  )
}

export default WaitingForSubmissions
