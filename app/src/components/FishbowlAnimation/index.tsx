import * as React from "react"
import Fish from "./fish.png"
import "./style.css"

// credit: https://www.youtube.com/watch?v=a2PXv0suX6I

function Fishbowl() {
  return (
    <div className="fishbowl-container">
      <div className="bowl">
        <div className="bowlTop"></div>
        <div className="water">
          <div className="waterTop"></div>
          <img src={Fish} className="fish" alt=""></img>
        </div>
      </div>
      <div className="shadow"></div>
    </div>
  )
}

export default Fishbowl
