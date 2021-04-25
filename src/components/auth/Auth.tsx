/* * @Author: jiaxun.liu  * @Date: 2021-04-25 10:55:55  * @Last Modified time: 2021-04-25 10:55:55  */
import React from "react"

interface IProps {
  access: number
  children: any
  placeholder?: any
}

function Auth(props: IProps) {
  const { access, children, placeholder = null } = props
  if (access) {
    return children
  }
  return placeholder
}

export default React.memo(Auth)
