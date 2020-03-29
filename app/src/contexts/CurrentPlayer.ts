import { createContext } from "react"

const uuid_v4 = require("uuid/v4")

export const playerUuid = () => {
  const localStorageKey = "user.uuid"
  if (localStorage.getItem(localStorageKey)) {
    return localStorage.getItem(localStorageKey)
  } else {
    const uuid: string = uuid_v4()
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
