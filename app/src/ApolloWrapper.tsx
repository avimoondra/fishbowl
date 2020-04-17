import { ApolloProvider } from "@apollo/react-hooks"
import { InMemoryCache } from "apollo-cache-inmemory"
import ApolloClient from "apollo-client"
import { split } from "apollo-link"
import { HttpLink } from "apollo-link-http"
import { WebSocketLink } from "apollo-link-ws"
import { getMainDefinition } from "apollo-utilities"
import {
  AuthRole,
  CurrentAuthContext,
  CurrentAuthContextType
} from "contexts/CurrentAuth"
import * as React from "react"

const createApolloClient = (jwtToken: CurrentAuthContextType["jwtToken"]) => {
  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_FISHBOWL_GRAPHQL_ENDPOINT,
    credentials: "include",
    headers: jwtToken
      ? {
          Authorization: `Bearer ${jwtToken}`,
          "X-Hasura-Role": AuthRole.Player
        }
      : undefined
  })

  const wsLink = new WebSocketLink({
    uri: process.env.REACT_APP_FISHBOWL_WS_GRAPHQL_ENDPOINT || "",
    options: {
      lazy: true,
      reconnect: true,
      connectionParams: {
        headers: jwtToken
          ? {
              Authorization: `Bearer ${jwtToken}`,
              "X-Hasura-Role": AuthRole.Player
            }
          : undefined
      }
    }
  })

  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      )
    },
    wsLink,
    httpLink
  )

  return new ApolloClient({
    link: link,
    cache: new InMemoryCache()
  })
}

function ApolloWrapper(props: { children: React.ReactNode }) {
  const currentAuth = React.useContext(CurrentAuthContext)
  const client = createApolloClient(currentAuth.jwtToken)
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}

export default ApolloWrapper
