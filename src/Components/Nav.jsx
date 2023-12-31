import { useContext } from "react";
import { Link } from "react-router-dom";
import { apiService } from "../API/service";
import { AuthContext } from "../context/authContext.jsx"
import "../styles/Nav.css";

export default function Nav({setSideMenu:{setSideMenu, sideMenu}}) {

  const { handleLogOut, user, logged } = useContext(AuthContext);
  const logOut = async () => {
    const res = await apiService.onLogOut({id:user.id});
    if (res) {
      handleLogOut()
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="logo header" />
      </div>
      <div className="navbar-right">
        <Link to="/" className="nav-item">
          HOME
        </Link>
        <Link href="#" className="nav-item">
          Sobre nosotros
        </Link>
        <Link href="#" className="nav-item">
          Buscar Empleo
        </Link>
        {
          logged == false? <Link to="/check" className="nav-item">Ingresar</Link> : ""
        }
        {
          user?.rol == "reclutador"? <Link to={`/recruiter-profile/${user.user_name}`} className="nav-item">mi perfil de reclutador</Link> : ""
        }
        {
          logged == false? <Link to="/login" className="nav-item">login</Link> : ""
        }
        {
          logged == true? <button type="button"className="nav-item"onClick={ logOut }> Cerrar sesion </button> : ""
        }
        
        <div className="menu-hamburguesa" onClick={() => setSideMenu(!sideMenu)}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="mobile-menu">
          <div className="mobile-icon"></div>
        </div>
      </div>
    </nav>
  );
}
