import { useState, useEffect } from "react"

function useIsLogin() {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  useEffect(() => {
    if (window.localStorage.getItem("AdminToken")) {
      setIsLogin(true)
    }
  }, [])
  return isLogin
}

export default useIsLogin
