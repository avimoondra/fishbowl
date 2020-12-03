import {
  Box,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid,
  Typography,
} from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import { useTitleStyle } from "index"
import CardSettings from "pages/Lobby/CardSettings"
import ControllableRoundSettings from "pages/Lobby/ControllableRoundSettings"
import { SecondsPerTurnInput } from "pages/Lobby/Inputs"
import AllowCardSkipsCheckbox from "pages/Lobby/Inputs/AllowCardSkipsCheckbox"
import RoundSettings from "pages/Lobby/RoundSettings"
import * as React from "react"

function SettingsSection(props: {
  debouncedSetWordList?: (wordList: string) => void
}) {
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const titleClasses = useTitleStyle()
  return (
    <ExpansionPanel
      style={{
        boxShadow: "none",
        background: "none",
      }}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        style={{ padding: 0 }}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h4" className={titleClasses.title}>
          Settings
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={{ padding: 0 }}>
        <Grid item>
          <Grid container spacing={2} direction="column">
            <Grid item>
              {currentPlayer.role === PlayerRole.Participant && (
                <div style={{ color: grey[600] }}>
                  (Only your host can set these)
                </div>
              )}
            </Grid>
            <Grid item>
              <Typography variant="h6" className={titleClasses.title}>
                Cards
              </Typography>
            </Grid>
            <CardSettings
              debouncedSetWordList={props.debouncedSetWordList}
            ></CardSettings>

            <Grid item>
              <Typography variant="h6" className={titleClasses.title}>
                Turns
              </Typography>
            </Grid>
            <Grid item>
              <SecondsPerTurnInput
                value={String(currentGame.seconds_per_turn || "")}
              />
            </Grid>
            <Grid item>
              <AllowCardSkipsCheckbox
                value={Boolean(currentGame.allow_card_skips)}
              />
            </Grid>
            <Grid item>
              <Typography variant="h6" className={titleClasses.title}>
                Rounds
              </Typography>
              <Box pl={2} pt={1} fontSize="0.75rem" color={grey[600]}>
                {currentPlayer.role === PlayerRole.Host &&
                  "You can add, remove, or reorder rounds. By default, cards submitted will be re-used across rounds of Taboo, Charades, and Password."}
              </Box>
            </Grid>
            <Grid item>
              {currentPlayer.role === PlayerRole.Host ? (
                <ControllableRoundSettings />
              ) : (
                <RoundSettings />
              )}
            </Grid>
            <Grid item />
          </Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default SettingsSection
