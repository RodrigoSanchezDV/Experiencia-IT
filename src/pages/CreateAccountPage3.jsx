import React, { useEffect, useState } from 'react';
import '../styles/CreateAccountPage3.css';
import logo3 from '/Logo3.png';
import Footer2 from "../Components/Footer2";
import { Link } from "react-router-dom";

export default function CreateAccountPage3() {
    const [months, setMonths] = useState([]);
    const [years, setYears] = useState([]);

    useEffect(() => {
        // Llena las opciones para los meses (puedes ajustar las opciones según tus necesidades)
        const monthsArray = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];

        // Llena las opciones para los años (puedes ajustar el rango según tus necesidades)
        const currentYear = new Date().getFullYear();
        const startYear = currentYear - 100; // Por ejemplo, un rango de 100 años hacia atrás
        const yearsArray = [];

        for (let year = currentYear; year >= startYear; year--) {
            yearsArray.push(year);
        }

        setMonths(monthsArray);
        setYears(yearsArray);
    }, []); // El segundo argumento vacío [] indica que este efecto se ejecutará solo una vez después del montaje.

    return (
        <div>
            <div className="create-account-container">
                <img src={logo3} alt="Logo3" className="logo3" />
                <h5 className='titulo-create'>¿Que formación tienes?</h5>
                <div className="round-buttons">
                    <button className="round-button">Botón 1</button>
                    <button className="round-button">Botón 2</button>
                    <button className="round-button">Botón 3</button>
                    <button className="round-button">Botón 4</button>
                </div>

                <form className="account-form">

                    <label className='label-create'>Nivel de estudios</label>
                    <div className='estudios'>
                        <select className='select-create'>
                            <option value="selecciona">Selecciona</option>
                            <option value="secundario">Secundario Completo</option>
                            <option value="terciario">Terciario</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>

                    <label className='label-create'>Centro educativo</label>
                    <div className='centro-educativo'>
                        <input className='input-create' type="text" />
                    </div>

                    <label className='label-create'>Estado</label>
                    <div className='estado-estudios'>
                        <select className='select-create'>
                            <option value="selecciona">Selecciona</option>
                            <option value="dni">Terminado</option>
                            <option value="le">En proceso</option>
                            <option value="otro">Pausado</option>
                        </select>

                    </div>

                    <label className='label-create'>Desde</label>
                    <div className="date-of-study">

                        <select className='select-create' id="month-select">
                            <option value="selecciona">Mes</option>
                            {months.map((month, index) => (
                            <option key={index} value={index + 1}>{month}</option>
                        ))}
                        </select>
                        <select className='select-create' id="year-select">
                            <option value="selecciona">Año</option>
                            {years.map((year, index) => (
                            <option key={index} value={year}>{year}</option>
                        ))}
                        </select>
                    </div>
                
                </form>
                
                <button className="submit-button"><Link to='/createaccountpage3'>Añadir</Link></button>
           
            </div>
            <Footer2 />
        </div>
    );
}
