import { useState, useEffect } from "react"

export function useIsLogin() {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  useEffect(() => {
    if (window.localStorage.getItem("AdminToken")) {
      setIsLogin(true)
    }
  }, [])
  return isLogin
}
