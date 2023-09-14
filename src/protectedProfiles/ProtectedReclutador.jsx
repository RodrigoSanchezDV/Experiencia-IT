import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext.jsx"



function ProtectedReclutador() {
  const { user } = useContext(AuthContext);
  console.log(user)
  return ( user?.roll == "recruiter"? <Outlet/> : <Navigate to="/login"/> )

}

export default ProtectedReclutador
