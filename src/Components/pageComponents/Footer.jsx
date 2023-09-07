import React from "react";

import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="top-footer">
                <div className="links-cont">
                    <a href="#" >Sobre Nosotros</a>
                    <a href="#" >Buscar Empleo</a>
                    <a href="#" >Ingresar</a>
                </div>

                <div className="footer-icons">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-twitter"></i>
                </div>

                <img src="../../public/logo-footer.png" alt="logo-footer" />
            </div>
            <div className="bottom-footer">
                <p>© Copyright 2023 | Diseño y Desarrollo</p>
            </div>

        </footer>
    );
}
