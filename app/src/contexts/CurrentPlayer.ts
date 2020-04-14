import { CurrentPlayerQuery } from "generated/graphql"
import { createContext } from "react"
import { v4 as uuidv4 } from "uuid"

export const clientUuid = () => {
  const localStorageKey = "player.client_uuid"
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
  id: "",
  role: PlayerRole.Participant,
  game: {
    id: ""
  }
})
