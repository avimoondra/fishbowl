import "cross-fetch/polyfill" // https://github.com/prisma-labs/graphql-request/issues/206
import { GraphQLClient } from "graphql-request"
import { getSdk } from "./generated/graphql"

export function graphQLClient(
  credentials: { jwt?: string; adminSecret?: string } = {},
  hasuraEndpoint = process.env.HASURA_ENDPOINT || ""
) {
  const headers: Record<string, string> = {}
  if (credentials.jwt) {
    headers["Authorization"] = `Bearer ${credentials.jwt}`
  }
  if (credentials.adminSecret) {
    headers["x-hasura-admin-secret"] = credentials.adminSecret
  }

  const client = new GraphQLClient(hasuraEndpoint, {
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
  })
  return getSdk(client)
}
