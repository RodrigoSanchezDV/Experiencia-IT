import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext.jsx";

function RouteProtector({ ruta, redirect }) {
  const { user, logged } = useContext(AuthContext);
  let access = false;
  console.log(user);

  if (ruta == "/login" || ruta == "/register" || ruta == "/check") !logged ? (access = true) : (access = false);
  if (ruta == "/recruiter-profile") user.rol == "reclutador" ? (access = true) : (access = false);

  return access ? <Outlet /> : <Navigate to={redirect} />;
}

export default RouteProtector;
