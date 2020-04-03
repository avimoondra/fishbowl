import * as React from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom"
import routes from "./routes"
import Home from "pages/Home"
import GameRoutes from "components/GameRoutes"
import { createMuiTheme } from "@material-ui/core"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.root} component={Home} />
        <Route
          path={routes.game.root}
          render={({ match }) => {
            return (
              <GameRoutes
                joinCode={match.params.joinCode.toUpperCase()}
              ></GameRoutes>
            )
          }}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App
