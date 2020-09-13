import { Request, Response } from "express"
import { DocumentNode, print as gqlToString } from "graphql"
import fetch from "node-fetch"
import {
  StartGame,
  StartGameMutationVariables,
  GameById,
  GameByIdQueryVariables,
} from "../generated/graphql"

// execute the parent operation in Hasura
const execute = async <T>(query: DocumentNode, variables: T) => {
  const fetchResponse = await fetch(
    process.env.HASURA_ENDPOINT || "missing endpoint",
    {
      method: "POST",
      body: JSON.stringify({
        query: gqlToString(query),
        variables: variables,
      }),
    }
  )
  const data = await fetchResponse.json()
  console.log("DEBUG: ", data)
  return data
}

// Request Handler
const handler = async (req: Request, res: Response) => {
  // execute the Hasura operation(s)
  const {
    data: {
      insert_games_one: { id },
    },
    errors: err1,
  } = await execute<StartGameMutationVariables>(StartGame, {})
  if (err1) {
    return res.status(400).json(err1[0])
  }

  const {
    data: {
      games_by_pk: { join_code },
    },
    errors: err2,
  } = await execute<GameByIdQueryVariables>(GameById, {
    id,
  })
  if (err2) {
    return res.status(400).json(err2[0])
  }

  return res.json({
    join_code,
  })
}

module.exports = handler
