import { createContext } from "react"
import { v4 as uuidv4 } from "uuid"
import { CurrentPlayerQuery } from "generated/graphql"

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

export type CurrentPlayerContextType = CurrentPlayerQuery["players"][0] & {
  role: PlayerRole
}

export const CurrentPlayerContext = createContext<CurrentPlayerContextType>({
  id: -1,
  role: PlayerRole.Participant
})
