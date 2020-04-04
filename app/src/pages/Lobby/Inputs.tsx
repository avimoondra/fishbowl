import { TextField } from "@material-ui/core"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import {
  useUpdateGameSettingsMutation,
  useUpdatePlayerMutation
} from "generated/graphql"
import { debounce } from "lodash"
import * as React from "react"
export function UsernameInput(props: { userId: number; username: string }) {
  const [updatePlayer] = useUpdatePlayerMutation()
  const debouncedUpdatePlayer = React.useRef(
    debounce(
      (value: string) =>
        updatePlayer({
          variables: {
            id: props.userId,
            input: { username: value }
          }
        }),
      200
    )
  )

  return (
    <TextField
      label="Username"
      variant="outlined"
      size="medium"
      defaultValue={props.username || ""}
      onChange={({ target: { value } }) => {
        debouncedUpdatePlayer.current(value)
      }}
    />
  )
}

export function LetterInput(props: { value: string }) {
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const currentGame = React.useContext(CurrentGameContext)
  const [updateGameSettings] = useUpdateGameSettingsMutation()
  const [textFieldValue, setTextFieldValue] = React.useState("")
  const canConfigureSettings = currentPlayer.role === PlayerRole.Host

  React.useEffect(() => {
    setTextFieldValue(props.value)
  }, [props.value])

  return (
    <TextField
      label="Letter"
      variant="outlined"
      size="medium"
      defaultValue={props.value}
      value={textFieldValue}
      inputProps={{ maxLength: 1, style: { textTransform: "uppercase" } }}
      disabled={!canConfigureSettings}
      onChange={({ target: { value } }) => {
        setTextFieldValue(value)
        updateGameSettings({
          variables: {
            id: currentGame.id,
            input: { starting_letter: value }
          }
        })
      }}
    />
  )
}

export function SecondsPerTurnInput(props: { value: string }) {
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const currentGame = React.useContext(CurrentGameContext)
  const [updateGameSettings] = useUpdateGameSettingsMutation()
  const [textFieldValue, setTextFieldValue] = React.useState("")
  const canConfigureSettings = currentPlayer.role === PlayerRole.Host

  React.useEffect(() => {
    setTextFieldValue(props.value)
  }, [props.value])

  return (
    <TextField
      label="Seconds Per Turn"
      variant="outlined"
      size="medium"
      defaultValue={props.value}
      value={textFieldValue}
      inputProps={{ style: { textTransform: "uppercase" } }}
      disabled={!canConfigureSettings}
      onChange={({ target: { value } }) => {
        setTextFieldValue(value)
        updateGameSettings({
          variables: {
            id: currentGame.id,
            input: { seconds_per_turn: Number(value) }
          }
        })
      }}
    />
  )
}

export function EntriesPerPlayerInput(props: { value: string }) {
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const currentGame = React.useContext(CurrentGameContext)
  const [updateGameSettings] = useUpdateGameSettingsMutation()
  const [textFieldValue, setTextFieldValue] = React.useState("")
  const canConfigureSettings = currentPlayer.role === PlayerRole.Host

  React.useEffect(() => {
    setTextFieldValue(props.value)
  }, [props.value])

  return (
    <TextField
      label="Entries Per Player"
      variant="outlined"
      size="medium"
      defaultValue={props.value}
      value={textFieldValue}
      inputProps={{ style: { textTransform: "uppercase" } }}
      disabled={!canConfigureSettings}
      onChange={({ target: { value } }) => {
        setTextFieldValue(value)
        updateGameSettings({
          variables: {
            id: currentGame.id,
            input: { num_entries_per_player: Number(value) }
          }
        })
      }}
    />
  )
}
