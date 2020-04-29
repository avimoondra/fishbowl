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
                endTurn({
                  variables: {
                    currentTurnId: props.activeTurn.id,
                    completedCardIds: [],
                    endedAt: timestamptzNow(),
                    gameId: currentGame.id,
                    nextTurnplayerId: nextPlayerActiveTeam.id
                  }
                })
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
                endTurn({
                  variables: {
                    currentTurnId: props.activeTurn.id,
                    completedCardIds: [],
                    endedAt: timestamptzNow(),
                    gameId: currentGame.id,
                    nextTurnplayerId: nextPlayerNextTeam.id
                  }
                })
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
