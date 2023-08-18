import { Link } from "react-router-dom";
import './Nav.css'
export default function Nav() {


    return (
        <nav class="navbar">
        <div class="navbar-left">
          <a href="#" class="logo">Logo</a>
        </div>
        <div class="navbar-right">
          <a href="#" class="nav-item">Item 1</a>
          <a href="#" class="nav-item">Item 2</a>
          <a href="#" class="nav-item">Item 3</a>
          <div class="mobile-menu">
            <div class="mobile-icon"></div>
          </div>
        </div>
        </nav>
    )
}