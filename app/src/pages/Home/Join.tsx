import { useLazyQuery } from "@apollo/react-hooks"
import { Button, Grid, TextField } from "@material-ui/core"
import { CurrentAuthContext } from "contexts/CurrentAuth"
import { clientUuid } from "contexts/CurrentPlayer"
import { NotificationContext } from "contexts/Notification"
import { GameByJoinCodeDocument, useJoinGameMutation } from "generated/graphql"
import * as React from "react"
import { useTranslation } from "react-i18next"
import { generatePath, Redirect } from "react-router-dom"
import routes from "routes"

function Join(props: { onBack: () => void }) {
  const { t } = useTranslation(["home", "common"])
  const currentAuth = React.useContext(CurrentAuthContext)
  const notification = React.useContext(NotificationContext)

  const [joining, setJoining] = React.useState(false)
  const [redirectRoute, setRedirectRoute] = React.useState("")
  const [joinCode, setJoinCode] = React.useState("")

  const [joinGame] = useJoinGameMutation()
  const [loadGame] = useLazyQuery(GameByJoinCodeDocument, {
    variables: { joinCode: joinCode?.toLocaleUpperCase() },
    onCompleted: async (data) => {
      if (data && data.games[0]) {
        try {
          const registration = await joinGame({
            variables: {
              gameId: data.games[0].id,
              clientUuid: clientUuid(),
            },
            context: {
              headers: {
                "X-Hasura-Role": "anonymous",
              },
            },
          })
          if (registration.data?.joinGame) {
            await currentAuth.setJwtToken(registration.data.joinGame.jwt_token)
          }
          setJoining(false)
          setRedirectRoute(
            generatePath(routes.game.lobby, {
              joinCode: joinCode?.toLocaleUpperCase(),
            })
          )
        } catch {
          // cannot join game
          setRedirectRoute(
            generatePath(routes.game.pending, {
              joinCode: joinCode?.toLocaleUpperCase(),
            })
          )
        }
      } else {
        // cannot find game
        notification.send(
          t(
            "invalidJoinCode",
            "Cannot find game {{ joinCode }}. Double check the code! 👀",
            { joinCode: joinCode?.toLocaleUpperCase() }
          )
        )
        props.onBack()
      }
    },
    onError: (_) => {
      props.onBack()
    },
  })

  return (
    <>
      {redirectRoute && joinCode && <Redirect push to={redirectRoute} />}
      <Grid container direction="column" spacing={3} alignItems="center">
        <Grid item>
          <TextField
            autoFocus
            size="medium"
            label={t("joinCodeLabel", "4-letter code")}
            variant="outlined"
            value={joinCode}
            onChange={({ target: { value } }) => setJoinCode(value)}
            inputProps={{ maxLength: 4, style: { textTransform: "uppercase" } }}
            style={{ textTransform: "uppercase" }}
          ></TextField>
        </Grid>
        <Grid container item>
          <Button size="small" onClick={props.onBack}>
            {t("common:backButton", "Back")}
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => {
              setJoining(true)
              loadGame({
                context: {
                  headers: {
                    "X-Hasura-Role": "anonymous",
                  },
                },
              })
            }}
            disabled={!joinCode || joinCode.length < 4 || joining}
          >
            {t("joinGameButton", "Join Game")}
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Join
