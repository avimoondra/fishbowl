const routes = {
  root: "/",
  game: {
    root: "/game/:joinCode/",
    lobby: "/game/:joinCode/lobby",
    teamAssignment: "/game/:joinCode/teams"
  }
}

export default routes
