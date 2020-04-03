import * as React from "react"
import { TextField, Button } from "@material-ui/core"
import { useJoinGameMutation, GameByJoinCodeDocument } from "generated/graphql"
import { generatePath, Redirect } from "react-router-dom"
import routes from "routes"
import { useLazyQuery } from "@apollo/react-hooks"
import { playerUuid } from "contexts/CurrentPlayer"

function Join() {
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
      <TextField
        size="small"
        label="4-letter code"
        variant="outlined"
        value={joinCode}
        onChange={({ target: { value } }) => setJoinCode(value)}
        inputProps={{ maxLength: 4, style: { textTransform: "uppercase" } }}
        style={{ textTransform: "uppercase" }}
      ></TextField>
      <Button
        onClick={() => loadGame()}
        disabled={!joinCode || joinCode.length < 4}
      >
        Join Game
      </Button>
    </>
  )
}

export default Join
