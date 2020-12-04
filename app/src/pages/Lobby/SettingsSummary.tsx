import { CurrentGameContext } from "contexts/CurrentGame"
import { GameCardPlayStyleEnum } from "generated/graphql"
import { startCase } from "lodash"
import * as React from "react"

function SettingsSummary() {
  const currentGame = React.useContext(CurrentGameContext)
  let cardPlayStyle = ""
  if (
    currentGame.card_play_style === GameCardPlayStyleEnum.PlayersSubmitWords
  ) {
    cardPlayStyle = `Players will submit ${
      currentGame.num_entries_per_player
    } words${
      currentGame.starting_letter
        ? `, all starting with the letter "${currentGame.starting_letter}."`
        : "."
    } ${
      currentGame.screen_cards ? "The host will be able to screen words." : ""
    }`
  } else if (
    currentGame.card_play_style === GameCardPlayStyleEnum.HostProvidesWords
  ) {
    cardPlayStyle = `The host will provide the words.`
  }

  return (
    <>
      {cardPlayStyle}
      <br />
      <br />
      {`Turns will last ${
        currentGame.seconds_per_turn
      } seconds across rounds of ${currentGame.rounds
        .map((round) => startCase(round.value))
        .join(", ")}. ${
        currentGame.allow_card_skips
          ? "Skipping cards is allowed"
          : "Skipping cards is not allowed."
      }`}
    </>
  )
}

export default SettingsSummary
