import { Link, TextField } from "@material-ui/core"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import { useUpdateGameSettingsMutation } from "generated/graphql"
import { debounce, sample } from "lodash"
import * as React from "react"
import { useTranslation } from "react-i18next"

const DEBOUNCE_SECONDS = 2000

function HelperText(props: { children: React.ReactNode }) {
  return (
    <span style={{ width: 220, display: "inline-block" }}>
      {props.children}
    </span>
  )
}

export function LetterInput(props: { value: string }) {
  const { t } = useTranslation()
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const currentGame = React.useContext(CurrentGameContext)
  const [updateGameSettings] = useUpdateGameSettingsMutation()
  const [textFieldValue, setTextFieldValue] = React.useState(props.value)
  const canConfigureSettings = currentPlayer.role === PlayerRole.Host

  React.useEffect(() => {
    setTextFieldValue(props.value)
  }, [props.value])

  const debouncedUpdateGameSettings = React.useRef(
    debounce((value: string) => {
      updateGameSettings({
        variables: {
          id: currentGame.id,
          input: { starting_letter: value },
        },
      })
    }, DEBOUNCE_SECONDS)
  ).current

  return (
    <TextField
      label={t("settings.cards.letter.label", "Letter")}
      variant="outlined"
      size="medium"
      helperText={
        <HelperText>
          {currentPlayer.role === PlayerRole.Host ? (
            <>
              <span>
                {t(
                  "settings.cards.letter.helper",
                  "One style of play is that all words or phrases must start with the same letter."
                )}{" "}
                {t("settings.cards.letter.helperHost", "Ask your group!")}
              </span>
              <br />
              <Link
                href=""
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  e.preventDefault()
                  const randomLetter =
                    sample(Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ")) || "A"
                  setTextFieldValue(randomLetter)
                  debouncedUpdateGameSettings(randomLetter)
                }}
              >
                {t(
                  "settings.cards.letter.generateRandom",
                  "Generate random letter"
                )}
              </Link>
            </>
          ) : (
            <span>
              {t(
                "settings.cards.letter.helper",
                "One style of play is that all words or phrases must start with the same letter."
              )}{" "}
              {t(
                "settings.cards.letter.helperPlayers",
                "If none is chosen, any word or phrase is fair game!"
              )}
            </span>
          )}
        </HelperText>
      }
      value={textFieldValue}
      inputProps={{ maxLength: 1, style: { textTransform: "uppercase" } }}
      disabled={!canConfigureSettings}
      onChange={({ target: { value } }) => {
        setTextFieldValue(value)
        debouncedUpdateGameSettings(value)
      }}
    />
  )
}

export function SecondsPerTurnInput(props: {
  value: string
  disabled?: boolean
}) {
  const { t } = useTranslation()
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const currentGame = React.useContext(CurrentGameContext)
  const [updateGameSettings] = useUpdateGameSettingsMutation()
  const [textFieldValue, setTextFieldValue] = React.useState(props.value)
  const canConfigureSettings = currentPlayer.role === PlayerRole.Host

  const debouncedUpdateGameSettings = React.useRef(
    debounce((value: string) => {
      updateGameSettings({
        variables: {
          id: currentGame.id,
          input: { seconds_per_turn: Number(value) },
        },
      })
    }, DEBOUNCE_SECONDS)
  ).current

  React.useEffect(() => {
    setTextFieldValue(props.value)
  }, [props.value])

  return (
    <TextField
      type="number"
      label={t("settings.turns.secondsPerTurn.label", "Seconds Per Turn")}
      variant="outlined"
      size="medium"
      required
      helperText={
        <HelperText>
          {t(
            "settings.turns.secondsPerTurn.helper",
            "Usually between 30 or 60"
          )}
        </HelperText>
      }
      value={textFieldValue}
      disabled={!canConfigureSettings || props.disabled}
      onChange={({ target: { value } }) => {
        setTextFieldValue(value)
        debouncedUpdateGameSettings(value)
      }}
    />
  )
}

export function SubmissionsPerPlayerInput(props: { value: string }) {
  const { t } = useTranslation()
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const currentGame = React.useContext(CurrentGameContext)
  const [updateGameSettings] = useUpdateGameSettingsMutation()
  const [textFieldValue, setTextFieldValue] = React.useState(props.value)
  const canConfigureSettings = currentPlayer.role === PlayerRole.Host

  React.useEffect(() => {
    setTextFieldValue(props.value)
  }, [props.value])

  const debouncedUpdateGameSettings = React.useRef(
    debounce((value: string) => {
      updateGameSettings({
        variables: {
          id: currentGame.id,
          input: { num_entries_per_player: Number(value) },
        },
      })
    }, DEBOUNCE_SECONDS)
  ).current

  return (
    <TextField
      type="number"
      label={t(
        "settings.cards.submissionsPerPlayer.label",
        "Submissions Per Player"
      )}
      variant="outlined"
      size="medium"
      required
      helperText={
        <HelperText>
          {t(
            "settings.cards.submissionsPerPlayer.helper",
            "Usually 4-6 depending on group size"
          )}
        </HelperText>
      }
      value={textFieldValue}
      disabled={!canConfigureSettings}
      onChange={({ target: { value } }) => {
        setTextFieldValue(value)
        debouncedUpdateGameSettings(value)
      }}
    />
  )
}
