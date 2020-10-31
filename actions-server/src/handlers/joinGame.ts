import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import { graphQLClient } from "../graphQLClient"

// Request Handler
const handler = async (req: Request, res: Response) => {
  if (!process.env.HASURA_GRAPHQL_JWT_SECRET) {
    return res.status(500)
  }

  const client = graphQLClient()

  // get request input
  const { gameId, clientUuid } = req.body.input

  // execute the Hasura operation(s)
  let playerId
  let hostExists = true
  try {
    const { data, errors } = await client.LookupPlayerForGame({
      gameId,
      clientUuid,
    })
    if (data?.players[0]) {
      // already joined game
      playerId = data.players[0].id
      console.log(
        `Player (id: ${playerId}, client_uuid: ${clientUuid}) has already joined game (id: ${gameId})`
      )
      hostExists = Boolean(data.players[0].game.host_id)
    } else {
      // new player for game
      try {
        const { data: data_insert, errors } = await client.InsertPlayerForGame({
          gameId,
          clientUuid,
        })
        if (data_insert?.insert_players_one) {
          playerId = data_insert.insert_players_one.id
          hostExists = Boolean(data_insert.insert_players_one.game.host_id)
        }
        console.log(
          `Player (id: ${playerId}, client_uuid: ${clientUuid}) joined game (id: ${gameId})`
        )
      } catch (e) {
        console.log(
          `Player (id: ${playerId}, client_uuid: ${clientUuid}) failed to joined game (id: ${gameId});`
        )
        console.log(e)
        return res.status(400).json({ success: false, errors })
      }
    }

    if (!playerId || errors) {
      return res.status(500).json({ success: false, errors })
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

    if (!hostExists) {
      const { errors } = await graphQLClient({ jwt: token }).BecomeHost({
        gameId,
        playerId,
      })
      if (errors) {
        console.log(
          `Player (id: ${playerId}, client_uuid: ${clientUuid}) in game (id: ${gameId}) failed to become the HOST; ${errors.join(
            ","
          )}`
        )
      } else {
        console.log(
          `Player (id: ${playerId}, client_uuid: ${clientUuid}) in game (id: ${gameId}) became the HOST`
        )
      }
    }

    console.log(
      `Player (id: ${playerId}, client_uuid: ${clientUuid}) in game (id: ${gameId}) was issued a token`
    )
    return res.status(200).json({
      id: playerId.toString(),
      jwt_token: token,
    })
  } catch (e) {
    console.log(e)
    return res.status(400)
  }
}

module.exports = handler
