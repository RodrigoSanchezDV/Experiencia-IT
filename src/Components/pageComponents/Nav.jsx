import '../styles/Nav.css'

export default function Nav() {
    return (
        <nav className="navbar">
        <div className="navbar-left">
          <a href="#" className="logo">Logo</a>
        </div>
        <div className="navbar-right">
          <a href="#" className="nav-item">Item 1</a>
          <a href="#" className="nav-item">Item 2</a>
          <a href="#" className="nav-item">Item 3</a>
          <div className="mobile-menu">
            <div className="mobile-icon"></div>
          </div>
        </div>
        </nav>
    )
}