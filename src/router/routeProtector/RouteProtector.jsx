import { useContext } from "react";

import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext.jsx";

function Prueba( {roll, redirect, ruta}) {
  console.log({roll, redirect, ruta});
  const { user, logged } = useContext(AuthContext);
  let access = false;
  
  if (ruta == "/login") {
    if (!logged) {
      access = true;
    }
  }
  if (ruta == "/recruiter-profile") {
    if (user.rol == "reclutador") {
      access = true;
    }
  }
  return access ? <Outlet /> : <Navigate to={redirect}/>
}

export default Prueba;
