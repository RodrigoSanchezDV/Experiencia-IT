import Routes from "./router/Routes.jsx"
import AuthContextComponent from "../src/context/authContext.jsx";
import SearchContextComponent from "./context/searchContext.jsx";
const App = () => (
  <AuthContextComponent>
    <SearchContextComponent>
    <Routes/>
    </SearchContextComponent>
  </AuthContextComponent>
);

export default App;
