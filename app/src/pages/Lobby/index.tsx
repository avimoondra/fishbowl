import {
  createStyles,
  Divider,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import { useUpdatePlayerMutation } from "generated/graphql"
import { useTitleStyle } from "index"
import UsernameInput from "pages/Lobby/Inputs/UsernameInput"
import SettingsSection from "pages/Lobby/SettingsSection"
import ShareSection from "pages/Lobby/ShareSection"
import WaitingRoom from "pages/Lobby/WaitingRoom"
import * as React from "react"
import { useLocation } from "react-router-dom"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      margin: theme.spacing(2),
    },
  })
)

function Lobby() {
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const [updatePlayer] = useUpdatePlayerMutation()
  const classes = useStyles()
  const titleClasses = useTitleStyle()
  const location = useLocation()
  const [hideShare, setHideShare] = React.useState(false)
  const [wordList, setWordList] = React.useState("")

  React.useEffect(() => {
    const params = new URLSearchParams(location.search)

    setHideShare(params.get("hideshare") === "true")

    const username = params.get("name")
    if (username) {
      updatePlayer({
        variables: {
          id: currentPlayer.id,
          input: { username },
        },
      })
    }
  }, [])

  return (
    <div>
      {!hideShare ? (
        <div className={classes.section}>
          <ShareSection />
        </div>
      ) : (
        <Typography
          variant="h4"
          style={{ textAlign: "center", marginBottom: "1em" }}
          className={titleClasses.title}
        >
          Fishbowl
        </Typography>
      )}

      <Divider variant="middle"></Divider>

      {currentPlayer.role === PlayerRole.Host && (
        <>
          <div className={classes.section}>
            <SettingsSection
              onChangeWordList={(wordList: string) => setWordList(wordList)}
              wordList={wordList}
            ></SettingsSection>
          </div>
          <Divider variant="middle"></Divider>
        </>
      )}

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
                playerId={currentPlayer.id}
              />
            </Grid>
            <WaitingRoom wordList={wordList}></WaitingRoom>
          </Grid>
        </Grid>
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
