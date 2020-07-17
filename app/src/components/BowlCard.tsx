import { Box, Card, styled } from "@material-ui/core"
import * as React from "react"

function BowlCard(props: { children: React.ReactNode; padding?: number }) {
  return (
    <StyledCard>
      <Box
        display="flex"
        justifyContent="center"
        p={props.padding || 4}
        alignContent="center"
      >
        {props.children}
      </Box>
    </StyledCard>
  )
}

const StyledCard = styled(Card)({
  minHeight: 150,
  width: 250,
})

export default BowlCard
