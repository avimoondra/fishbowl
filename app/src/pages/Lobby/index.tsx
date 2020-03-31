import * as React from "react"
import { Divider } from "@material-ui/core"
import { CurrentPlayerContext } from "contexts/CurrentPlayer"
import WaitingRoom from "pages/Lobby/WaitingRoom"
import {
  UsernameInput,
  LetterInput,
  SecondsPerTurnInput,
  EntriesPerPlayerInput
} from "pages/Lobby/Inputs"
import { CurrentGameContext } from "contexts/CurrentGame"

function Lobby() {
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const currentGame = React.useContext(CurrentGameContext)
  return (
    <div>
      <UsernameInput
        username={currentPlayer.username || ""}
        userId={currentPlayer.id}
      ></UsernameInput>
      <LetterInput value={currentGame.starting_letter || ""}></LetterInput>
      <SecondsPerTurnInput
        value={String(currentGame.seconds_per_turn || "")}
      ></SecondsPerTurnInput>
      <EntriesPerPlayerInput
        value={String(currentGame.num_entries_per_player || "")}
      ></EntriesPerPlayerInput>
      <Divider></Divider>
      <WaitingRoom></WaitingRoom>
    </div>
  )
}

export default Lobby
