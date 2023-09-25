import "../styles/Vacancies.css";
import Footer2 from "../Components/Footer2";
import SearchBar from "../Components/SearchBar";
import { useState, useContext, useEffect } from "react";
import { SearchContext } from "../context/searchContext";
import { apiService } from "../API/service";

export default function Vacancies() {
  const { found, setFoundInfo } = useContext(SearchContext) //* vacantes encontradas por busqueda
  const [vacancies, setVacancies] = useState([])

  const getAllVacancies = async () => {
    const res = await apiService.onSearchAll("vacancies")
    setFoundInfo(res.data)
  }

  useEffect(() => {
    if (!found.length) getAllVacancies()  //* Si no hay nada en busqueda que haga un get para traer todas las vacantes
    setVacancies(found)
  }, [found])

  return (
    <div>

      <div className="contenedor-vacancies">
        <div className="izquierda-vacancies">
          <button className="round-button-vacancies">
            &lt;
          </button>
          <span>Vacantes para ti</span>
        </div>
        <SearchBar typeOfSearch="vacancies" />
        {/* <div className="derecha-vacancies">
          <button>BUSCAR</button>
          <input type="text" />
        </div> */}
      </div>

     {/* //! Vamos a tener que reemplazar por ese fragmento cuando haya un endpoint de donde traer los datos */}
      {/* <div className="vacancies-container">
      <div className="card-container-vacancies">
        {vacancies?.map((vac, index) => {
          return (
            <div className="small-card-vacancies custom-centered-vacancies" key={index}>
              <img className="img-vacancies" src="../../img-persona.jpg" />
              <h3 className="h3-vacancies">Empresa:{vac.empresa}</h3>
              <p>Empleo: {vac.empleo}</p>
              <p>Tipo de Contratación: {vac.modalidad}</p>
              <p>Empresa: {vac.empresa}</p>
              <button className="button-vacancies">POSTULARME</button>
            </div>
          )
        })}
        <div className="small-card-vacancies custom-centered-vacancies">
            <button className="round-button">
              <i className="fas fa-plus"></i>

            </button>
            <p>Ver mas</p>
          </div>
        </div>
      </div> */}

      <div className="vacancies-container">
        <div className="card-container-vacancies">
          <div className="small-card-vacancies custom-centered-vacancies">
            <img className="img-vacancies" src="../../img-persona.jpg" />
            <h3 className="h3-vacancies">Detalles de la Vacante</h3>
            <p>Empleo: Diseñador UX</p>
            <p>Tipo de Contratación: Tiempo completo</p>
            <p>Empresa: Empresa ABC</p>
            <button className="button-vacancies">POSTULARME</button>
          </div>
          <div className="small-card-vacancies custom-centered-vacancies">
            <img className="img-vacancies" src="../../img-persona.jpg" />
            <h3 className="h3-vacancies">Detalles de la Vacante</h3>
            <p>Empleo: Diseñador UX</p>
            <p>Tipo de Contratación: Tiempo completo</p>
            <p>Empresa: Empresa ABC</p>
            <button className="button-vacancies">POSTULARME</button>
          </div>
          <div className="small-card-vacancies custom-centered-vacancies">
            <img className="img-vacancies" src="../../img-persona.jpg" />
            <h3 className="h3-vacancies">Detalles de la Vacante</h3>
            <p>Empleo: Diseñador UX</p>
            <p>Tipo de Contratación: Tiempo completo</p>
            <p>Empresa: Empresa ABC</p>
            <button className="button-vacancies">POSTULARME</button>
          </div>
          <div className="small-card-vacancies custom-centered-vacancies">
            <img className="img-vacancies" src="../../img-persona.jpg" />
            <h3 className="h3-vacancies">Detalles de la Vacante</h3>
            <p>Empleo: Diseñador UX</p>
            <p>Tipo de Contratación: Tiempo completo</p>
            <p>Empresa: Empresa ABC</p>
            <button className="button-vacancies">POSTULARME</button>
          </div>
          <div className="small-card-vacancies custom-centered-vacancies">
            <img className="img-vacancies" src="../../img-persona.jpg" />
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

