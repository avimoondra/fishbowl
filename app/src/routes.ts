import { generatePath } from "react-router-dom"

const routes = {
  root: "/",
  game: {
    lobby: "/game/:joinCode/lobby"
  }
}

export default routes
