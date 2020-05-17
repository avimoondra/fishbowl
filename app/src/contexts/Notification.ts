import { createContext } from "react"

export type NotificationContextType = {
  send: (message: string) => void
}

export const NotificationContext = createContext<NotificationContextType>({
  send: () => {}
})
