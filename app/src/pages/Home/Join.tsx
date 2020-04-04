import { useLazyQuery } from "@apollo/react-hooks"
import { Button, Grid, TextField } from "@material-ui/core"
import { playerUuid } from "contexts/CurrentPlayer"
import { GameByJoinCodeDocument, useJoinGameMutation } from "generated/graphql"
import * as React from "react"
import { generatePath, Redirect } from "react-router-dom"
import routes from "routes"

function Join(props: { onBack: () => void }) {
  const [redirectRoute, setRedirectRoute] = React.useState("")
  const [joinCode, setJoinCode] = React.useState<string | null>(null)
  const [joinGame] = useJoinGameMutation()
  const [loadGame] = useLazyQuery(GameByJoinCodeDocument, {
    variables: { joinCode: joinCode?.toLocaleUpperCase() },
    onCompleted: async data => {
      await joinGame({
        variables: {
          gameId: data.games[0].id,
          playerUuid: playerUuid()
        }
      })
      setRedirectRoute(
        generatePath(routes.game.lobby, {
          joinCode: data.games[0].join_code
        })
      )
    },
    onError: _ => {
      setRedirectRoute(routes.game.root)
    }
  })

  return (
    <>
      {redirectRoute && joinCode && <Redirect push to={redirectRoute} />}
      <Grid container direction="column" spacing={3} alignItems="center">
        <Grid item>
          <TextField
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
            onClick={() => loadGame()}
            disabled={!joinCode || joinCode.length < 4}
          >
            Join Game
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Join
