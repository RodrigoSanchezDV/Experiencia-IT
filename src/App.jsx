import { Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home.jsx';
import Login from './Components/pages/Login.jsx';
import Register from './Components/pages/Register.jsx';
import PasswordRecovery from './Components/pages/PasswordRecovery.jsx';
import EmployeeList from './Components/pages/EmployeeList.jsx';
import Client from './Components/pages/Client.jsx';
import NewClient from './Components/pages/NewClient.jsx';




const App = () => (
  <Routes>

    <Route path="/" element={<Home/>} />

    <Route path="/login" element={<Login/>} />

    <Route path="/recuperar-contrasena" element={<PasswordRecovery/>} />

    <Route path="/register" element={<Register/>} />

    <Route path="/employeelist" element={<EmployeeList/>} />
    <Route path="/client" element={<Client/>} />
    <Route path="/newclient" element={<NewClient/>} />
  </Routes>
);

export default App;
