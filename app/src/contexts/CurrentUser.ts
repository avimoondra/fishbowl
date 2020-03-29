import { createContext } from "react"
const uuid_v4 = require("uuid/v4")

export const userUuid = () => {
  const localStorageKey = "user.uuid"
  if (localStorage.getItem(localStorageKey)) {
    return localStorage.getItem(localStorageKey)
  } else {
    const uuid: string = uuid_v4()
    localStorage.setItem(localStorageKey, uuid)
    return uuid
  }
}
