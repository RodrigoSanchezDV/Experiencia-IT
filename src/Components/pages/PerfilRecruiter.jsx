import React from "react";
import "../styles/PerfilRecruiter.css";
import Header from "../pageComponents/Header";
import Footer2 from "../pageComponents/Footer2";

export default function PerfilRecruiter() {
    return (
        <div>
            <Header />
            <div className="perfil-container">
                <h1>Perfil recruiter</h1>
                <div className="card-container">
                    <div className="large-card">
                        <div className="top-section">
                            <img src="tu-imagen.jpg" alt="Imagen de perfil" />
                            <div className="info">
                                <p>Nombre: Juan</p>
                                <p>Edad: 30 años</p>
                            </div>
                        </div>
                        <div className="bottom-section">
                            <label>Pais</label>
                            <input type="text" />
                            <label>Correo</label>
                            <input type="email" />
                            <label>Télefono</label>
                            <input type="tel" />
                            <button className="button-section">EDITAR PERFIL</button>
                        </div>
                    </div>
                    <div className="small-cards">
                        <div className="small-card">
                            <h3 className="h3-perfilrecruiter">Clientes asignados</h3>
                            <button>VER LISTADO</button>
                        </div>
                        <div className="small-card">
                            <h3 className="h3-perfilrecruiter">Vacantes asignadas</h3>
                            <button>VER LISTADO</button>
                        </div>
                        <div className="small-card">
                            <h3 className="h3-perfilrecruiter">Lista de postulantes</h3>
                            <button>VER LISTADO</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer2 />
        </div>
    );
}

