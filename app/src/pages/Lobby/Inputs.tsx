import { Box, Button, Link, TextField } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import {
  Players,
  useUpdateGameSettingsMutation,
  useUpdatePlayerMutation
} from "generated/graphql"
import { sample } from "lodash"
import * as React from "react"

function HelperText(props: { children: React.ReactNode }) {
  return <div style={{ width: 220 }}>{props.children}</div>
}

export function UsernameInput(props: {
  playerId: Players["id"]
  username: string
}) {
  const [updatePlayer] = useUpdatePlayerMutation()
  const [value, setValue] = React.useState(props.username || "")
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="flex-start">
        <Box>
          <TextField
            label="Username"
            variant="outlined"
            size="medium"
            defaultValue={props.username || ""}
            onChange={({ target: { value } }) => {
              setValue(value)
            }}
          />
        </Box>
        <Box pl={2}>
          <Button
            disabled={value === ""}
            variant="outlined"
            size="large"
            onClick={() => {
              updatePlayer({
                variables: {
                  id: props.playerId,
                  input: { username: value }
                }
              })
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
      <Box pt={1} color={grey[600]}>
        Emojis encouraged! 🌍🚀✨
      </Box>
    </>
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

  const onChange = (value: string) => {
    setTextFieldValue(value)
    updateGameSettings({
      variables: {
        id: currentGame.id,
        input: { starting_letter: value }
      }
    })
  }

  return (
    <TextField
      label="Letter"
      variant="outlined"
      size="medium"
      helperText={
        <HelperText>
          {currentPlayer.role === PlayerRole.Host ? (
            <>
              <div>
                One style of play is that all words or phrases must start with
                the same letter - Ask your group!
              </div>
              <Link
                href=""
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  e.preventDefault()
                  const randomLetter =
                    sample(Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ")) || "A"
                  onChange(randomLetter)
                }}
              >
                Generate random letter
              </Link>
            </>
          ) : (
            <div>
              One style of play is that all words or phrases must start with the
              same letter. If none is chosen, any word or phrase is fair game!
            </div>
          )}
        </HelperText>
      }
      defaultValue={props.value}
      value={textFieldValue}
      inputProps={{ maxLength: 1, style: { textTransform: "uppercase" } }}
      disabled={!canConfigureSettings}
      onChange={({ target: { value } }) => {
        onChange(value)
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
      required
      helperText={<HelperText>Usually 30 or 60</HelperText>}
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

export function SubmissionsPerPlayerInput(props: { value: string }) {
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
      label="Submissions Per Player"
      variant="outlined"
      size="medium"
      required
      helperText={
        <HelperText>Depends on group size, but usually 4-6</HelperText>
      }
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
