import {
  CurrentGameSubscription,
  GameCardPlayStyleEnum,
  GameStateEnum,
} from "generated/graphql"
import { createContext } from "react"

export type CurrentGameContextType = CurrentGameSubscription["games"][0]

export const CurrentGameContext = createContext<CurrentGameContextType>({
  id: "",
  state: GameStateEnum.Lobby,
  rounds: [],
  cards: [],
  players: [],
  turns: [],
  allow_card_skips: true,
  screen_cards: false,
  card_play_style: GameCardPlayStyleEnum.PlayersSubmitWords,
})
