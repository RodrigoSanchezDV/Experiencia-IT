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
                            <div className="observations-content">
                                <label className="label-employee">Observaciones</label>
                                <textarea className="input-employee" rows="4"></textarea>
                                <button className="button-new-postulation-employee">NUEVA POSTULACION</button>
                            </div>

                        </div>
                        <button className="button-edit-postulation-employee">EDITAR POSTULACION</button>
                    </div>

                </div>



                <div className="right-column-employee">


                    <h3 className="h3-perfilemployee">Detalles de la Solicitud</h3>
                    <p className="p-perfilemployee">Empleo Postulado:</p>
                    <p className="p-perfilemployee">Tipo de Contratación:</p>
                    <p className="p-perfilemployee">Empresa Deseada:</p>
                    <p className="p-perfilemployee">Rol Deseado:</p>
                    <h3 className="h3-perfilemployee">Experiencia Laboral</h3>
                    <p className="p-perfilemployee">Empresa</p>
                    <p className="p-perfilemployee">Cargo</p>
                    <p className="p-perfilemployee">Duración</p>
                    <p className="p-perfilemployee">+Agregar Experiencia Laboral</p>
                    <h3 className="h3-perfilemployee">Experiencia Educativa</h3>
                    <p className="p-perfilemployee">Titulo:</p>
                    <p className="p-perfilemployee">Institución:</p>
                    <p className="p-perfilemployee">Año:</p>
                    <p className="p-perfilemployee">+Agregar Experiencia Educativa</p>
                    <h3 className="h3-perfilemployee">Habilidades</h3>
                    <input></input>
                    <h3 className="h3-perfilemployee">Estado Actual</h3>
                    <p className="p-perfilemployee">En revisión</p>
                    <p className="p-perfilemployee">Fecha de Postulación:</p>
                    <p className="p-perfilemployee">RRHH(Reclutado por):</p>

                </div>
            </div>
            <button className="delete-postulation-employee">ELIMINAR POSTULACIÓN</button>
            <Footer2 />
        </div>
    );
}
