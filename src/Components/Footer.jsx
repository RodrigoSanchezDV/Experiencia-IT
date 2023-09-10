import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="top-footer">
                <div className="links-cont">
                    <a href="#" >Sobre Nosotros</a>
                    <a href="#" >Buscar Empleo</a>
                    <a href="/check" >Ingresar</a>
                </div>

                <div className="footer-icons">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-twitter"></i>
                </div>

                <img src="../../public/logo-footer.png" alt="logo-footer" />
            </div>
            <div className="bottom-footer">
                <p>© Copyright 2023 | Diseño y Desarrollo</p>
            </div>

        </footer>
    );
}
