import { Box, Button, TextField } from "@material-ui/core"
import { Players, useUpdatePlayerMutation } from "generated/graphql"
import * as React from "react"
import { useTranslation } from "react-i18next"

function UsernameInput(props: { playerId: Players["id"]; username: string }) {
  const { t } = useTranslation()
  const [updatePlayer] = useUpdatePlayerMutation()
  const [value, setValue] = React.useState(props.username || "")
  const [savedName, setSavedName] = React.useState(value)

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault()
        const response = await updatePlayer({
          variables: {
            id: props.playerId,
            input: { username: value },
          },
        })
        if (response.data?.update_players_by_pk?.username) {
          setSavedName(value)
        }
      }}
    >
      <Box display="flex" alignItems="flex-start" justifyContent="flex-start">
        <Box>
          <TextField
            label={t("lobby.username.label", "Username")}
            variant="outlined"
            size="small"
            defaultValue={props.username || ""}
            onChange={({ target: { value } }) => {
              setValue(value)
            }}
            helperText={
              <span>
                {t("lobby.username.helper", "Emojis encouraged!")} 🌍🚀✨
              </span>
            }
          />
        </Box>
        <Box pl={2}>
          <Button
            type="submit"
            disabled={value === "" || value === savedName}
            variant="outlined"
            size="large"
          >
            {!!savedName
              ? t("lobby.username.changeButton", "Change")
              : t("lobby.username.joinButton", "Join")}
          </Button>
        </Box>
      </Box>
    </form>
  )
}

export default UsernameInput
