import * as React from "react"
import ApolloClient from "apollo-client"
import { split } from "apollo-link"
import { getMainDefinition } from "apollo-utilities"
import { InMemoryCache } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"
import { WebSocketLink } from "apollo-link-ws"
import { ApolloProvider } from "@apollo/react-hooks"

const GRAPHQL_ENDPOINT = "http://localhost:8080/v1/graphql"
const WS_GRAPHQL_ENDPOINT = "ws://localhost:8080/v1/graphql"

const createApolloClient = () => {
  const httpLink = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
    credentials: "include"
  })

  const wsLink = new WebSocketLink({
    uri: WS_GRAPHQL_ENDPOINT,
    options: {
      lazy: true,
      reconnect: true
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
  const client = createApolloClient()
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}

export default ApolloWrapper
