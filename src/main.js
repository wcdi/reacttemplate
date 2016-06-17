import * as React from "react"
import { render } from "react-dom"
import { Router, Route, browserHistory } from "react-router"
import { MainView } from "components/MainView"

render(
    <Router history={browserHistory}>
      <Route path="/" component={MainView} />
    </Router>,
    document.querySelector(".container")
)
