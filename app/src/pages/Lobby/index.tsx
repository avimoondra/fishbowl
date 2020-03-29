import * as React from "react"
import { CurrentGameContext } from "contexts/CurrentGame"
import { TextField, Button } from "@material-ui/core"

function Lobby() {
  const currentGame = React.useContext(CurrentGameContext)

  return (
    <div>
      <TextField label="Username" variant="outlined" />
      <TextField label="Letter" variant="outlined" />
      <TextField label="Seconds Per Turn" variant="outlined" />
      <TextField label="Entries Per Player" variant="outlined" />
      <Button variant="contained" color="primary">
        Everyone's Here!
      </Button>
    </div>
  )
}

export default Lobby
