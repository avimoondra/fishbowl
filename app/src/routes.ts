const routes = {
  root: "/",
  game: {
    root: "/game/:joinCode/",
    lobby: "/game/:joinCode/lobby",
    writeCards: "/game/:joinCode/submit",
    teamAssignment: "/game/:joinCode/teams"
  }
}

export default routes
