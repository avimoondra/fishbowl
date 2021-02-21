import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import { GameCardPlayStyleEnum } from "generated/graphql"
import { parseWordList } from "lib/cards"
import { LetterInput, SubmissionsPerPlayerInput } from "pages/Lobby/Inputs"
import ScreenCardsCheckbox from "pages/Lobby/Inputs/ScreenCardsCheckbox"
import * as React from "react"
import { useTranslation } from "react-i18next"

function CardSettings(props: {
  cardPlayStyle: GameCardPlayStyleEnum
  setCardPlayStyle?: (cardPlayStyle: GameCardPlayStyleEnum) => void
  debouncedSetWordList?: (wordList: string) => void
}) {
  const { t } = useTranslation()
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const currentGame = React.useContext(CurrentGameContext)
  const [wordList, setWordList] = React.useState("")
  const canConfigureSettings = currentPlayer.role === PlayerRole.Host

  const wordListLength = parseWordList(wordList).length

  return (
    <>
      <Grid item>
        <FormControl component="fieldset" disabled={!canConfigureSettings}>
          <RadioGroup
            value={props.cardPlayStyle}
            onChange={({ target: { value } }) => {
              props.setCardPlayStyle &&
                props.setCardPlayStyle(value as GameCardPlayStyleEnum)
            }}
          >
            <FormControlLabel
              value={GameCardPlayStyleEnum.PlayersSubmitWords}
              control={<Radio color="primary"></Radio>}
              label={t(
                "settings.cards.cardStyle.playersSubmit",
                "Players submit words (default)"
              )}
            ></FormControlLabel>
            <FormControlLabel
              value={GameCardPlayStyleEnum.HostProvidesWords}
              control={<Radio color="primary"></Radio>}
              label={t(
                "settings.cards.cardStyle.hostProvides",
                "Host provides words"
              )}
            ></FormControlLabel>
          </RadioGroup>
        </FormControl>
      </Grid>
      {props.cardPlayStyle === GameCardPlayStyleEnum.PlayersSubmitWords && (
        <>
          <Grid item />
          <Grid item>
            <SubmissionsPerPlayerInput
              value={String(currentGame.num_entries_per_player || "")}
            />
          </Grid>
          <Grid item>
            <LetterInput value={currentGame.starting_letter || ""} />
          </Grid>
          <Grid item>
            <ScreenCardsCheckbox value={Boolean(currentGame.screen_cards)} />
          </Grid>
        </>
      )}
      {props.cardPlayStyle === GameCardPlayStyleEnum.HostProvidesWords &&
        canConfigureSettings && (
          <Grid item>
            <TextField
              autoFocus
              value={wordList}
              onChange={({ target: { value } }) => {
                setWordList(value)
                props.debouncedSetWordList && props.debouncedSetWordList(value)
              }}
              fullWidth
              label={t("settings.cards.words.label", "Words")}
              multiline
              rows={5}
              variant="outlined"
              placeholder={t(
                "settings.cards.words.placeholder",
                "Comma separated list of words here..."
              )}
            ></TextField>
            <Box
              display="flex"
              flexDirection="row-reverse"
              pt={0.5}
              color={grey[600]}
            >
              {t("settings.cards.words.helper", "{{ count }} word detected", {
                count: wordListLength,
                defaultValue_plural: "{{ count }} words detected",
              })}
            </Box>
          </Grid>
        )}
    </>
  )
}

export default CardSettings
