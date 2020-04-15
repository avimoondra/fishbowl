const fetch = require("node-fetch");
const jwt = require("jsonwebtoken");

const HASURA_OPERATION = `
mutation JoinGame($gameId: uuid!, $clientUuid: uuid!) {
  insert_players_one(
    object: { game_id: $gameId, client_uuid: $clientUuid }
    on_conflict: {
      constraint: players_client_uuid_game_id_key
      update_columns: [client_uuid]
    }
  ) {
    id
    client_uuid
    game_id
  }
}
`;

// execute the parent operation in Hasura
const execute = async (variables) => {
  const fetchResponse = await fetch("http://127.0.0.1:8080/v1/graphql", {
    method: "POST",
    body: JSON.stringify({
      query: HASURA_OPERATION,
      variables,
    }),
  });
  const data = await fetchResponse.json();
  console.log("DEBUG: ", data);
  return data;
};

// Request Handler
const handler = async (req, res) => {
  // get request input
  const { gameId, clientUuid } = req.body.input;

  // run some business logic

  // execute the Hasura operation
  const { data, errors } = await execute({ gameId, clientUuid });

  // if Hasura operation errors, then throw error
  if (errors) {
    return res.status(400).json(errors[0]);
  }

  const tokenContents = {
    sub: data.insert_players_one.id.toString(),
    iat: Date.now() / 1000,
    iss: "https://fishbowl-game.com/",
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": ["player", "anonymous"],
      "x-hasura-user-id": data.insert_players_one.id.toString(),
      "x-hasura-default-role": "player",
      "x-hasura-role": "player",
    },
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
  };

  const token = jwt.sign(tokenContents, process.env.HASURA_GRAPHQL_JWT_SECRET);

  // success
  return res.json({
    ...data.insert_players_one,
    jwt_token: token,
  });
};

module.exports = handler;
