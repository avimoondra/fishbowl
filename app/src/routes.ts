const routes = {
  root: "/",
  game: {
    lobby: "/game/:gameId/lobby",
    createLobbyRoute: (gameId: string) => {
      return routes.game.lobby.replace(":gameId", gameId);
    }
  }
};

export default routes;
