import { Box, Button, Divider, Grid, Typography } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import PlayerChip from "components/PlayerChip"
import { CurrentGameContext } from "contexts/CurrentGame"
import {
  CurrentGameSubscription,
  useEndCurrentTurnAndStartNextTurnMutation
} from "generated/graphql"
import { useTitleStyle } from "index"
import { timestamptzNow } from "lib/time"
import { nextPlayerForNextTeam, nextPlayerForSameTeam } from "lib/turn"
import * as React from "react"

function HostControls(props: {
  activeTurn: CurrentGameSubscription["games"][0]["turns"][0]
  activePlayer: CurrentGameSubscription["games"][0]["players"][0]
  currentRoundId: number
}) {
  const currentGame = React.useContext(CurrentGameContext)
  const titleClasses = useTitleStyle()
  const [endTurn] = useEndCurrentTurnAndStartNextTurnMutation()

  const nextPlayerActiveTeam = nextPlayerForSameTeam(
    props.activePlayer,
    currentGame.players
  )

  const nextPlayerNextTeam = nextPlayerForNextTeam(
    props.activePlayer,
    currentGame.turns,
    currentGame.players
  )

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h4" className={titleClasses.title}>
          Host Controls
        </Typography>
      </Grid>
      <Grid item>
        <Divider
          variant="middle"
          style={{
            width: 150,
            height: 1,
            backgroundColor: grey[600]
          }}
        ></Divider>
      </Grid>

      <Grid item>
        Someone drop out or lose connection? They can join back in with the same
        browser! Join code: <b>{currentGame.join_code?.toLocaleUpperCase()}</b>
      </Grid>

      <Grid item>
        <Box display="flex" alignItems="center" justifyContent="flex-start">
          <Box display="flex" flex="130px 1 auto" alignItems="center">
            <Button
              variant="outlined"
              onClick={() => {
                if (
                  window.confirm(
                    `Are you sure you want to skip ${props.activePlayer.username} (team ${props.activePlayer.team})? ${nextPlayerActiveTeam.username} from the same team would go instead.`
                  )
                ) {
                  endTurn({
                    variables: {
                      currentTurnId: props.activeTurn.id,
                      completedCardIds: [],
                      endedAt: timestamptzNow(),
                      gameId: currentGame.id,
                      currentTurnScorings: [],
                      nextTurnplayerId: nextPlayerActiveTeam.id,
                      roundId: props.currentRoundId
                    }
                  })
                }
              }}
            >
              Skip player
            </Button>
          </Box>

          <Box ml={2}>
            <PlayerChip
              username={nextPlayerActiveTeam.username || ""}
              team={nextPlayerActiveTeam.team}
            ></PlayerChip>{" "}
            would be next
          </Box>
        </Box>
      </Grid>
      <Grid item>
        <Box display="flex" alignItems="center" justifyContent="flex-start">
          <Box display="flex" flex="130px 1 auto" alignItems="center">
            <Button
              variant="outlined"
              onClick={() => {
                if (
                  window.confirm(
                    `Are you sure you want to skip ${props.activePlayer.username} (team ${props.activePlayer.team})? ${nextPlayerNextTeam.username} from the other team would go next.`
                  )
                ) {
                  endTurn({
                    variables: {
                      currentTurnId: props.activeTurn.id,
                      completedCardIds: [],
                      endedAt: timestamptzNow(),
                      gameId: currentGame.id,
                      currentTurnScorings: [],
                      nextTurnplayerId: nextPlayerNextTeam.id,
                      roundId: props.currentRoundId
                    }
                  })
                }
              }}
            >
              Skip team
            </Button>
          </Box>
          <Box ml={2}>
            <PlayerChip
              username={nextPlayerNextTeam.username || ""}
              team={nextPlayerNextTeam.team}
            ></PlayerChip>{" "}
            would be next
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default HostControls
