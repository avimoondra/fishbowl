import { Link, TextField } from "@material-ui/core"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import { useUpdateGameSettingsMutation } from "generated/graphql"
import { debounce, sample } from "lodash"
import * as React from "react"

const DEBOUNCE_SECONDS = 2000

function HelperText(props: { children: React.ReactNode }) {
  return (
    <span style={{ width: 220, display: "inline-block" }}>
      {props.children}
    </span>
  )
}

export function LetterInput(props: { value: string }) {
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
      label="Letter"
      variant="outlined"
      size="medium"
      helperText={
        <HelperText>
          {currentPlayer.role === PlayerRole.Host ? (
            <>
              <span>
                One style of play is that all words or phrases must start with
                the same letter - Ask your group!
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
                Generate random letter
              </Link>
            </>
          ) : (
            <span>
              One style of play is that all words or phrases must start with the
              same letter. If none is chosen, any word or phrase is fair game!
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
      label="Seconds Per Turn"
      variant="outlined"
      size="medium"
      required
      helperText={<HelperText>Usually between 30 or 60</HelperText>}
      value={textFieldValue}
      inputProps={{ style: { textTransform: "uppercase" } }}
      disabled={!canConfigureSettings || props.disabled}
      onChange={({ target: { value } }) => {
        setTextFieldValue(value)
        debouncedUpdateGameSettings(value)
      }}
    />
  )
}

export function SubmissionsPerPlayerInput(props: { value: string }) {
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
      label="Submissions Per Player"
      variant="outlined"
      size="medium"
      required
      helperText={<HelperText>Usually 4-6 depending on group size</HelperText>}
      value={textFieldValue}
      inputProps={{ style: { textTransform: "uppercase" } }}
      disabled={!canConfigureSettings}
      onChange={({ target: { value } }) => {
        setTextFieldValue(value)
        debouncedUpdateGameSettings(value)
      }}
    />
  )
}
