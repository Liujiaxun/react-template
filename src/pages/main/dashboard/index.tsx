import React from "react"
import { AuthRoute } from "../../../components/auth"
import Dashboard from "./dashboard"

import RoutePath from "src/router"

const R = () => {
  return [<AuthRoute key={RoutePath.INDEX} component={Dashboard} access={1} />]
}

export default R
