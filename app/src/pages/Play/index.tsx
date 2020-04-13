import { Box, Button, Divider, Grid, Typography } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import PlayerChip from "components/PlayerChip"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import {
  GameStateEnum,
  useEndCurrentTurnAndStartNextTurnMutation,
  useUpdateGameStateMutation
} from "generated/graphql"
import { useTitleStyle } from "index"
import { Team, TeamColor } from "lib/team"
import { timestamptzNow } from "lib/time"
import { drawableCards, nextPlayer, nextPlayerForSameTeam } from "lib/turn"
import { filter, last } from "lodash"
import GameRoundInstructionCard, {
  GameRound
} from "pages/Play/GameRoundInstructionCard"
import { OtherTeamConent, YourTeamTurnContent } from "pages/Play/TeamContent"
import TurnContextPanel from "pages/Play/TurnContextPanel"
import YourTurnContent from "pages/Play/YourTurnContent"
import * as React from "react"

function GameOver() {
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const titleClasses = useTitleStyle()
  const [updateGameState] = useUpdateGameStateMutation()

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h4" className={titleClasses.title}>
          Game Over
        </Typography>
      </Grid>
      <Grid item>Your host will end the game to show some stats!</Grid>
      {currentPlayer.role === PlayerRole.Host && (
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              updateGameState({
                variables: {
                  id: currentGame.id,
                  state: GameStateEnum.Ended
                }
              })
            }}
          >
            End Game
          </Button>
        </Grid>
      )}
    </Grid>
  )
}

function Play() {
  const titleClasses = useTitleStyle()
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const [
    hasDismissedInstructionCard,
    setHasDismissedInstructionCard
  ] = React.useState(false)
  const [endTurn] = useEndCurrentTurnAndStartNextTurnMutation()

  const completedCardIds = currentGame.turns.flatMap(
    turn => turn.completed_card_ids
  )

  if (completedCardIds.length === 3 * currentGame.cards.length) {
    return <GameOver></GameOver>
  }

  const activeTurn = last(currentGame.turns)
  const activePlayer = currentGame.players.find(
    player => player.id === activeTurn?.player_id
  )

  if (!activeTurn || !activePlayer) {
    return null
  }

  const yourTurn = activePlayer.id === currentPlayer.id
  const yourTeamTurn = activePlayer.team === currentPlayer.team

  let titleText = null
  if (yourTurn) {
    titleText = "Your Turn"
  } else if (yourTeamTurn) {
    titleText = "You're Guessin'"
  } else {
    titleText = "You're Chillin'"
  }

  let content = null
  if (yourTurn) {
    content = (
      <YourTurnContent
        yourTeamPlayers={filter(
          currentGame.players,
          player => activePlayer.team === player.team
        )}
        cardsInBowl={drawableCards(currentGame.turns, currentGame.cards)}
        activePlayer={activePlayer}
        activeTurn={activeTurn}
      ></YourTurnContent>
    )
  } else if (yourTeamTurn) {
    content = (
      <YourTeamTurnContent
        activePlayer={activePlayer}
        activeTurn={activeTurn}
      ></YourTeamTurnContent>
    )
  } else {
    content = (
      <OtherTeamConent
        activePlayer={activePlayer}
        activeTurn={activeTurn}
      ></OtherTeamConent>
    )
  }

  const numCompletedCards = completedCardIds.length
  const totalNumCards = currentGame.cards.length
  let round
  if (numCompletedCards === 0) {
    round = GameRound.Taboo
  } else if (numCompletedCards / totalNumCards === 1.0) {
    round = GameRound.Charades
  } else if (numCompletedCards / totalNumCards === 2.0) {
    round = GameRound.Password
  }

  const nextPlayerActiveTeam = nextPlayerForSameTeam(
    activePlayer,
    currentGame.players
  )

  const nextPlayerNextTeam = nextPlayer(
    activePlayer,
    currentGame.turns,
    currentGame.players
  )

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h4" className={titleClasses.title}>
          {titleText}
        </Typography>
      </Grid>
      <Grid item>
        <Divider
          variant="middle"
          style={{
            width: 150,
            height: 2,
            backgroundColor:
              currentPlayer.team === Team.Blue
                ? TeamColor[Team.Blue]
                : TeamColor[Team.Red]
          }}
        ></Divider>
      </Grid>
      <Grid item>
        <TurnContextPanel activeTurn={activeTurn}></TurnContextPanel>
      </Grid>
      {round && !hasDismissedInstructionCard && (
        <Grid item>
          <Box mb={1}>
            <GameRoundInstructionCard
              round={round}
              onDismiss={() => {
                setHasDismissedInstructionCard(true)
              }}
            ></GameRoundInstructionCard>
          </Box>
        </Grid>
      )}
      <Grid item>{content}</Grid>

      {currentPlayer.role === PlayerRole.Host && (
        <>
          <Grid item>
            <Typography variant="h4" className={titleClasses.title}>
              Host Controls
            </Typography>
          </Grid>
          <Grid item>
            <Divider
              variant="middle"
              style={{
                width: 150,
                height: 1,
                backgroundColor: grey[500]
              }}
            ></Divider>
          </Grid>

          <Grid item container direction="column" spacing={2}>
            <Grid item>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
              >
                <Box display="flex" flex="130px 1 auto" alignItems="center">
                  <Button
                    variant="outlined"
                    onClick={() => {
                      endTurn({
                        variables: {
                          currentTurnId: activeTurn.id,
                          completedCardIds: [],
                          endedAt: timestamptzNow(),
                          gameId: currentGame.id,
                          nextTurnplayerId: nextPlayerActiveTeam.id
                        }
                      })
                    }}
                  >
                    Skip player
                  </Button>
                </Box>

                <Box ml={2}>
                  <PlayerChip
                    username={nextPlayerActiveTeam.username || ""}
                    team={nextPlayerActiveTeam.team}
                  ></PlayerChip>{" "}
                  would be next
                </Box>
              </Box>
            </Grid>
            <Grid item>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
              >
                <Box display="flex" flex="130px 1 auto" alignItems="center">
                  <Button
                    variant="outlined"
                    onClick={() => {
                      endTurn({
                        variables: {
                          currentTurnId: activeTurn.id,
                          completedCardIds: [],
                          endedAt: timestamptzNow(),
                          gameId: currentGame.id,
                          nextTurnplayerId: nextPlayerNextTeam.id
                        }
                      })
                    }}
                  >
                    Skip team
                  </Button>
                </Box>
                <Box ml={2}>
                  <PlayerChip
                    username={nextPlayerNextTeam.username || ""}
                    team={nextPlayerNextTeam.team}
                  ></PlayerChip>{" "}
                  would be next
                </Box>
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  )
}

export default Play
