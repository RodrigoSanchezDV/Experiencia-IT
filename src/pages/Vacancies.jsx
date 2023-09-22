import React from "react";
import "../styles/Vacancies.css";
import Footer2 from "../Components/Footer2";

export default function Vacancies() {
    return (
        <div>

<div className="contenedor-vacancies">
  <div className="izquierda-vacancies">
    <button className="round-button-vacancies">
      &lt;
    </button>
    <span>Vacantes para ti</span>
  </div>
  <div className="derecha-vacancies">
    <button>BUSCAR</button>
    <input type="text" />
  </div>
</div>


            <div className="vacancies-container">
  <div className="card-container-vacancies">
    <div className="small-card-vacancies custom-centered-vacancies">
      <img className="img-vacancies" src="../../img-persona.jpg"/>
      <h3 className="h3-vacancies">Detalles de la Vacante</h3>
      <p>Empleo: Diseñador UX</p>
      <p>Tipo de Contratación: Tiempo completo</p>
      <p>Empresa: Empresa ABC</p>
      <button className="button-vacancies">POSTULARME</button>
    </div>
    <div className="small-card-vacancies custom-centered-vacancies">
      <img className="img-vacancies" src="../../img-persona.jpg"/>
      <h3 className="h3-vacancies">Detalles de la Vacante</h3>
      <p>Empleo: Diseñador UX</p>
      <p>Tipo de Contratación: Tiempo completo</p>
      <p>Empresa: Empresa ABC</p>
      <button className="button-vacancies">POSTULARME</button>
    </div>
    <div className="small-card-vacancies custom-centered-vacancies">
      <img className="img-vacancies" src="../../img-persona.jpg"/>
      <h3 className="h3-vacancies">Detalles de la Vacante</h3>
      <p>Empleo: Diseñador UX</p>
      <p>Tipo de Contratación: Tiempo completo</p>
      <p>Empresa: Empresa ABC</p>
      <button className="button-vacancies">POSTULARME</button>
    </div>
    <div className="small-card-vacancies custom-centered-vacancies">
      <img className="img-vacancies" src="../../img-persona.jpg"/>
      <h3 className="h3-vacancies">Detalles de la Vacante</h3>
      <p>Empleo: Diseñador UX</p>
      <p>Tipo de Contratación: Tiempo completo</p>
      <p>Empresa: Empresa ABC</p>
      <button className="button-vacancies">POSTULARME</button>
    </div>
    <div className="small-card-vacancies custom-centered-vacancies">
      <img className="img-vacancies" src="../../img-persona.jpg"/>
      <h3 className="h3-vacancies">Detalles de la Vacante</h3>
      <p>Empleo: Diseñador UX</p>
      <p>Tipo de Contratación: Tiempo completo</p>
      <p>Empresa: Empresa ABC</p>
      <button className="button-vacancies">POSTULARME</button>
    </div>
    <div className="small-card-vacancies custom-centered-vacancies">
  <button className="round-button">
    <i className="fas fa-plus"></i>
    
  </button>
  <p>Ver mas</p>
</div>

  </div>
</div>


            <Footer2 />
        </div>
    );
}

