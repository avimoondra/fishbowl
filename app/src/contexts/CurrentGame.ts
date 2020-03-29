import { createContext } from "react"

export type CurrentGameContextType = {
  id: string | null
  updateId: (id: string) => void
  hostId: number | null
  updateHostId: (id: number) => void
}

export const CurrentGameContext = createContext<CurrentGameContextType>({
  id: null,
  updateId: (id: string) => {},
  hostId: null,
  updateHostId: (id: number) => {}
})
