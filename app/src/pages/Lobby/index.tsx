import * as React from "react"
import { Divider } from "@material-ui/core"
import {
  useCurrentPlayerByIdQuery,
  useGameSubscription
} from "generated/graphql"
import { CurrentPlayerContext } from "contexts/CurrentPlayer"
import WaitingRoom from "pages/Lobby/WaitingRoom"
import {
  UsernameInput,
  LetterInput,
  SecondsPerTurnInput,
  EntriesPerPlayerInput
} from "pages/Lobby/Inputs"

function Lobby() {
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const { data } = useCurrentPlayerByIdQuery({
    variables: {
      id: currentPlayer.id
    }
  })
  const { data: gameData } = useGameSubscription({
    variables: {
      id: currentPlayer.gameId
    }
  })

  if (!data?.players_by_pk?.id || !gameData?.games_by_pk?.id) {
    return null
  }

  return (
    <div>
      <UsernameInput
        username={data.players_by_pk?.username || ""}
        userId={currentPlayer.id}
      ></UsernameInput>
      <LetterInput
        value={gameData.games_by_pk?.starting_letter || ""}
      ></LetterInput>
      <SecondsPerTurnInput
        value={
          (gameData?.games_by_pk?.seconds_per_turn &&
            String(gameData?.games_by_pk?.seconds_per_turn)) ||
          ""
        }
      ></SecondsPerTurnInput>
      <EntriesPerPlayerInput
        value={
          (gameData?.games_by_pk?.num_entries_per_player &&
            String(gameData?.games_by_pk?.num_entries_per_player)) ||
          ""
        }
      ></EntriesPerPlayerInput>
      <Divider></Divider>
      <WaitingRoom></WaitingRoom>
    </div>
  )
}

export default Lobby
