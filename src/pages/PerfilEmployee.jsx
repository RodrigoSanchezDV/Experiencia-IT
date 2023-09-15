import React from "react";
import "../styles/PerfilEmployee.css";
import Header from "../Components/Header";
import Footer2 from "../Components/Footer2";

export default function PerfilEmployee() {
    return (
        <div>
            <Header />
            <div className="perfil-container-employee">


                <div className="card-container-employee">
                    <div className="left-column-employee">
                        <div className="large-card-employee">
                            <h1>Mi Perfil </h1>
                            <div className="top-section-employee">

                                <img src="../../img-persona.jpg" alt="Imagen de perfil" className="foto-perfil-employee" />
                                <div className="info-employee">
                                    <p className="nombre-perfil-employee">Daniel Roldan Diaz</p>
                                    <p>It Recruiter JR</p>
                                </div>
                            </div>
                            <div className="bottom-section-employee">
                                <label className="label-employee">Pais</label>
                                <input className="input-employee" type="text" />
                                <label className="label-employee">Correo</label>
                                <input className="input-employee" type="email" />
                                <label className="label-employee">Télefono</label>
                                <input className="input-employee" type="tel" />
                                <button className="button-section-employee">EDITAR PERFIL</button>
                            </div>
                        </div>

                        <div className="cv-upload-employee">
                            <i className="fa-solid fa-file-arrow-up" style={{ fontSize: '40px', marginTop: '5px' }}></i>

                            <label htmlFor="cv-input" className="cv-button-employee">
                                VER CV
                                <input type="file" id="cv-input" className="hidden" accept=".pdf, .doc, .docx" />
                            </label>
                            <p className='formato-employee'>Ver CV Adjunto</p>
                        </div>
                        <div className="observations-section-employee">
                            <label className="label-employee">Observaciones</label>
                            <textarea className="input-employee" rows="4"></textarea>
                            <button className="button-section-employee">ENVIAR</button>
                        </div>
                    </div>

                </div>



                <div className="right-column-employee">
                    <div className="small-cards-employee ">
                        <div className="small-card-employee custom-centered-employee">
                            <h3 className="h3-perfilemployee">Clientes asignados</h3>
                            <button className="button-perfilemployee">VER LISTADO</button>
                        </div>
                        <div className="small-card-employee custom-centered-employee">
                            <h3 className="h3-perfilemployee">Vacantes </h3>
                            <button className="button-perfilemployee">VER LISTADO</button>
                        </div>
                        <div className="small-card-employee custom-centered-employee">
                            <h3 className="h3-perfilemployee">Lista de postulantes</h3>
                            <button className="button-perfilemployee">VER LISTADO</button>
                        </div>
                    </div>
                </div>
            </div>
            <button className="cerrar-sesion-employee">CERRAR SESIÓN</button>
            <Footer2 />
        </div>
    );
}
