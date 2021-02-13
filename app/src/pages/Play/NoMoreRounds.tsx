import { Button, Grid, Typography } from "@material-ui/core"
import { CurrentGameContext } from "contexts/CurrentGame"
import { CurrentPlayerContext, PlayerRole } from "contexts/CurrentPlayer"
import { GameStateEnum, useUpdateGameStateMutation } from "generated/graphql"
import { useTitleStyle } from "index"
import * as React from "react"
import { useTranslation } from "react-i18next"

function NoMoreRounds() {
  const { t } = useTranslation(["play", "end"])
  const currentGame = React.useContext(CurrentGameContext)
  const currentPlayer = React.useContext(CurrentPlayerContext)
  const titleClasses = useTitleStyle()
  const [updateGameState] = useUpdateGameStateMutation()

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h4" className={titleClasses.title}>
          {t("end:title", "Game Over")}
        </Typography>
      </Grid>
      <Grid item>
        {t(
          "endGame.description",
          "Your host will end the game to show some stats!"
        )}
      </Grid>
      {currentPlayer.role === PlayerRole.Host && (
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              updateGameState({
                variables: {
                  id: currentGame.id,
                  state: GameStateEnum.Ended,
                },
              })
            }}
          >
            {t("endGame.button", "End Game")}
          </Button>
        </Grid>
      )}
    </Grid>
  )
}

export default NoMoreRounds
