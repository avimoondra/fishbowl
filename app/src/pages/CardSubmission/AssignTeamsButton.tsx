import { Button } from "@material-ui/core"
import { CurrentGameContext } from "contexts/CurrentGame"
import {
  GameStateEnum,
  useUpdateAllPlayersMutation,
  useUpdateGameStateMutation,
} from "generated/graphql"
import { teamsWithSequence } from "lib/team"
import * as React from "react"
import { useTranslation } from "react-i18next"

function AssignTeamsButton() {
  const { t } = useTranslation()
  const currentGame = React.useContext(CurrentGameContext)
  const [updateGameState] = useUpdateGameStateMutation()
  const [updateAllPlayers] = useUpdateAllPlayersMutation()

  return (
    <Button
      size="large"
      variant="contained"
      color="primary"
      onClick={async () => {
        const players = teamsWithSequence(currentGame.players)
        await updateAllPlayers({
          variables: {
            gameId: currentGame.id,
            players: players.map(({ id, team, team_sequence }) => ({
              id,
              team,
              team_sequence,
            })),
          },
        })
        updateGameState({
          variables: {
            id: currentGame.id,
            state: GameStateEnum.TeamAssignment,
          },
        })
      }}
    >
      {t("cardSubmission.assignTeamsButton", "Assign Teams")}
    </Button>
  )
}

export default AssignTeamsButton
