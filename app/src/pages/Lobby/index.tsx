import {
  createStyles,
  Divider,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import {
  GameCardPlayStyleEnum,
  useUpdateGameSettingsMutation,
  useUpdatePlayerMutation,
} from "generated/graphql"
import { useTitleStyle } from "index"
import { debounce } from "lodash"
import UsernameInput from "pages/Lobby/Inputs/UsernameInput"
import SettingsSection from "pages/Lobby/SettingsSection"
import ShareSection from "pages/Lobby/ShareSection"
import WaitingRoom from "pages/Lobby/WaitingRoom"
import * as React from "react"
import { useTranslation } from "react-i18next"
import { useLocation } from "react-router-dom"

const DEBOUNCE_SECONDS = 1000

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      margin: theme.spacing(2),
    },
  })
)

function Lobby() {
  const { t } = useTranslation()
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const currentGame = React.useContext(CurrentGameContext)
  const [updatePlayer] = useUpdatePlayerMutation()
  const classes = useStyles()
  const titleClasses = useTitleStyle()
  const location = useLocation()
  const [hideShare, setHideShare] = React.useState(false)
  const [updateGameSettings] = useUpdateGameSettingsMutation()
  const [cardPlayStyle, setCardPlayStyle] = React.useState(
    GameCardPlayStyleEnum.PlayersSubmitWords
  )

  React.useEffect(() => {
    setCardPlayStyle(currentGame.card_play_style)
  }, [currentGame.card_play_style])

  const [wordList, setWordList] = React.useState("")
  const debouncedSetWordList = React.useRef(
    debounce((value: string) => {
      setWordList(value)
    }, DEBOUNCE_SECONDS)
  ).current

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
          {t("title", "Fishbowl")}
        </Typography>
      )}

      <Divider variant="middle"></Divider>

      {currentPlayer.role === PlayerRole.Host && (
        <>
          <div className={classes.section}>
            <SettingsSection
              cardPlayStyle={cardPlayStyle}
              setCardPlayStyle={(value) => {
                setCardPlayStyle(value as GameCardPlayStyleEnum)
                updateGameSettings({
                  variables: {
                    id: currentGame.id,
                    input: {
                      card_play_style: value as GameCardPlayStyleEnum,
                    },
                  },
                })
              }}
              debouncedSetWordList={debouncedSetWordList}
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
                {t("lobby.heading", "Lobby")}
              </Typography>
            </Grid>
            <Grid item>
              <UsernameInput
                username={currentPlayer.username || ""}
                playerId={currentPlayer.id}
              />
            </Grid>
            <WaitingRoom
              wordList={wordList}
              cardPlayStyle={cardPlayStyle}
            ></WaitingRoom>
          </Grid>
        </Grid>
      </div>

      {currentPlayer.role === PlayerRole.Participant && (
        <>
          <Divider variant="middle"></Divider>
          <div className={classes.section}>
            <SettingsSection cardPlayStyle={cardPlayStyle}></SettingsSection>
          </div>
        </>
      )}
    </div>
  )
}

export default Lobby
