import Routes from "./router/Routes.jsx"
import AuthContextComponent from "../src/context/authContext.jsx";
const App = () => (
  <AuthContextComponent>
    <Routes/>
  </AuthContextComponent>
);

export default App;
