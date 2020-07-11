import { grey } from "@material-ui/core/colors"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import { useUpdateGameSettingsMutation } from "generated/graphql"
import * as React from "react"

export default function ScreenCardsCheckbox(props: {
  value: boolean
  disabled?: boolean
}) {
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
          disabled={!canConfigureSettings || props.disabled}
          onChange={({ target: { checked } }) => {
            setCheckboxValue(checked)
            updateGameSettings({
              variables: {
                id: currentGame.id,
                input: { screen_cards: checked },
              },
            })
          }}
        />
      }
      label={
        <div>
          <span style={{ color: grey[600] }}>Allow host to screen cards</span>
          <div style={{ fontSize: "12px", color: grey[600] }}>e.g. for profanity</div>
        </div>
      }
    />
  )
}
