import GameRoutes from "components/GameRoutes"
import Home from "pages/Home"
import Pending from "pages/Pending"
import * as React from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import routes from "./routes"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.root} component={Home} />
        <Route exact path={routes.game.pending} component={Pending} />
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
        <Route path="*">
          <Redirect to={routes.root}></Redirect>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
