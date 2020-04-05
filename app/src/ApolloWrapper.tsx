import { ApolloProvider } from "@apollo/react-hooks"
import { InMemoryCache } from "apollo-cache-inmemory"
import ApolloClient from "apollo-client"
import { split } from "apollo-link"
import { HttpLink } from "apollo-link-http"
import { WebSocketLink } from "apollo-link-ws"
import { getMainDefinition } from "apollo-utilities"
import * as React from "react"

const createApolloClient = () => {
  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_FISHBOWL_GRAPHQL_ENDPOINT,
    credentials: "include",
  })

  const wsLink = new WebSocketLink({
    uri: process.env.REACT_APP_FISHBOWL_WS_GRAPHQL_ENDPOINT || "",
    options: {
      lazy: true,
      reconnect: true,
    },
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
    cache: new InMemoryCache(),
  })
}

function ApolloWrapper(props: { children: React.ReactNode }) {
  const client = createApolloClient()
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}

export default ApolloWrapper
