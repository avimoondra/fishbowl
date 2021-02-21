import { Grid, Typography } from "@material-ui/core"
import Fishbowl from "components/Fishbowl"
import PlayerChip from "components/PlayerChip"
import ScreenCard from "components/ScreenCard"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import { filter, reject } from "lodash"
import { Title } from "pages/CardSubmission"
import AssignTeamsButton from "pages/CardSubmission/AssignTeamsButton"
import * as React from "react"
import { useTranslation } from "react-i18next"

enum WaitingForSubmissionsState {
  Waiting,
  SubmittedAssign,
  SubmittedWait,
}

function WaitingForSubmissions() {
  const { t } = useTranslation()
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)

  const numEntriesPerPlayer = currentGame.num_entries_per_player
  const numPlayers = currentGame.players.length

  if (!numEntriesPerPlayer || !numPlayers) {
    return null
  }

  const total = numEntriesPerPlayer * numPlayers
  const submittedOrAcceptedSoFar = currentGame.cards.length

  const waitingForPlayers = reject(currentGame.players, (player) => {
    return (
      filter(currentGame.cards, (card) => card.player_id === player.id)
        .length === numEntriesPerPlayer
    )
  })

  if (!submittedOrAcceptedSoFar) {
    return null
  }

  let state: WaitingForSubmissionsState

  if (total === 0 || submittedOrAcceptedSoFar !== total) {
    state = WaitingForSubmissionsState.Waiting
  } else if (PlayerRole.Host === currentPlayer.role) {
    state = WaitingForSubmissionsState.SubmittedAssign
  } else {
    state = WaitingForSubmissionsState.SubmittedWait
  }

  const unscreenedCards =
    PlayerRole.Host === currentPlayer.role && currentGame.screen_cards
      ? currentGame.cards.filter(
          (card) =>
            card.is_allowed === null && card.player_id !== currentPlayer.id
        )
      : []

  return (
    <>
      <Grid item>
        <Title text={t("cardSubmission.waiting.title", "Well done!")} />
      </Grid>

      {
        {
          [WaitingForSubmissionsState.Waiting]: (
            <>
              <Grid item container justify="center">
                {t(
                  "cardSubmission.waiting.description",
                  "Just waiting for everyone else..."
                )}
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
                  {t(
                    "cardSubmission.waiting.progress",
                    "{{ progress }} cards so far",
                    {
                      progress: `${submittedOrAcceptedSoFar}/${total}`,
                    }
                  )}
                </Typography>
              </Grid>
            </>
          ),
          [WaitingForSubmissionsState.SubmittedAssign]: (
            <Grid item>
              {t(
                "cardSubmission.waiting.submitted.host",
                "All players submitted! As the host, you can now assign teams."
              )}
            </Grid>
          ),
          [WaitingForSubmissionsState.SubmittedWait]: (
            <Grid item>
              {t(
                "cardSubmission.waiting.submitted.player",
                "All players submitted {{ cardCount }} cards in total. Now we are waiting on the host to start the game!",
                { cardCount: submittedOrAcceptedSoFar }
              )}
            </Grid>
          ),
        }[state]
      }

      {PlayerRole.Host === currentPlayer.role && currentGame.screen_cards && (
        <Grid item container direction="column" spacing={2} alignItems="center">
          {unscreenedCards.map((card, index) => (
            <Grid item key={index}>
              <ScreenCard card={card} />
            </Grid>
          ))}
        </Grid>
      )}

      {WaitingForSubmissionsState.SubmittedAssign === state ? (
        <div style={{ marginTop: 30 }}>
          <AssignTeamsButton />
        </div>
      ) : !unscreenedCards.length ? (
        <div style={{ marginTop: 50 }}>
          <Fishbowl />
        </div>
      ) : null}
    </>
  )
}

export default WaitingForSubmissions
