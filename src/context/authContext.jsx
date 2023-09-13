import { createContext} from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

const AuthContextComponent = ({ children })=>{
  const navigate = useNavigate()
  const [user, setUser] = useState({})
  const [logged, setLogged] = useState(false)

  const handleLogin = ( userLogged ) => {
    console.log(userLogged)
    setUser(userLogged)
    setLogged(true)
  }
  
  const handleLogOut = () => {  
    console.log(user)
    console.log(logged)
    setUser({})
    setLogged(false)
    navigate("/login")
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