import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext.jsx"

function ProtectedStandar() {
  const { logged } = useContext(AuthContext);
  return ( !logged? <Outlet/> : <Navigate to="/"/> )
}

export default ProtectedStandar
