import {
  Box,
  createStyles,
  Divider,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid,
  makeStyles,
  Theme,
  Typography
} from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import { useTitleStyle } from "index"
import ControllableRoundSettings from "pages/Lobby/ControllableRoundSettings"
import {
  LetterInput,
  SecondsPerTurnInput,
  SubmissionsPerPlayerInput,
  UsernameInput
} from "pages/Lobby/Inputs"
import RoundSettings from "pages/Lobby/RoundSettings"
import WaitingRoom from "pages/Lobby/WaitingRoom"
import * as React from "react"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      margin: theme.spacing(2)
    }
  })
)

function ShareSection() {
  const currentGame = React.useContext(CurrentGameContext)
  return (
    <Grid item>
      {`Share the code with everyone playing`}
      <Typography variant="h6">{currentGame.join_code}</Typography>
    </Grid>
  )
}

function SettingsSection() {
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const titleClasses = useTitleStyle()
  return (
    <ExpansionPanel
      style={{
        boxShadow: "none",
        background: "none"
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
              <SecondsPerTurnInput
                value={String(currentGame.seconds_per_turn || "")}
              ></SecondsPerTurnInput>
            </Grid>
            <Grid item>
              <SubmissionsPerPlayerInput
                value={String(currentGame.num_entries_per_player || "")}
              ></SubmissionsPerPlayerInput>
            </Grid>
            <Grid item>
              <LetterInput
                value={currentGame.starting_letter || ""}
              ></LetterInput>
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
                <ControllableRoundSettings></ControllableRoundSettings>
              ) : (
                <RoundSettings></RoundSettings>
              )}
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

function WaitingRoomSection() {
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const titleClasses = useTitleStyle()

  return (
    <Grid item>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Typography variant="h4" className={titleClasses.title}>
            Lobby
          </Typography>
        </Grid>
        <Grid item>
          <UsernameInput
            username={currentPlayer.username || ""}
            playerId={currentPlayer.id}
          ></UsernameInput>
        </Grid>
        <WaitingRoom></WaitingRoom>
      </Grid>
    </Grid>
  )
}

function Lobby() {
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const classes = useStyles()

  return (
    <div>
      <div className={classes.section}>
        <ShareSection></ShareSection>
      </div>
      <Divider variant="middle"></Divider>

      {currentPlayer.role === PlayerRole.Host && (
        <>
          <div className={classes.section}>
            <SettingsSection></SettingsSection>
          </div>
          <Divider variant="middle"></Divider>
        </>
      )}

      <div className={classes.section}>
        <WaitingRoomSection></WaitingRoomSection>
      </div>

      {currentPlayer.role === PlayerRole.Participant && (
        <>
          <Divider variant="middle"></Divider>
          <div className={classes.section}>
            <SettingsSection></SettingsSection>
          </div>
        </>
      )}
    </div>
  )
}

export default Lobby
