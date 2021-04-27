import React from "react"
import RoutePath from "src/router"
import { AuthRoute } from "../../../components/auth"

const r = () => {
  return [
    <AuthRoute
      key={RoutePath.PRODUCT}
      component={() => <div>product</div>}
      path={RoutePath.PRODUCT}
      access={1}
    />,
  ]
}

export default r
