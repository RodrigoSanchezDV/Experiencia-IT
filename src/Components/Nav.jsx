import { useContext } from "react";
import { Link } from "react-router-dom";
import { apiService } from "../API/service";
import { AuthContext } from "../context/authContext.jsx"
import "../styles/Nav.css";

export default function Nav() {
  const { handleLogOut, user } = useContext(AuthContext);
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
        <Link href="#" className="nav-item">
          Sobre nosotros
        </Link>
        <Link href="#" className="nav-item">
          Buscar Empleo
        </Link>
        <Link to="/check" className="nav-item">
          Ingresar
        </Link>
        <Link to="/recruiter-profile" className="nav-item">
          mi perfil de reclutador
        </Link>
        <Link to="/login" className="nav-item">
          login
        </Link>
        <button
          type="button"
          className="nav-item"
          onClick={ logOut }
        >
          Cerrar sesion
        </button>
        
        <div className="mobile-menu">
          <div className="mobile-icon"></div>
        </div>
      </div>
    </nav>
  );
}
