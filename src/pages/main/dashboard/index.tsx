import { AuthRoute } from "../../../components/auth"
import Dashboard from "./dashboard"

import RoutePath from "src/router"

const R = () => [
  <AuthRoute
    key={RoutePath.INDEX}
    component={Dashboard}
    access={1}
    path={RoutePath.INDEX}
  />,
]

export default R
