const routes = {
  root: "/",
  game: {
    root: "/game/:joinCode/",
    lobby: "/game/:joinCode/lobby",
    cardSubmission: "/game/:joinCode/cards",
    teamAssignment: "/game/:joinCode/teams"
  }
}

export default routes
