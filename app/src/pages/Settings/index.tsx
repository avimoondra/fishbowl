import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField,
} from "@material-ui/core"
import { green } from "@material-ui/core/colors"
import PlayerChip from "components/PlayerChip"
import { CurrentGameContext } from "contexts/CurrentGame"
import { Players } from "generated/graphql"
import { find, last } from "lodash"
import { SecondsPerTurnInput } from "pages/Lobby/Inputs"
import AllowCardSkipsCheckbox from "pages/Lobby/Inputs/AllowCardSkipsCheckbox"
import * as React from "react"
import Clipboard from "react-clipboard.js"

function Settings() {
  const currentGame = React.useContext(CurrentGameContext)
  const players = currentGame.players
  const [selectedPlayerId, setSelectedPlayerId] = React.useState<
    Players["id"] | null
  >(null)
  const [copyButtonClicked, setCopyButtonClicked] = React.useState(false)

  const selectedPlayer = find(
    players,
    (player) => player.id === selectedPlayerId
  )
  const selectedPlayerUrl =
    document.URL.replace("http://", "")
      .replace("https://", "")
      .replace("settings", "play") +
    `?client_uuid=${selectedPlayer?.client_uuid}`

  React.useEffect(() => {
    let timeout: NodeJS.Timeout
    if (copyButtonClicked) {
      timeout = setTimeout(() => {
        setCopyButtonClicked(false)
      }, 1000)
    }
    return () => timeout && clearTimeout(timeout)
  }, [copyButtonClicked])

  const activeTurn = last(currentGame.turns)

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        Players can rejoin the game with code{" "}
        <b>{currentGame.join_code?.toLocaleUpperCase()}</b>
      </Grid>
      <Grid item>
        If that's not working, send a unique join link by selecting a player's
        username below.
      </Grid>
      <Grid item>
        <FormControl style={{ width: "200px" }}>
          <InputLabel htmlFor="player-name-native-simple">
            Player username
          </InputLabel>
          <Select
            native
            value={null}
            onChange={({ target: { value } }) => {
              setSelectedPlayerId(value)
            }}
            inputProps={{
              name: "Player name",
              id: "player-name-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            {players.map((player) => {
              return (
                <option value={player.id || "unknown"}>
                  {player.username}
                </option>
              )
            })}
          </Select>
        </FormControl>
      </Grid>
      {selectedPlayer && (
        <>
          <Grid item container spacing={2}>
            <Grid item xs={8}>
              <TextField
                id="standard-read-only-input"
                value={selectedPlayerUrl}
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <Clipboard
                data-clipboard-text={selectedPlayerUrl}
                style={{ border: "none", background: "none" }}
              >
                <Button
                  variant="contained"
                  color="default"
                  style={
                    copyButtonClicked
                      ? { backgroundColor: green[600], color: "#fff" }
                      : {}
                  }
                  onClick={() => setCopyButtonClicked(true)}
                >
                  {copyButtonClicked ? "Copied" : "Copy"}
                </Button>
              </Clipboard>
            </Grid>
          </Grid>
          <Grid item>
            Send this to{" "}
            <PlayerChip username={selectedPlayer?.username || ""}></PlayerChip>{" "}
            so they can get back in the game!
          </Grid>
        </>
      )}
      <Grid item>
        <Box py={2}>
          <Divider variant="fullWidth"></Divider>
        </Box>
      </Grid>
      <Grid item>
        <Box pb={1}>
          As the host, you can adjust these settings before each turn or round
          starts.
        </Box>
      </Grid>
      <Grid item>
        <SecondsPerTurnInput
          value={String(currentGame.seconds_per_turn || "")}
          disabled={activeTurn?.started_at}
        />
      </Grid>
      <Grid item>
        <AllowCardSkipsCheckbox
          value={Boolean(currentGame.allow_card_skips)}
          disabled={activeTurn?.started_at}
        />
      </Grid>
    </Grid>
  )
}

export default Settings
