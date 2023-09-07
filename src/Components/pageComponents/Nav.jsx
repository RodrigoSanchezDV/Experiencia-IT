import '../styles/Nav.css'

export default function Nav() {
    return (
        <nav className="navbar">
        <div className="navbar-left">
        <img src='/logo.png' alt="logo header"/>
          </div>
        <div className="navbar-right">
          <a href="#" className="nav-item">Sobre nosotros</a>
        
          <a href="#" className="nav-item">Buscar Empleo</a>
          <a href="/check" className="nav-item">Ingresar</a>
          <div className="mobile-menu">
            <div className="mobile-icon"></div>
          </div>
        </div>
        </nav>
    )
}