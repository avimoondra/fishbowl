import {
  Box,
  IconButton,
  InputAdornment,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  TextField
} from "@material-ui/core"
import AddCircleIcon from "@material-ui/icons/AddCircle"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp"
import CloseIcon from "@material-ui/icons/Close"
import arrayMove from "array-move"
import RoundSettingsList from "components/RoundSettingsList"
import { CurrentGameContext } from "contexts/CurrentGame"
import {
  useAddRoundMutation,
  useDeleteRoundMutation,
  useUpdateAllRoundsMutation
} from "generated/graphql"
import { capitalize, lowerFirst, reject } from "lodash"
import * as React from "react"
import { useOnClickOutside } from "lib/useOnClickOutside";

function ControllableRoundSettings() {
  const currentGame = React.useContext(CurrentGameContext)
  const [updateAllRounds] = useUpdateAllRoundsMutation()
  const [deleteRound] = useDeleteRoundMutation()
  const [addRound] = useAddRoundMutation()
  const [showAddRoundForm, setShowAddRoundForm] = React.useState(false)
  const [addRoundValue, setAddRoundValue] = React.useState("")
  const ref = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    if (showAddRoundForm) {
      setShowAddRoundForm(false)
      setAddRoundValue("")
    }
  })

  return (
    <div ref={ref}>
      <RoundSettingsList>
        <>
          {currentGame.rounds.map((round, index) => {
            return (
              <ListItem key={round.id}>
                <ListItemIcon>
                  <>
                    <IconButton
                      color="primary"
                      size="small"
                      disabled={index === 0}
                      onClick={() => {
                        const updatedRounds = arrayMove(
                          currentGame.rounds,
                          index,
                          index - 1
                        )
                        updateAllRounds({
                          variables: {
                            gameId: currentGame.id,
                            rounds: updatedRounds.map(
                              (updatedRound, updatedIndex) => {
                                return {
                                  id: updatedRound.id,
                                  value: updatedRound.value,
                                  order_sequence: updatedIndex
                                }
                              }
                            )
                          }
                        })
                      }}
                    >
                      <ArrowDropUpIcon></ArrowDropUpIcon>
                    </IconButton>
                    <IconButton
                      color="primary"
                      size="small"
                      disabled={index === currentGame.rounds.length - 1}
                      onClick={() => {
                        const updatedRounds = arrayMove(
                          currentGame.rounds,
                          index,
                          index + 1
                        )
                        updateAllRounds({
                          variables: {
                            gameId: currentGame.id,
                            rounds: updatedRounds.map(
                              (updatedRound, updatedIndex) => {
                                return {
                                  id: updatedRound.id,
                                  value: updatedRound.value,
                                  order_sequence: updatedIndex
                                }
                              }
                            )
                          }
                        })
                      }}
                    >
                      <ArrowDropDownIcon></ArrowDropDownIcon>
                    </IconButton>
                  </>
                </ListItemIcon>
                <ListItemText>
                  <Box pl={2}>
                    {index + 1}. {capitalize(round.value)}
                  </Box>
                </ListItemText>
                <ListItemSecondaryAction>
                  <IconButton
                    size="small"
                    onClick={async () => {
                      const updatedRounds = reject(
                        currentGame.rounds,
                        _r => _r.id === round.id
                      )
                      await deleteRound({
                        variables: {
                          id: round.id,
                          gameId: currentGame.id,
                          rounds: updatedRounds.map(
                            (updatedRound, updatedIndex) => {
                              return {
                                id: updatedRound.id,
                                value: updatedRound.value,
                                order_sequence: updatedIndex
                              }
                            }
                          )
                        }
                      })
                    }}
                  >
                    <CloseIcon></CloseIcon>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )
          })}
          <ListItem>
            <ListItemText style={{ paddingLeft: "76px" }}>
              {showAddRoundForm ? (
                <TextField
                  value={addRoundValue}
                  onChange={({ target: { value } }) => setAddRoundValue(value)}
                  size="small"
                  autoFocus
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {currentGame.rounds.length + 1}.
                      </InputAdornment>
                    )
                  }}
                ></TextField>
              ) : (
                  <Box color="#fafafa">.</Box>
                )}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                size="small"
                disabled={showAddRoundForm && addRoundValue.length === 0}
                color={addRoundValue.length > 0 ? "primary" : "default"}
                onClick={() => {
                  if (showAddRoundForm && addRoundValue.length > 0) {
                    addRound({
                      variables: {
                        object: {
                          game_id: currentGame.id,
                          value: lowerFirst(addRoundValue),
                          order_sequence: currentGame.rounds.length
                        }
                      }
                    })
                    setShowAddRoundForm(false)
                    setAddRoundValue("")
                  } else {
                    setShowAddRoundForm(true)
                  }
                }}
              >
                <AddCircleIcon></AddCircleIcon>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </>
      </RoundSettingsList>
    </div>
  )
}

export default ControllableRoundSettings
