import { Box, Button, TextField } from "@material-ui/core"
import { Players, useUpdatePlayerMutation } from "generated/graphql"
import * as React from "react"

function UsernameInput(props: { playerId: Players["id"]; username: string }) {
  const [updatePlayer] = useUpdatePlayerMutation()
  const [value, setValue] = React.useState(props.username || "")
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        updatePlayer({
          variables: {
            id: props.playerId,
            input: { username: value }
          }
        })
      }}
    >
      <Box display="flex" alignItems="flex-start" justifyContent="flex-start">
        <Box>
          <TextField
            label="Username"
            variant="outlined"
            size="small"
            defaultValue={props.username || ""}
            onChange={({ target: { value } }) => {
              setValue(value)
            }}
            helperText={<span>Emojis encouraged! 🌍🚀✨</span>}
          />
        </Box>
        <Box pl={2}>
          <Button
            type="submit"
            disabled={value === ""}
            variant="outlined"
            size="large"
          >
            Join
          </Button>
        </Box>
      </Box>
    </form>
  )
}

export default UsernameInput
