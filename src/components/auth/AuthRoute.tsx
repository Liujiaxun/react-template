import React, { Fragment } from "react"
import { Route } from "react-router-dom"

interface IAuthRoute {
  component: React.FC<any>
  access: number[] | number
  render?: Function
  [key: string]: any
}

function AuthRoute(props: IAuthRoute) {
  const { component: Component, access, render = null, ...rest } = props
  console.log(props, "AuthRoute")
  return (
    <Route
      {...rest}
      render={(props) => {
        if (access) {
          return render ? render(props) : <Component {...props} />
        }
        return <Route component={() => <Fragment>403</Fragment>} />
      }}
    />
  )
}

export default React.memo(AuthRoute)
