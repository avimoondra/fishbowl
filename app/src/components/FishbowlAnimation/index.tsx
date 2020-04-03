import * as React from "react"
import "./style.css"

// credit: https://www.youtube.com/watch?v=a2PXv0suX6I

function Fishbowl() {
  return (
    <>
      <div className="bowl">
        <div className="water">
          <img src="fish.png" className="fish"></img>
        </div>
      </div>
      <div className="shadow"></div>
    </>
  )
}

export default Fishbowl
