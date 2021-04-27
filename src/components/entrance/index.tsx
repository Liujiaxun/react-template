import React, { useEffect } from "react"
import { Redirect, Route, Switch } from "react-router-dom"

import RoutePath from "src/router"
import { AuthRoute } from "src/components/auth"

import dashboard from "src/pages/main/dashboard"
import product from "src/pages/main/product"

import styles from "./index.module.scss"
import { useIsLogin } from "../../hooks"

function Entrance(props: {}) {
  useEffect(() => {}, [])
  const isLogin = useIsLogin()
  console.log(props)
  return (
    <div className={styles.main}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to={RoutePath.INDEX} />}
        />
        {dashboard()}
        {product()}
        <Route path="*" component={() => <>4045</>} />
      </Switch>
    </div>
  )
}
export default Entrance
