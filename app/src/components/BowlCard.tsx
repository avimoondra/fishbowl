import { Box, Card, styled } from "@material-ui/core"
import * as React from "react"

function BowlCard(props: { children: React.ReactNode }) {
  return (
    <StyledCard>
      <Box display="flex" justifyContent="center" p={4} alignContent="center">
        {props.children}
      </Box>
    </StyledCard>
  )
}

const StyledCard = styled(Card)({
  minHeight: 150,
  maxWidth: 300,
  width: "100%",
  margin: "auto"
})

export default BowlCard
