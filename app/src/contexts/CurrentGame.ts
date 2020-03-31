import { CurrentGameSubscription, GameStateEnum } from "generated/graphql"
import { createContext } from "react"

export type CurrentGameContextType = CurrentGameSubscription["games"][0]

export const CurrentGameContext = createContext<CurrentGameContextType>({
  id: -1,
  state: GameStateEnum.Lobby,
  cards_aggregate: {},
  players_aggregate: {}
})
