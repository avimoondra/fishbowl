import * as React from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom"
import routes from "./routes"
import "App.css"
import Home from "pages/Home"
import Game from "components/Game"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.root} component={Home} />
        <Route
          path={routes.game.root}
          render={({ match }) => {
            return <Game joinCode={match.params.joinCode}></Game>
          }}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App
