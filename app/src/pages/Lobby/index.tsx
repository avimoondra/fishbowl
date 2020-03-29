import * as React from "react"
import { TextField, Button } from "@material-ui/core"
import { useUpdateGameSettingsMutation } from "generated/graphql"
import { PlayerRole, CurrentPlayerContext } from "contexts/CurrentPlayer"

function Lobby() {
  const currentPlayer = React.useContext(CurrentPlayerContext)
  // const [updateGameSettings] = useUpdateGameSettingsMutation()

  const canConfigureSettings = currentPlayer.role === PlayerRole.Host
  const canStartGame = currentPlayer.role === PlayerRole.Host

  return (
    <div>
      <TextField
        label="Username"
        variant="outlined"
        disabled={!canConfigureSettings}
        onClick={() => {}}
      />
      <TextField
        label="Letter"
        variant="outlined"
        value={""}
        disabled={!canConfigureSettings}
        onChange={() => {
          // updateGameSettings({
          //   variables: {
          //     id: currentGame.id,
          //     input: {
          //       starting_letter:
          //     }
          //   }
          // })
        }}
      />
      <TextField
        label="Seconds Per Turn"
        variant="outlined"
        disabled={!canConfigureSettings}
      />
      <TextField
        label="Entries Per Player"
        variant="outlined"
        disabled={!canConfigureSettings}
      />
      {canStartGame && (
        <Button variant="contained" color="primary">
          Everyone's Here!
        </Button>
      )}
    </div>
  )
}

export default Lobby
