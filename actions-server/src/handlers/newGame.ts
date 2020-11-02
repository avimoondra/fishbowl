import { Request, Response } from "express"
import { graphQLClient } from "../graphQLClient"

// Request Handler
const handler = async (req: Request, res: Response) => {
  // execute the Hasura operation(s)
  const { data, errors: err1 } = await graphQLClient().StartGame()

  if (!data?.insert_games_one?.id || err1) {
    return res.status(400).json({ errros: err1 })
  }

  const { data: gameData, errors: err2 } = await graphQLClient().GameById({
    id: data.insert_games_one.id,
  })

  const join_code = gameData?.games_by_pk?.join_code

  if (!join_code || err2) {
    return res.status(400).json({ errros: err2 })
  }

  return res.status(200).json({
    join_code,
  })
}

module.exports = handler
