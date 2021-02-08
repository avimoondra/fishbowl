import { CurrentGameContext } from "contexts/CurrentGame"
import { GameCardPlayStyleEnum } from "generated/graphql"
import { startCase } from "lodash"
import * as React from "react"
import { useTranslation } from "react-i18next"

function SettingsSummary() {
  const { t } = useTranslation("lobby")
  const currentGame = React.useContext(CurrentGameContext)
  let cardPlayStyle = ""
  switch (currentGame.card_play_style) {
    case GameCardPlayStyleEnum.PlayersSubmitWords:
      const count = Number(currentGame.num_entries_per_player)
      const startingLetter = currentGame.starting_letter
      const submitWord = "Players will submit {{ count }} word"
      const startingWith = 'starting with the letter "{{ startingLetter }}"'

      if (startingLetter) {
        cardPlayStyle = t(
          "settings.summary.cardStyle.playersSubmitLetter",
          `${submitWord}, ${startingWith}.`,
          {
            count,
            startingLetter,
            defaultValue_plural: `${submitWord}s, all ${startingWith}.`,
          }
        )
      } else {
        cardPlayStyle = t(
          "settings.summary.cardStyle.playersSubmit",
          `${submitWord}.`,
          {
            count,
            defaultValue_plural: `${submitWord}s.`,
          }
        )
      }

      if (currentGame.screen_cards) {
        cardPlayStyle += ` ${t(
          "settings.summary.cardStyle.hostScreens",
          "The host will be able to screen words."
        )}`
      }
      break
    case GameCardPlayStyleEnum.HostProvidesWords:
      cardPlayStyle = t(
        "settings.summary.cardStyle.hostProvides",
        "The host will provide the words."
      )
      break
  }

  return (
    <>
      {cardPlayStyle}
      <br />
      <br />
      {t(
        "settings.summary.turnSeconds",
        "Turns will last {{ seconds }} seconds across rounds of {{ rounds }}.",
        {
          seconds: currentGame.seconds_per_turn,
          rounds: currentGame.rounds
            .map((round) => startCase(round.value))
            .join(", "),
        }
      )}{" "}
      {currentGame.allow_card_skips
        ? t(
            "settings.summary.cardSkips",
            "Players can skip cards during their turn."
          )
        : t(
            "settings.summary.noCardSkips",
            "Players cannot skip cards during their turn."
          )}
    </>
  )
}

export default SettingsSummary
