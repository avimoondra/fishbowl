import * as React from "react"
import { CurrentGameContext } from "contexts/CurrentGame"
import { Redirect } from "react-router-dom"
import { last, sample } from "lodash"
import { CurrentPlayerContext } from "contexts/CurrentPlayer"
import routes from "routes"
import {
  CurrentGameSubscription,
  useEndCurrentTurnAndStartNextTurnMutation
} from "generated/graphql"
import { nextPlayer, drawableCards } from "pages/Play/turn"
import { Button, Card } from "@material-ui/core"
import { timestamptzNow } from "pages/Play/time"

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
  const [endTurn] = useEndCurrentTurnAndStartNextTurnMutation()
  const [
    completedCardIdsInActiveTurn,
    setCompletedCardIdsInActiveTurn
  ] = React.useState<Array<number>>([])
  const cards = drawableCards(
    currentGame.turns,
    currentGame.cards,
    completedCardIdsInActiveTurn
  )
  const [activeCard, setActiveCard] = React.useState(sample(cards))

  return (
    <>
      <div>It's your turn!! Look alive.</div>
      {activeCard && <Card>{activeCard.word}</Card>}
      <Button
        onClick={() => {
          if (!activeCard?.id) {
            return null //TODO maybe referesh the page, bad state?
          }
          if (cards.length === 0) {
            endTurn({
              variables: {
                currentTurnId: props.turn.id,
                completedCardIds: [],
                endedAt: timestamptzNow(),
                gameId: currentGame.id,
                nextTurnplayerId: currentPlayer.id,
                nextTurnSecondsPerTurnOverride: null
              }
            })
          } else {
            const completed = completedCardIdsInActiveTurn.concat(activeCard.id)
            setCompletedCardIdsInActiveTurn(completed)
            setActiveCard(
              sample(
                drawableCards(currentGame.turns, currentGame.cards, completed)
              )
            )
          }
        }}
      >
        Next Card
      </Button>
      <Button
        onClick={() => {
          endTurn({
            variables: {
              currentTurnId: props.turn.id,
              completedCardIds: [],
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
      {`${
        nextPlayer(props.activePlayer, currentGame.players).username
      } is next!!`}
    </div>
  )
}

function Play() {
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)

  const completedCardIds = currentGame.turns.flatMap(
    turn => turn.completed_card_ids
  )
  if (
    completedCardIds.length ===
    (currentGame.num_entries_per_player || 0) * currentGame.cards.length
  ) {
    return <Redirect to={routes.game.ended}></Redirect>
  }

  // banner?

  const turn = last(currentGame.turns)
  const activePlayer = currentGame.players.find(
    player => player.id === turn?.player_id
  )

  if (!turn || !activePlayer) {
    return null
  }

  if (activePlayer.team === currentPlayer.team) {
    return (
      <ActiveTeamContent
        turn={turn}
        activePlayer={activePlayer}
      ></ActiveTeamContent>
    )
  } else {
    return <StandbyTeamContent activePlayer={activePlayer}></StandbyTeamContent>
  }
}

export default Play
