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
                        <img></img>
                        <label>Pais</label>
                        <input></input>
                        <label>Correo</label>
                        <input></input>
                        <label>Télefono</label>
                        <input></input>
                        <button>EDITAR PERFIL</button>
                    </div>
                    <div className="small-cards">
                        <div className="small-card">
                            <h3 className="h3-perfilrecruiter">Clientes asignados</h3>
                            <button>VER LISTADO</button>
                        </div>
                        <div className="small-card"> <h3 className="h3-perfilrecruiter">Vacantes asignadas</h3>
                            <button>VER LISTADO</button></div>
                        <div className="small-card"> <h3 className="h3-perfilrecruiter">Lista de postulantes</h3>
                            <button>VER LISTADO</button></div>
                    </div>
                </div>
            </div>
            <Footer2 />
        </div>
    );
}
