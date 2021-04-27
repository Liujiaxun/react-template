import React, { useEffect } from "react"
import { Redirect, Route, Switch } from "react-router-dom"

import RoutePath from "src/router"

import dashboard from "src/pages/main/dashboard"
import product from "src/pages/main/product"

import ErrorPage from "src/components/errorpage"

import styles from "./index.module.scss"
import { useIsLogin } from "src/hooks"

function Entrance(props: {}) {
  useEffect(() => {}, [])
  const isLogin = useIsLogin()
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
        <Route path="*" component={() => <ErrorPage />} />
      </Switch>
    </div>
  )
}
export default Entrance
