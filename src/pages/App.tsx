import React from "react"
import { Router, Route, Switch } from "react-router-dom"

import Login from "./login"

import routePath from "src/router"

import history from "src/utils/history"
import Entrance from "src/components/entrance"
import ErrorPage from "src/components/errorpage"

import "./App.css"

function App() {
  return (
    <div className="project">
      <div className="content">
        <Router history={history}>
          <Switch>
            <Route path={routePath.LOGIN} component={Login} />
            <Route path="/" component={Entrance} />
            <Route
              component={(props: any) => <ErrorPage code={404} {...props} />}
            />
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
