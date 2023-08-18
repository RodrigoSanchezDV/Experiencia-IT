import { Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home.jsx';
import Login from './Components/pages/Login.jsx';
import Register from './Components/pages/Register.jsx';

const App = () => (
  <Routes>

    <Route path="/" element={<Home/>} />

    <Route path="/login" element={<Login/>} />

    <Route path="/register" element={<Register/>} />

  </Routes>
);

export default App;
