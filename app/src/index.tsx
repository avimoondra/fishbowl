import React from "react"
import ReactDOM from "react-dom"
import "index.css"
import * as serviceWorker from "serviceWorker"

import ApolloWrapper from "ApolloWrapper"
import App from "App"
import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloWrapper>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <App></App>
        </CssBaseline>
      </ThemeProvider>
    </ApolloWrapper>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
