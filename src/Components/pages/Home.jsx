//import { Link } from "react-router-dom";
import React from "react";
import Nav from "../pageComponents/Nav";
import "../styles/Home.css";
import Footer from "../pageComponents/Footer";
import imgPrincipal from '/img-principal.png'; // Cambié la ruta de la imagen

export default function Home() {
    return (
        <div className="home-container">
            <Nav />
            <div className="img-container">
                <img src={imgPrincipal} alt="imgPrincipal" />
                <div className="text-overlay">
                    <h1>¡Te damos la biencenida a Smart Resources!</h1>
                    <p>Tu viaje comienza aquí</p>
                </div>
            </div>
            <div>
                <p>Estamos encantados de que estés considerando unirte a nuestro equipo en Smart Resources! Nuestro proceso de incorporación está diseñado para brindarte una experiencia sin problemas mientras te preparas para un emocionante viaje en tu nueva carrera con nosotros.</p>
                <h3>Beneficios de trabajar con nosotros</h3>
                <div className="cards-container">
                    <div className="card">

                        <div className="card-icon">
                            <i className="fa fa-icono"></i>
                        </div>

                        <h2>Card 1</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className="card">

                        <div className="card-icon">
                            <i className="fa fa-icono"></i>
                        </div>

                        <h2>Card 2</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className="card">

                        <div className="card-icon">
                            <i className="fa fa-icono"></i>
                        </div>

                        <h2>Card 3</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>


            <div className="container-azul">
                <div className="content-azul">
                    <div className="left-side-azul">
                        <h2 className="h2-azul">Título</h2>
                        <p className="p-azul">Texto descriptivo sobre el contenido de la tarjeta.</p>
                        <button>Botón</button>
                    </div>
                    <div className="right-side-azul">
                        <img className="img-azul" src="ruta-de-tu-imagen.jpg" alt="Imagen" />
                    </div>
                </div>
            </div>

            <div className="container-manos">
                <div className="content-manos">
                    <div className="left-side-azul">
                        <h2 className="h2-manos">Título</h2>
                        <img className="img-azul" src="ruta-de-tu-imagen.jpg" alt="Imagen" />
                    </div>
                </div>
            </div>


            <div className="cards-container">
                    <div className="card">

                        <div className="card-icon">
                            <i className="fa fa-icono"></i>
                        </div>

                        <h2>Card 1</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className="card">

                        <div className="card-icon">
                            <i className="fa fa-icono"></i>
                        </div>

                        <h2>Card 2</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className="card">

                        <div className="card-icon">
                            <i className="fa fa-icono"></i>
                        </div>

                        <h2>Card 3</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div className="background-image">
                {/* Imagen a la izquierda */}
                {/* <img src={imgIzquierda} alt="Imagen Izquierda" className="left-image" /> */}
                {/* Texto a la derecha */}
                <div className="right-text">
                    <h1>Texto a la derecha</h1>
                    <p>Aquí puedes colocar tu texto.</p>
                </div>
            </div>



            {/* <Footer /> */}
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