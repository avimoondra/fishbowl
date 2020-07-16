import { Grid, IconButton } from "@material-ui/core"
import CancelIcon from "@material-ui/icons/Cancel"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import BowlCard from "components/BowlCard"
import PlayerChip from "components/PlayerChip"
import { CurrentGameContext } from "contexts/CurrentGame"
import {
  CurrentGameSubscription,
  useAcceptCardMutation,
  useRejectCardMutation,
} from "generated/graphql"
import * as React from "react"

function ScreenCard(props: {
  card: CurrentGameSubscription["games"][0]["cards"][0]
}) {
  const currentGame = React.useContext(CurrentGameContext)
  const [acceptCard] = useAcceptCardMutation()
  const [rejectCard] = useRejectCardMutation()

  const player = currentGame.players.find(
    (player) => player.id === props.card.player_id
  )

  return (
    <BowlCard padding={2}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <PlayerChip username={player?.username || ""} />
        </Grid>
        <Grid container item direction="column" spacing={2} alignItems="center">
          <Grid item>{props.card.word}</Grid>
          <Grid item>
            <IconButton
              color="secondary"
              onClick={() => {
                rejectCard({
                  variables: {
                    id: props.card.id,
                  },
                })
              }}
            >
              <CancelIcon />
            </IconButton>
            <IconButton
              color="primary"
              onClick={() => {
                acceptCard({
                  variables: {
                    id: props.card.id,
                  },
                })
              }}
            >
              <CheckCircleIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </BowlCard>
  )
}

export default ScreenCard
