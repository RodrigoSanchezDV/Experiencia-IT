import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import PasswordRecovery from './pages/PasswordRecovery.jsx';
import EmployeeList from './pages/EmployeeList.jsx';
import Client from './pages/Client.jsx';
import NewClient from './pages/NewClient.jsx';
import NewAccount from './pages/NewAccount.jsx';
import CreateAccount from './pages/CreateAccount.jsx';
import CreateAccountPage2 from './pages/CreateAccountPage2.jsx';
import CreateAccountPage3 from './pages/CreateAccountPage3.jsx';
import Check from './pages/Check.jsx';
import PerfilRecruiter from './pages/PerfilRecruiter.jsx';
const App = () => (
  <Routes>

    <Route path="/" element={<Home/>} />

    <Route path="/login" element={<Login/>} />

    <Route path="/perfilrecruiter" element={<PerfilRecruiter/>} />

    <Route path="/recuperar-contrasena" element={<PasswordRecovery/>} />

    <Route path="/register" element={<Register/>} />

    <Route path="/check" element={<Check/>} />

    <Route path="/employeelist" element={<EmployeeList/>} />
   
    <Route path="/client" element={<Client/>} />
   
    <Route path="/newclient" element={<NewClient/>} />

    <Route path="/newaccount" element={<NewAccount/>} />

    <Route path="/createaccount" element={<CreateAccount/>} />

    <Route path="/createaccountpage2" element={<CreateAccountPage2/>} />
    
    <Route path="/createaccountpage3" element={<CreateAccountPage3/>} />
  </Routes>
);

export default App;
