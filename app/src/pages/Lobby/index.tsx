import * as React from "react"
import { debounce } from "lodash"
import { TextField, Button, Chip, Divider } from "@material-ui/core"
import {
  useUpdateGameSettingsMutation,
  useUpdatePlayerMutation,
  useWaitingRoomSubscription,
  useCurrentPlayerByIdQuery,
  useGameSubscription
} from "generated/graphql"
import { PlayerRole, CurrentPlayerContext } from "contexts/CurrentPlayer"

function WaitingRoom() {
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const { data } = useWaitingRoomSubscription({
    variables: {
      gameId: currentPlayer.gameId
    }
  })

  const players = data?.games_by_pk?.players
  const canStartGame = currentPlayer.role === PlayerRole.Host

  return (
    <>
      {players && players.length < 4 && <div>You need at least 4 players!</div>}
      {players?.map(player => {
        return (
          player.username && (
            <Chip
              key={player.username}
              color="secondary"
              variant="outlined"
              label={player.username}
            ></Chip>
          )
        )
      })}
      {canStartGame && (
        <Button variant="contained" color="primary">
          Everyone's Here!
        </Button>
      )}
    </>
  )
}

function UsernameInput(props: { userId: number; username: string }) {
  const [updatePlayer] = useUpdatePlayerMutation()
  const debouncedUpdatePlayer = React.useRef(
    debounce(
      (value: string) =>
        updatePlayer({
          variables: {
            id: props.userId,
            input: { username: value }
          }
        }),
      200
    )
  )

  return (
    <TextField
      label="Username"
      variant="outlined"
      defaultValue={props.username || ""}
      onChange={({ target: { value } }) => {
        debouncedUpdatePlayer.current(value)
      }}
    />
  )
}

function LetterInput(props: { gameId: number; value: string }) {
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const [updateGameSettings] = useUpdateGameSettingsMutation()
  const canConfigureSettings = currentPlayer.role === PlayerRole.Host

  return (
    <TextField
      label="Letter"
      variant="outlined"
      defaultValue={props.value || ""}
      inputProps={{ maxLength: 1, style: { textTransform: "uppercase" } }}
      disabled={!canConfigureSettings}
      onChange={({ target: { value } }) => {
        updateGameSettings({
          variables: {
            id: currentPlayer.gameId,
            input: { starting_letter: value }
          }
          // optimisticResponse: {
          //   update_games_by_pk: {
          //     id: currentPlayer.gameId,
          //     starting_letter: value
          //   }
          // }
        })
      }}
    />
  )
}

function Lobby() {
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const [updateGameSettings] = useUpdateGameSettingsMutation()

  const canConfigureSettings = currentPlayer.role === PlayerRole.Host

  const { data } = useCurrentPlayerByIdQuery({
    variables: {
      id: currentPlayer.id
    }
  })

  const { data: gameData } = useGameSubscription({
    variables: {
      id: currentPlayer.gameId
    }
  })

  if (!data?.players_by_pk?.id || !gameData?.games_by_pk?.id) {
    return null
  }

  return (
    <div>
      <UsernameInput
        username={data.players_by_pk?.username || ""}
        userId={currentPlayer.id}
      ></UsernameInput>
      <LetterInput
        gameId={currentPlayer.gameId}
        value={gameData.games_by_pk?.starting_letter || ""}
        // key={gameData.games_by_pk?.starting_letter || ""}
      ></LetterInput>
      <TextField
        label="Seconds Per Turn"
        variant="outlined"
        value={gameData?.games_by_pk?.seconds_per_turn || ""}
        disabled={!canConfigureSettings}
        onChange={({ target: { value } }) => {
          updateGameSettings({
            variables: {
              id: currentPlayer.gameId,
              input: { seconds_per_turn: Number(value) }
            }
          })
        }}
      />
      <TextField
        label="Entries Per Player"
        variant="outlined"
        value={gameData?.games_by_pk?.num_entries_per_player || ""}
        disabled={!canConfigureSettings}
        onChange={({ target: { value } }) => {
          updateGameSettings({
            variables: {
              id: currentPlayer.gameId,
              input: { num_entries_per_player: Number(value) }
            }
          })
        }}
      />
      <Divider></Divider>
      <WaitingRoom></WaitingRoom>
    </div>
  )
}

export default Lobby
