const routes = {
  root: "/",
  game: {
    root: "/game/:joinCode/",
    lobby: "/game/:joinCode/lobby",
    cardSubmission: "/game/:joinCode/cards",
    teamAssignment: "/game/:joinCode/teams",
    play: "/game/:joinCode/play",
    ended: "/game/:joinCode/end"
  }
}

export default routes
