import {
  AuthStorageKey,
  CurrentAuthContext,
  CurrentAuthContextType
} from "contexts/CurrentAuth"
import * as React from "react"

function AuthWrapper(props: { children: React.ReactNode }) {
  const [jwtToken, setJwtToken] = React.useState<
    CurrentAuthContextType["jwtToken"]
  >(
    localStorage.getItem(AuthStorageKey)
      ? localStorage.getItem(AuthStorageKey)
      : null
  )

  return (
    <CurrentAuthContext.Provider
      value={{
        jwtToken: jwtToken,
        setJwtToken: (jwtToken: CurrentAuthContextType["jwtToken"]) => {
          if (jwtToken) {
            localStorage.setItem(AuthStorageKey, jwtToken)
          } else {
            localStorage.removeItem(AuthStorageKey)
          }
          setJwtToken(jwtToken)
        }
      }}
    >
      {props.children}
    </CurrentAuthContext.Provider>
  )
}

export default AuthWrapper
