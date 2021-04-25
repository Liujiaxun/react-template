import React from "react"
import { Router, Route, Switch } from "react-router-dom"

import Login from "./login"
import route from "src/router"

import history from "src/utils/history"
import Entrance from "../components/auth/entrance"

import "./App.css"

function App() {
  return (
    <div className="project">
      <div className="content">
        <Router history={history}>
          <Switch>
            <Route path={route.LOGIN} component={Login} />
            <Route path="/" component={Entrance} />
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
