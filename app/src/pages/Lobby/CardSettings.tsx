import { FormControlLabel, Grid, Switch, TextField } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import { compact } from "lodash"
import { LetterInput, SubmissionsPerPlayerInput } from "pages/Lobby/Inputs"
import ScreenCardsCheckbox from "pages/Lobby/Inputs/ScreenCardsCheckbox"
import * as React from "react"

function CardSettings(props: {
  debouncedSetWordList?: (wordList: string) => void
}) {
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const currentGame = React.useContext(CurrentGameContext)
  const [submittingCards, setSubmittingCards] = React.useState(true)
  const [wordList, setWordList] = React.useState("")
  const canConfigureSettings = currentPlayer.role === PlayerRole.Host

  const wordListLength = compact(wordList.split(",").map((word) => word.trim()))
    .length

  return (
    <>
      <Grid item>
        <FormControlLabel
          control={
            <Switch
              checked={submittingCards}
              disabled={!canConfigureSettings}
              color="primary"
              onChange={({ target: { checked } }) => {
                setSubmittingCards(checked)
              }}
            />
          }
          label={
            <div>
              <span style={{ color: grey[600] }}>Players submit cards</span>
              <div style={{ fontSize: "12px", color: grey[600] }}>
                vs. host providing a list of words or phrases
              </div>
            </div>
          }
        ></FormControlLabel>
      </Grid>
      <Grid item />
      {submittingCards ? (
        <>
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
      ) : (
        <>
          {canConfigureSettings && (
            <Grid item>
              <TextField
                value={wordList}
                onChange={({ target: { value } }) => {
                  setWordList(value)
                  props.debouncedSetWordList &&
                    props.debouncedSetWordList(value)
                }}
                fullWidth
                label="Words"
                multiline
                rows={5}
                variant="outlined"
                placeholder="Comma separated list of words here..."
              ></TextField>
              {wordListLength ? `${wordListLength} words detected` : ""}
            </Grid>
          )}
        </>
      )}
    </>
  )
}

export default CardSettings
