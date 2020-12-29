import { Grid, IconButton } from "@material-ui/core"
import { green } from "@material-ui/core/colors"
import CancelIcon from "@material-ui/icons/Cancel"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import BowlCard from "components/BowlCard"
import PlayerChip from "components/PlayerChip"
import { CurrentGameContext } from "contexts/CurrentGame"
import {
  CurrentGameQuery,
  useAcceptCardMutation,
  useRejectCardMutation,
} from "generated/graphql"
import * as React from "react"

function ScreenCard(props: { card: CurrentGameQuery["games"][0]["cards"][0] }) {
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
          <Grid item container justify="center" spacing={2}>
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
            </Grid>
            <Grid item>
              <IconButton
                style={{ color: green[600] }}
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
      </Grid>
    </BowlCard>
  )
}

export default ScreenCard
