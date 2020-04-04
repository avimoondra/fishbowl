import * as React from "react"
import { CurrentGameContext } from "contexts/CurrentGame"
import { Redirect, generatePath } from "react-router-dom"
import { last, sample } from "lodash"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import routes from "routes"
import {
  CurrentGameSubscription,
  useEndCurrentTurnAndStartNextTurnMutation,
  useStartTurnMutation,
  useUpdateGameStateMutation,
  GameStateEnum
} from "generated/graphql"
import {
  nextPlayer,
  drawableCards,
  drawableCardsWithoutCompletedCardsInActiveTurn
} from "pages/Play/turn"
import { Button, Card, Typography } from "@material-ui/core"
import { timestamptzNow } from "pages/Play/time"
import BowlCard from "components/BowlCard"
import PlayerChip from "components/PlayerChip"

type ContentProps = {
  activePlayer: CurrentGameSubscription["games"][0]["players"][0]
}

function ActivePlayerContent(
  props: ContentProps & {
    turn: CurrentGameSubscription["games"][0]["turns"][0]
  }
) {
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const [startTurn] = useStartTurnMutation()
  const [endTurn] = useEndCurrentTurnAndStartNextTurnMutation()
  const cardsInBowl = drawableCards(currentGame.turns, currentGame.cards)
  const [activeCard, setActiveCard] = React.useState<
    CurrentGameSubscription["games"][0]["cards"][0] | null
  >(null)
  const [
    completedCardIdsInActiveTurn,
    setCompletedCardIdsInActiveTurn
  ] = React.useState<Array<number>>([])
  const [turnStarted, setTurnStarted] = React.useState(false)

  const cardsInBowlWithoutCompleted = drawableCardsWithoutCompletedCardsInActiveTurn(
    cardsInBowl,
    completedCardIdsInActiveTurn
  )

  return (
    <>
      <div>It's your turn!! Look alive.</div>
      {activeCard && (
        <BowlCard>
          <Typography variant="h5">{activeCard.word}</Typography>
        </BowlCard>
      )}
      {!turnStarted && (
        <Button
          onClick={async () => {
            await startTurn({
              variables: {
                currentTurnId: props.turn.id,
                startedAt: timestamptzNow()
              }
            })
            setTurnStarted(true)
            setActiveCard(sample(cardsInBowlWithoutCompleted) || null)
          }}
        >
          Start Turn
        </Button>
      )}
      {turnStarted && (
        <Button
          onClick={async () => {
            if (activeCard?.id) {
              const completed = completedCardIdsInActiveTurn.concat(
                activeCard.id
              )
              const nextSet = drawableCardsWithoutCompletedCardsInActiveTurn(
                cardsInBowl,
                completed
              )
              if (nextSet.length === 0) {
                await endTurn({
                  variables: {
                    currentTurnId: props.turn.id,
                    completedCardIds: completed,
                    endedAt: timestamptzNow(),
                    gameId: currentGame.id,
                    nextTurnplayerId: currentPlayer.id,
                    nextTurnSecondsPerTurnOverride: null
                  }
                })
                window.location.reload()
                // setCompletedCardIdsInActiveTurn([])
                // setActiveCard(null)
              } else {
                setCompletedCardIdsInActiveTurn(completed)
                setActiveCard(sample(nextSet) || null)
              }
            }
          }}
        >
          Next Card
        </Button>
      )}
      <Button
        onClick={() => {
          endTurn({
            variables: {
              currentTurnId: props.turn.id,
              completedCardIds: completedCardIdsInActiveTurn,
              endedAt: timestamptzNow(),
              gameId: currentGame.id,
              nextTurnplayerId: nextPlayer(
                props.activePlayer,
                currentGame.players
              ).id
            }
          })
        }}
      >
        End Turn
      </Button>
    </>
  )
}

function ActiveTeamContent(
  props: ContentProps & {
    turn: CurrentGameSubscription["games"][0]["turns"][0]
  }
) {
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)

  if (props.activePlayer.id === currentPlayer.id) {
    return <ActivePlayerContent {...props}></ActivePlayerContent>
  } else {
    return (
      <div>
        {`Your teammate ${props.activePlayer.username} is playing right now. Guess the card!!`}{" "}
        {`${
          nextPlayer(props.activePlayer, currentGame.players).username
        } is next!!`}
      </div>
    )
  }
}

function StandbyTeamContent(props: ContentProps) {
  const currentGame = React.useContext(CurrentGameContext)
  return (
    <div>
      {`${props.activePlayer.username} is playing right now. hold your horses.`}{" "}
      <PlayerChip
        username={
          nextPlayer(props.activePlayer, currentGame.players).username || ""
        }
      ></PlayerChip>
      {` is next!!`}
    </div>
  )
}

function Play() {
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const [updateGameState] = useUpdateGameStateMutation()
  const completedCardIds = currentGame.turns.flatMap(
    turn => turn.completed_card_ids
  )

  console.log("Num completed cards", completedCardIds.length)
  console.log("Target", currentGame.cards.length)

  if (
    completedCardIds.length === 3 * currentGame.cards.length &&
    currentGame.join_code
  ) {
    return (
      <div>
        Game is over - host will end the game!
        {currentPlayer.role === PlayerRole.Host ? (
          <Button
            onClick={() => {
              updateGameState({
                variables: {
                  id: currentGame.id,
                  state: GameStateEnum.Ended
                }
              })
            }}
          >
            {" "}
            End Game
          </Button>
        ) : null}
      </div>
    )
  }

  let banner = null
  if (completedCardIds.length === 0) {
    banner = <div>Round 1. Taboo</div>
  } else if (completedCardIds.length / currentGame.cards.length === 1.0) {
    banner = <div>Round 2. Charades </div>
  } else if (completedCardIds.length / currentGame.cards.length === 2.0) {
    banner = <div>Round 3. Password </div>
  }

  const turn = last(currentGame.turns)
  const activePlayer = currentGame.players.find(
    player => player.id === turn?.player_id
  )

  if (!turn || !activePlayer) {
    return null
  }

  let content = null
  if (activePlayer.team === currentPlayer.team) {
    content = (
      <ActiveTeamContent
        turn={turn}
        activePlayer={activePlayer}
      ></ActiveTeamContent>
    )
  } else {
    content = (
      <StandbyTeamContent activePlayer={activePlayer}></StandbyTeamContent>
    )
  }

  return (
    <>
      {banner}
      {content}
    </>
  )
}

export default Play
