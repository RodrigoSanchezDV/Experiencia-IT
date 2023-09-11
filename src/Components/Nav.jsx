import "../styles/Nav.css";
import { Link, useNavigate } from "react-router-dom";
import { apiService } from "../API/service";
export default function Nav() {
  const navigate = useNavigate()
  const logOut = async () => {
    const resLogOut = await apiService.onLogOut({ id:"PRUEBA" });
    console.log("Log cerrar sesion")
    console.log(resLogOut);
    if (resLogOut) {
      navigate("/login")
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
        <Link href="/check" className="nav-item">
          Ingresar
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
