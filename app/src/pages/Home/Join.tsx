import { useLazyQuery } from "@apollo/react-hooks"
import { Button, Grid, TextField } from "@material-ui/core"
import * as Sentry from "@sentry/browser"
import { CurrentAuthContext } from "contexts/CurrentAuth"
import { clientUuid } from "contexts/CurrentPlayer"
import { GameByJoinCodeDocument, useJoinGameMutation } from "generated/graphql"
import * as React from "react"
import { generatePath, Redirect } from "react-router-dom"
import routes from "routes"

function Join(props: { onBack: () => void }) {
  const currentAuth = React.useContext(CurrentAuthContext)
  const [joining, setJoining] = React.useState(false)
  const [redirectRoute, setRedirectRoute] = React.useState("")
  const [joinCode, setJoinCode] = React.useState("")
  const [joinGame] = useJoinGameMutation()
  const [loadGame] = useLazyQuery(GameByJoinCodeDocument, {
    variables: { joinCode: joinCode?.toLocaleUpperCase() },
    onCompleted: async data => {
      if (data && data.games[0]) {
        try {
          const registration = await joinGame({
            variables: {
              gameId: data.games[0].id,
              clientUuid: clientUuid()
            },
            context: {
              headers: {
                "X-Hasura-Role": "anonymous"
              }
            }
          })
          if (registration.data?.joinGame) {
            await currentAuth.setJwtToken(registration.data.joinGame.jwt_token)
          }
          setJoining(false)
          setRedirectRoute(
            generatePath(routes.game.lobby, {
              joinCode: joinCode?.toLocaleUpperCase()
            })
          )
        } catch {
          // cannot join game
          Sentry.captureException(
            new Error(
              `(button) Cannot join game, ${joinCode?.toLocaleUpperCase()}. Client uuid: ${clientUuid()}`
            )
          )
          props.onBack()
        }
      } else {
        // cannot find game
        Sentry.captureException(
          new Error(
            `(button) Cannot find game, ${joinCode?.toLocaleUpperCase()}`
          )
        )
        props.onBack()
      }
    },
    onError: _ => {
      props.onBack()
    }
  })

  return (
    <>
      {redirectRoute && joinCode && <Redirect push to={redirectRoute} />}
      <Grid container direction="column" spacing={3} alignItems="center">
        <Grid item>
          <TextField
            autoFocus
            size="medium"
            label="4-letter code"
            variant="outlined"
            value={joinCode}
            onChange={({ target: { value } }) => setJoinCode(value)}
            inputProps={{ maxLength: 4, style: { textTransform: "uppercase" } }}
            style={{ textTransform: "uppercase" }}
          ></TextField>
        </Grid>
        <Grid container item>
          <Button size="small" onClick={props.onBack}>
            Back
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => {
              setJoining(true)
              loadGame({
                context: {
                  headers: {
                    "X-Hasura-Role": "anonymous"
                  }
                }
              })
            }}
            disabled={!joinCode || joinCode.length < 4 || joining}
          >
            Join Game
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Join
