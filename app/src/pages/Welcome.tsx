import * as React from "react"
import Button from "@material-ui/core/Button"
import { Typography, TextField } from "@material-ui/core"
import { Serif } from "styles/font"
import { Link, Redirect } from "react-router-dom"
import routes from "routes"
import { useStartNewGameMutation, useGameSubscription } from "generated/graphql"

function StartingNewGame(props: { gameId: number }) {
  const { data } = useGameSubscription({
    variables: {
      id: props.gameId
    }
  })
  const joinCode = data?.games_by_pk?.join_code
  if (joinCode) {
    return (
      <Redirect push to={routes.game.createLobbyRoute(joinCode)}></Redirect>
    )
  } else {
    return null
  }
}

function Welcome() {
  const [joinCode, setJoinCode] = React.useState("")
  const [canInputJoinCode, setCanJoinCode] = React.useState(false)
  const [isGeneratingJoinCode, setIsGeneratingJoinCode] = React.useState(false)
  const [startNewGame, { data }] = useStartNewGameMutation()

  return (
    <div>
      <Typography variant="h1">
        <Serif>Fishbowl</Serif>
      </Typography>
      {isGeneratingJoinCode && data?.insert_games_one?.id && (
        <StartingNewGame gameId={data?.insert_games_one?.id}></StartingNewGame>
      )}
      <Button
        onClick={() => {
          setIsGeneratingJoinCode(true)
          startNewGame()
        }}
        disabled={isGeneratingJoinCode}
      >
        Host Game
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
