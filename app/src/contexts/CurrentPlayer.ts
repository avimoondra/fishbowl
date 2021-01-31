import { CurrentPlayerQuery } from "generated/graphql"
import { createContext } from "react"
import { v4 as uuidv4 } from "uuid"

const localStorageKey = "player.client_uuid"

export const clientUuid = (): string => {
  const value = localStorage.getItem(localStorageKey)
  if (value !== null) {
    return value
  } else {
    const uuid: string = uuidv4()
    localStorage.setItem(localStorageKey, uuid)
    return uuid
  }
}

export const setClientUuid = (uuid: string) => {
  localStorage.setItem(localStorageKey, uuid)
}

export enum PlayerRole {
  Participant = 0,
  Host,
}

export type CurrentPlayerContextType = CurrentPlayerQuery["players"][0] & {
  role: PlayerRole
  serverTimeOffset: number
}

export const CurrentPlayerContext = createContext<CurrentPlayerContextType>({
  id: "",
  role: PlayerRole.Participant,
  serverTimeOffset: 0,
  game: {
    id: "",
  },
})
