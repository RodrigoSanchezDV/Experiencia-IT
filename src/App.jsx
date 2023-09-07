import { Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home.jsx';
import Login from './Components/pages/Login.jsx';
import Register from './Components/pages/Register.jsx';
import PasswordRecovery from './Components/pages/PasswordRecovery.jsx';
import EmployeeList from './Components/pages/EmployeeList.jsx';
import Client from './Components/pages/Client.jsx';
import NewClient from './Components/pages/NewClient.jsx';
import NewAccount from './Components/pages/NewAccount.jsx';
import CreateAccount from './Components/pages/CreateAccount.jsx';
import CreateAccountPage2 from './Components/pages/CreateAccountPage2.jsx';
import CreateAccountPage3 from './Components/pages/CreateAccountPage3.jsx';
import Check from './Components/pages/Check.jsx';

const App = () => (
  <Routes>

    <Route path="/" element={<Home/>} />

    <Route path="/login" element={<Login/>} />

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
