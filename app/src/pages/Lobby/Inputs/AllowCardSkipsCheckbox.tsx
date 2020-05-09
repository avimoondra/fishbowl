import * as React from "react"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import { CurrentGameContext } from "contexts/CurrentGame"
import { useUpdateGameSettingsMutation } from "generated/graphql"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"

export default function AllowCardSkipsCheckbox(props: { value: boolean }) {
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const currentGame = React.useContext(CurrentGameContext)
  const [updateGameSettings] = useUpdateGameSettingsMutation()
  const [checkboxValue, setCheckboxValue] = React.useState(props.value)
  const canConfigureSettings = currentPlayer.role === PlayerRole.Host

  React.useEffect(() => {
    setCheckboxValue(props.value)
  }, [props.value])

  return (
    <FormControlLabel
      control={
        <Switch
          checked={checkboxValue}
          color="primary"
          disabled={!canConfigureSettings}
          onChange={({ target: { checked } }) => {
            setCheckboxValue(checked)
            updateGameSettings({
              variables: {
                id: currentGame.id,
                input: { allow_card_skips: checked }
              }
            })
          }}
        />
      }
      label="Allow card skips"
    />
  )
}
