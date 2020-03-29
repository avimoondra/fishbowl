import * as React from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom"
import routes from "./routes"
import Welcome from "./pages/Home"
import Lobby from "pages/Lobby"
import { CurrentGameContext } from "contexts/CurrentGame"
import "App.css"

function App() {
  const [gameId, setGameId] = React.useState<string | null>(null)
  const [hostId, setHostId] = React.useState<number | null>(null)

  return (
    <BrowserRouter>
      <CurrentGameContext.Provider
        value={{
          id: gameId,
          updateId: (id: string) => setGameId(id),
          hostId: hostId,
          updateHostId: (id: number) => setHostId(id)
        }}
      >
        <Switch>
          <Route exact path={routes.root} component={Welcome} />
          <Route exact path={routes.game.lobby} component={Lobby} />
        </Switch>
      </CurrentGameContext.Provider>
    </BrowserRouter>
  )
}

export default App
