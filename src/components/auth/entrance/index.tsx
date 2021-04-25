import React, { useEffect } from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import Menu from "../../../router"

import styles from "./index.module.scss"

function Entrance() {
  useEffect(() => {}, [])
  return (
    <div className={styles.main}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to={Menu.INDEX} />} />
      </Switch>
    </div>
  )
}
export default Entrance
