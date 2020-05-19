import { Request, Response } from "express"
import { DocumentNode } from "graphql"
import jwt from "jsonwebtoken"
import fetch from "node-fetch"
import {
  InsertPlayerForGameDocument,
  InsertPlayerForGameMutationVariables,
  LookupPlayerForGameDocument,
  LookupPlayerForGameQueryVariables,
} from "../../../app/src/generated/graphql"

// execute the parent operation in Hasura
const execute = async (query: DocumentNode, variables: object) => {
  const fetchResponse = await fetch(process.env.HASURA_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  })
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
  const { data: lookupData, errors } = await execute(
    LookupPlayerForGameDocument,
    {
      gameId,
      clientUuid,
    } as LookupPlayerForGameQueryVariables
  )
  if (errors) {
    return res.status(400).json(errors[0])
  }
  if (lookupData.players[0]) {
    // already joined game
    playerId = lookupData.players[0].id
  } else {
    // new player for game
    const { data: insertData, errors } = await execute(
      InsertPlayerForGameDocument,
      {
        gameId,
        clientUuid,
      } as InsertPlayerForGameMutationVariables
    )
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

  const token = jwt.sign(tokenContents, process.env.HASURA_GRAPHQL_JWT_SECRET)

  return res.json({
    id: playerId.toString(),
    jwt_token: token,
  })
}

module.exports = handler
