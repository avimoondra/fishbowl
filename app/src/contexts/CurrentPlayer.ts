import { createContext } from "react"
import { v4 as uuidv4 } from "uuid"

export const playerUuid = () => {
  const localStorageKey = "user.uuid"
  if (localStorage.getItem(localStorageKey)) {
    return localStorage.getItem(localStorageKey)
  } else {
    const uuid: string = uuidv4()
    localStorage.setItem(localStorageKey, uuid)
    return uuid
  }
}

export enum PlayerRole {
  Participant = 0,
  Host
}

export type CurrentPlayerContextType = {
  id: number
  uuid: string
  role: PlayerRole
  gameId: number
  hostId: number
}

export const CurrentPlayerContext = createContext<CurrentPlayerContextType>({
  id: 0,
  uuid: "",
  role: PlayerRole.Participant,
  gameId: 0,
  hostId: 0
})
