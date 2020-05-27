import { Request, Response } from "express"
import { DocumentNode, print as gqlToString } from "graphql"
import jwt from "jsonwebtoken"
import fetch from "node-fetch"
import { InsertPlayerForGame, InsertPlayerForGameMutationVariables, LookupPlayerForGame, LookupPlayerForGameQueryVariables } from "../generated/graphql"

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
  // get request input
  const { gameId, clientUuid } = req.body.input

  // execute the Hasura operation(s)
  let playerId
  const { data: lookupData, errors } = await execute<
    LookupPlayerForGameQueryVariables
  >(LookupPlayerForGame, {
    gameId,
    clientUuid,
  })
  if (errors) {
    return res.status(400).json(errors[0])
  }
  if (lookupData.players[0]) {
    // already joined game
    playerId = lookupData.players[0].id
  } else {
    // new player for game
    const { data: insertData, errors } = await execute<
      InsertPlayerForGameMutationVariables
    >(InsertPlayerForGame, {
      gameId,
      clientUuid,
    })
    if (errors) {
      return res.status(400).json(errors[0])
    }
    playerId = insertData.insert_players_one.id
  }

  if (!playerId) {
    return res.status(500)
  }

  const tokenContents = {
    sub: playerId.toString(),
    iat: Date.now() / 1000,
    iss: "https://fishbowl-game.com/",
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": ["player", "anonymous"],
      "x-hasura-user-id": playerId.toString(),
      "x-hasura-default-role": "player",
      "x-hasura-role": "player",
    },
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
  }

  const token = jwt.sign(
    tokenContents,
    process.env.HASURA_GRAPHQL_JWT_SECRET || "missing secret"
  )

  return res.json({
    id: playerId.toString(),
    jwt_token: token,
  })
}

module.exports = handler
