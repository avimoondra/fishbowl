import * as React from "react"
import ApolloClient from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"
import { ApolloProvider } from "@apollo/react-hooks"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import "./App.css"

import routes from "./routes"
import Welcome from "./pages/Welcome"

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "http://localhost:8080/v1/graphql"
    }),
    cache: new InMemoryCache()
  })
}

function App() {
  const client = createApolloClient()
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path={routes.root} component={Welcome} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
