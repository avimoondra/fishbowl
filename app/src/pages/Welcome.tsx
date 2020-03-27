import * as React from "react"
import Button from "@material-ui/core/Button"
import { Typography, TextField } from "@material-ui/core"
import { Serif } from "styles/font"
import { Link, Redirect, withRouter } from "react-router-dom"
import routes from "routes"
import { useStartNewGameMutation } from "generated/graphql"

function Welcome() {
  const [joinCode, setJoinCode] = React.useState("")
  const [canInputJoinCode, setCanJoinCode] = React.useState(false)
  const [isGeneratingJoinCode, setIsGeneratingJoinCode] = React.useState(false)
  const [
    startNewGameMutation,
    { data, loading, error }
  ] = useStartNewGameMutation()

  const generateCode = async () => {
    setIsGeneratingJoinCode(true)
    const data = await startNewGameMutation()
    debugger
    const join_code = data.data?.insert_games?.returning[0].join_code
    if (join_code) setJoinCode(join_code)
    setIsGeneratingJoinCode(false)
  }

  return (
    <div>
      <Typography variant="h1">
        <Serif>Fishbowl</Serif>
      </Typography>
      <Button onClick={() => generateCode()} disabled={isGeneratingJoinCode}>
        {joinCode == "ABDC" ? (
          <Redirect push to={routes.game.createLobbyRoute(joinCode)}></Redirect>
        ) : (
          <span> Host Game</span>
        )}
      </Button>
      {canInputJoinCode ? (
        <>
          <TextField
            label="4-letter code"
            variant="outlined"
            value={joinCode}
            onChange={(event: any) => setJoinCode(event.target.value)}
            inputProps={{ maxLength: 4, style: { textTransform: "uppercase" } }}
            style={{ textTransform: "uppercase" }}
          ></TextField>
          <Button
            component={Link}
            to={routes.game.createLobbyRoute(joinCode)}
            disabled={joinCode.length < 4}
          >
            Join Game
          </Button>
        </>
      ) : (
        <Button onClick={() => setCanJoinCode(true)}>Join Game</Button>
      )}
    </div>
  )
}

export default Welcome
