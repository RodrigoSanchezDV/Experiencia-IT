//import { Link } from "react-router-dom";
import React from "react";
import Nav from "../Components/Nav";
import "../styles/Home.css";
import Footer from "../Components/Footer";
import imgPrincipal from '/img-principal.png'; // Cambié la ruta de la imagen

export default function Home() {
    return (
        <div className="home-container">
            <Nav />
            <div className="img-container">
                <img src={imgPrincipal} alt="imgPrincipal" />
                <div className="text-overlay">
                    <h1>¡Te damos la bienvenida a Smart Resources!</h1>
                    <p>Tu viaje comienza aquí</p>
                </div>
            </div>
            <div>
                <p className="about-text">Estamos encantados de que estés considerando unirte a nuestro equipo en Smart Resources! Nuestro proceso de incorporación está diseñado para brindarte una experiencia sin problemas mientras te preparas para un emocionante viaje en tu nueva carrera con nosotros.</p>
                <h3>Beneficios de trabajar con nosotros</h3>
                <div className="cards-container">
                    <div className="card">

                        <div className="card-icon">
                            <i className="fa fa-icono"></i>
                        </div>

                        <h2>Crecimiento Profesional</h2>

                        <p>En Smart Resources, te brindamos oportunidades para desarrollar tus habilidades y avanzar en tu carrera.</p>
                    </div>

                    <div className="card">

                        <div className="card-icon">
                            <i className="fa fa-icono"></i>
                        </div>

                        <h2>Innovación</h2>

                        <p>Contribuirás a proyectos emocionantes y desafiantes que fomentan la innovación y la creatividad.</p>
                    </div>

                    <div className="card">

                        <div className="card-icon">
                            <i className="fa fa-icono"></i>
                        </div>

                        <h2>Beneficios Completos</h2>

                        <p>Ofrecemos una amplia gama de beneficios, desde seguro médico hasta programas de desarrollo personal.</p>
                    </div>
                </div>
            </div>


            <div className="container-azul">
                <div className="content-azul">
                    <div className="left-side-azul">
                        <h2 className="h2-azul">¿Listo para comenzar tu viaje con nosotros?</h2>
                        <p className="p-azul">Regístrate ahora y comienza tu proceso de incorporación. Esperamos darte la bienvenida Smart Resources y ser parte de tu crecimiento y éxito.</p>
                        <button className="button-azul">Comenzar el Proceso de Registro</button>
                    </div>
                    <div className="right-side-azul">
                        <img className="img-azul" src="../../../public/img-azul.png" alt="Imagen" />
                    </div>
                </div>
            </div>

            <div className="container-manos">


                <img className="img-manos" src="../../../public/img-manos.png" alt="Imagen" />
                <div className="text-manos">
                    <h2 className="h2-manos">Sobre Nosotros</h2>
                    <p className="p-manos">En Smart Resources, creemos en el poder de la excelencia en la gestión de talento. Somos una plataforma de onboarding dedicada a conectar a empresas con profesionales talentosos y brindar un enfoque completo y efectivo para la incorporación de nuevos miembros a su equipo.</p>
                </div>


            </div>


            <div className="cards-container">
                <div className="card">

                    <div className="card-icon">
                        <i className="fa fa-icono"></i>
                    </div>

                    <h2>Nuestro Equipo</h2>

                    <p>Detrás de Smart Resources, hay un equipo apasionado de profesionales de recursos humanos, desarrolladores de software y expertos en diseño que comparten una visión común: revolucionar la forma en que las empresas abordan la incorporación de nuevos empleados. Nos enorgullece trabajar en estrecha colaboración con nuestros clientes para brindar soluciones que marquen la diferencia.</p>
                </div>

                <div className="card">

                    <div className="card-icon">
                        <i className="fa fa-icono"></i>
                    </div>

                    <h2>Nuestro Compromiso con la Excelencia</h2>

                    <p>En Smart Resources, la excelencia es nuestro estándar. Nos esforzamos por brindar soluciones de onboarding de clase mundial que transformen la forma en que las empresas gestionan su talento. Nuestra plataforma está diseñada para ser intuitiva, eficiente y altamente personalizable para satisfacer sus necesidades únicas.</p>
                </div>

                <div className="card">

                    <div className="card-icon">
                        <i className="fa fa-icono"></i>
                    </div>

                    <h2>Nuestra Misión</h2>

                    <p>Nuestra misión es facilitar la transición de candidatos a colaboradores valiosos y comprometidos. Creemos que cada nuevo empleado es una oportunidad para el crecimiento y el éxito de su empresa. Trabajamos incansablemente para simplificar y optimizar el proceso de incorporación, permitiéndole enfocarse en lo que hace mejor: hacer crecer su negocio.</p>
                </div>
            </div>

            <div className="unase-container">
                {/* Imagen a la izquierda */}
                {/* <img src={imgIzquierda} alt="Imagen Izquierda" className="left-image" /> */}
                {/* Texto a la derecha */}
                <div className="unase-content">
                    <img src="../../../public/logo4.png" alt="" />
                    <div className="unase-text">
                        <h2 className="h2-manos">Únase a Nosotros</h2>
                        <p className="p-manos">Ya sea que sea una empresa que busca simplificar su proceso de selección y onboarding o un talentoso candidato en busca de su próximo desafío profesional, Smart Resources es su socio de confianza. Juntos, podemos crear un futuro laboral más brillante y exitoso.
                            ¡Bienvenido a Smart Resources, donde el talento encuentra su hogar y las empresas encuentran su ventaja competitiva!</p>
                    </div>
                </div>
            </div>



            <Footer />
        </div>
    );
}







{/* <div className="content">
               
<h1>Pagina Principal</h1>
<Link to='/login'>Login</Link>
<br />
<Link to='/register'>Register</Link>
<Link to='/employeelist'>EMPLEADOS</Link>
<Link to='/client'> CLIENTE</Link>
<Link to='/recuperar-contrasena'>RECUPERAR CONTRASEÑA</Link>
</div> */}