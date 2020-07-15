import { IconButton } from "@material-ui/core"
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
    <BowlCard>
      <PlayerChip username={player?.username || ""}></PlayerChip>
      <div>{props.card.word}</div>
      <div>
        <IconButton
          onClick={() => {
            rejectCard({
              variables: {
                id: props.card.id,
              },
            })
          }}
        >
          <CancelIcon></CancelIcon>
        </IconButton>
        <IconButton
          onClick={() => {
            acceptCard({
              variables: {
                id: props.card.id,
              },
            })
          }}
        >
          <CheckCircleIcon></CheckCircleIcon>
        </IconButton>
      </div>
    </BowlCard>
  )
}

export default ScreenCard
