import { Button, Grid, TextField, Typography } from "@material-ui/core"
import { green } from "@material-ui/core/colors"
import { CurrentGameContext } from "contexts/CurrentGame"
import * as React from "react"
import Clipboard from "react-clipboard.js"
import { useTranslation } from "react-i18next"

function ShareSection() {
  const { t } = useTranslation()
  const currentGame = React.useContext(CurrentGameContext)
  const [copyButtonClicked, setCopyButtonClicked] = React.useState(false)

  React.useEffect(() => {
    let timeout: NodeJS.Timeout
    if (copyButtonClicked) {
      timeout = setTimeout(() => {
        setCopyButtonClicked(false)
      }, 1000)
    }
    return () => timeout && clearTimeout(timeout)
  }, [copyButtonClicked])

  return (
    <Grid item>
      {t("lobby.shareGame.linkLabel", "Share your link with everyone playing")}
      <Grid container spacing={2} style={{ paddingTop: 8, paddingBottom: 8 }}>
        <Grid item xs={8}>
          <TextField
            id="standard-read-only-input"
            defaultValue={document.URL.replace("http://", "").replace(
              "https://",
              ""
            )}
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Clipboard
            data-clipboard-text={document.URL}
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
              {copyButtonClicked ? t("copied", "Copied") : t("copy", "Copy")}
            </Button>
          </Clipboard>
        </Grid>
      </Grid>
      {t("lobby.shareGame.codeLabel", "Or the code")}
      <Typography variant="h6">{currentGame.join_code}</Typography>
    </Grid>
  )
}

export default ShareSection
