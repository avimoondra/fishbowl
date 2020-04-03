import * as React from "react"
import {
  Divider,
  Grid,
  Typography,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core"
import { CurrentPlayerContext } from "contexts/CurrentPlayer"
import WaitingRoom from "pages/Lobby/WaitingRoom"
import {
  UsernameInput,
  LetterInput,
  SecondsPerTurnInput,
  EntriesPerPlayerInput
} from "pages/Lobby/Inputs"
import { CurrentGameContext } from "contexts/CurrentGame"
import { useTitleStyle } from "index"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      margin: theme.spacing(2)
    }
  })
)

function Lobby() {
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const currentGame = React.useContext(CurrentGameContext)
  const titleClasses = useTitleStyle()
  const classes = useStyles()

  return (
    <div>
      <div className={classes.section}>
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
                userId={currentPlayer.id}
              ></UsernameInput>
            </Grid>
            <WaitingRoom></WaitingRoom>
          </Grid>
        </Grid>
      </div>

      <Divider variant="middle"></Divider>

      <div className={classes.section}>
        <Grid item>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <Typography variant="h4" className={titleClasses.title}>
                Settings
              </Typography>
            </Grid>
            <Grid item>
              <LetterInput
                value={currentGame.starting_letter || ""}
              ></LetterInput>
            </Grid>
            <Grid item>
              <SecondsPerTurnInput
                value={String(currentGame.seconds_per_turn || "")}
              ></SecondsPerTurnInput>
            </Grid>
            <Grid item>
              <EntriesPerPlayerInput
                value={String(currentGame.num_entries_per_player || "")}
              ></EntriesPerPlayerInput>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Lobby
