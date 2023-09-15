import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import PasswordRecovery from "../pages/PasswordRecovery.jsx";
import EmployeeList from "../pages/EmployeeList.jsx";
import Client from "../pages/Client.jsx";
import NewClient from "../pages/NewClient.jsx";
import NewAccount from "../pages/NewAccount.jsx";
import CreateAccount from "../pages/CreateAccount.jsx";
import CreateAccountPage2 from "../pages/CreateAccountPage2.jsx";
import CreateAccountPage3 from "../pages/CreateAccountPage3.jsx";
import Check from "../pages/Check.jsx";
import PerfilRecruiter from "../pages/PerfilRecruiter.jsx";

/* AUTORIZACIONES */
import RouteProtector from "./routeProtector/RouteProtector.jsx";
/* -------------- */
const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />

    <Route path="/recuperar-contrasena" element={<PasswordRecovery />} />



    <Route path="/employeelist" element={<EmployeeList />} />

    <Route path="/client" element={<Client />} />  {/* Lista de clientes */}

    <Route path="/newclient" element={<NewClient />} />  {/* Form para cargar nuevo cliente */}

    <Route path="/newaccount" element={<NewAccount />} /> {/* Registro de nuevos talentos (usa los "createaccount") */}

    <Route path="/createaccount" element={<CreateAccount />} />

    <Route path="/createaccountpage2" element={<CreateAccountPage2 />} />

    <Route path="/createaccountpage3" element={<CreateAccountPage3 />} />


    {/* SI ESTAS LOGUEADO NO PODES INICIAR EL PROCESO DE REGISTRO */}
    <Route element={<RouteProtector redirect="/" ruta="/check"/>}>
      <Route path="/check" element={<Check />} />
    </Route>

    {/* SI ESTAS LOGUEADO NO PODES IR A REGISTRARTE */}
    <Route element={<RouteProtector ruta="/register" redirect="/" />}>
      <Route path="/register" element={<Register />} /> 
    </Route>

    {/* RUTA PROTEGIDA SOLO PARA RECLUTADORES */}
    <Route element={<RouteProtector rol="reclutador" ruta="/recruiter-profile" redirect="/" />}>
      <Route path="/recruiter-profile" element={<PerfilRecruiter />} />
    </Route>

    {/* SI HAY ALGUIEN LOGUEADO  NO PUEDE VOLVER A LOGUEARSE */}
    <Route element={<RouteProtector redirect="/" ruta="/login"/>}>
      <Route path="/login" element={<Login />} />
    </Route>

  </Routes>
);

export default Router;
