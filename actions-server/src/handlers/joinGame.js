const fetch = require("node-fetch")
const jwt = require("jsonwebtoken")

const INSERT_OPERATION = `
mutation InsertPlayerForGame($gameId: uuid!, $clientUuid: uuid!) {
  insert_players_one(
    object: { game_id: $gameId, client_uuid: $clientUuid }
  ) {
    id
  }
}
`

const LOOKUP_OPERATION = `
query LookupPlayerForGame($gameId: uuid!, $clientUuid: uuid!) {
  players(where: {game_id: {_eq: $gameId}, client_uuid: {_eq: $clientUuid}}) {
    id
  }
}
`

// execute the parent operation in Hasura
const execute = async (query, variables) => {
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
const handler = async (req, res) => {
  // get request input
  const { gameId, clientUuid } = req.body.input

  // execute the Hasura operation(s)
  let playerId
  const { data: lookupData, errors } = await execute(LOOKUP_OPERATION, {
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
    const { data: insertData, errors } = await execute(INSERT_OPERATION, {
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

  // if Hasura operation errors, then throw error

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

  // success
  return res.json({
    id: playerId.toString(),
    jwt_token: token,
  })
}

module.exports = handler
