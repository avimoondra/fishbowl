import { createContext } from "react"

export enum AuthRole {
  Anonymous = "anonymous",
  Player = "player",
}

export const AuthStorageKey = "player.jwtToken"

export type CurrentAuthContextType = {
  jwtToken: string | null
  setJwtToken: (jwtToken: string | null) => void
}

export const CurrentAuthContext = createContext<CurrentAuthContextType>({
  jwtToken: null,
  setJwtToken: () => {},
})
