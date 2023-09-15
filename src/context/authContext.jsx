import { createContext} from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

const AuthContextComponent = ({ children })=>{
  const navigate = useNavigate()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("userInfo"))||{})
  const [logged, setLogged] = useState(JSON.parse(localStorage.getItem("logged"))||false)

  const handleLogin = ( userLogged ) => {
    setUser(userLogged)
    setLogged(true)
    localStorage.setItem("userInfo", JSON.stringify(userLogged))
    localStorage.setItem("logged", JSON.stringify(true))
    /* navigate("/") */
  }
  
  const handleLogOut = () => {  
    console.log(user)
    console.log(logged)
    setUser({})
    setLogged(false)
    localStorage.setItem("userInfo")
    localStorage.setItem("logged")
    console.log("Se cerro la sesion")
    /* navigate("/login") */
  }
  const data = {
    user,
    logged,
    handleLogin,
    handleLogOut,
  }
  return (
    <AuthContext.Provider value={data}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContextComponent

/* http://localhost:5173/ */