import React, { useEffect } from 'react';
import '../styles/CreateAccountPage2.css';
import logo3 from '/Logo3.png';

export default function CreateAccountPage2() {
    useEffect(() => {
        // Llena las opciones para los días
        const daySelect = document.getElementById("day-select");
        for (let day = 1; day <= 31; day++) {
            const option = document.createElement("option");
            option.value = day;
            option.textContent = day;
            daySelect.appendChild(option);
        }

        // Llena las opciones para los meses (puedes ajustar las opciones según tus necesidades)
        const monthSelect = document.getElementById("month-select");
        const months = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];
        months.forEach((month, index) => {
            const option = document.createElement("option");
            option.value = index + 1;
            option.textContent = month;
            monthSelect.appendChild(option);
        });

        // Llena las opciones para los años (puedes ajustar el rango según tus necesidades)
        const yearSelect = document.getElementById("year-select");
        const currentYear = new Date().getFullYear();
        const startYear = currentYear - 100; // Por ejemplo, un rango de 100 años hacia atrás
        for (let year = currentYear; year >= startYear; year--) {
            const option = document.createElement("option");
            option.value = year;
            option.textContent = year;
            yearSelect.appendChild(option);
        }
    }, []); // El segundo argumento vacío [] indica que este efecto se ejecutará solo una vez después del montaje.

    return (
        <div className="create-account-container">
            <img src={logo3} alt="Logo3" className="logo3" />
            <h5 className='titulo-create'>Hablanos un poco de ti</h5>
            <div className="cv-upload">
                <i className="fa-solid fa-file-arrow-up" style={{ fontSize: '40px', marginTop: '5px' }}></i>
                <p>Completa los campos necesarios de forma automática subiendo tu CV</p>
                <label htmlFor="cv-input" className="cv-button">
                    SUBE TU CV
                    <input type="file" id="cv-input" className="hidden" accept=".pdf, .doc, .docx" />
                </label>
                <p className='formato'>Formato .PDF - Max. 5MB</p>
            </div>
            <form className="account-form">
                <label className='label-create'>Fecha de nacimiento</label>
                <div className="date-of-birth">
                    <select className='select-create' id="day-select">
                        <option value="selecciona">Día</option>
                    </select>
                    <select className='select-create' id="month-select">
                        <option value="selecciona">Mes</option>
                    </select>
                    <select className='select-create' id="year-select">
                        <option value="selecciona">Año</option>
                    </select>
                </div>
                <label className='label-create'>Apellidos</label>
                <input className='input-create' type="text" />
                <label className='label-create'>Correo</label>
                <input className='input-create' type="text" placeholder="ejemplo@gmail.com" />
                <label className='label-create'>Contraseña</label>
                <input className='input-create' type="password" />
                <label className='label-create'>Pais</label>
                <select className='select-create'>
                    <option value="selecciona">Selecciona un país</option>
                    <option value="pais1">País 1</option>
                    <option value="pais2">País 2</option>
                    <option value="pais3">País 3</option>
                </select>
                <label className='label-create'>Provincia</label>
                <select className='select-create'>
                    <option value="selecciona">Selecciona un país</option>
                    <option value="provincia1">provincia 1</option>
                    <option value="provincia2">provincia 2</option>
                    <option value="provincia3">provincia 3</option>
                </select>
                <label className='label-create'>Puesto de trabajo deseado</label>
                <input className='input-create' type="text" />
            </form>
            <button className="submit-button">CONTINUAR</button>
            <p className="p-create">Al hacer click en "CONTINUAR", acepta las Condiciones legles y la Politica de privacidad de Smart Resources para crear una cuenta, aplicar a vacantes de empleo, contar con potenciales empleadores y recibir comunicaciones, entre otros servicios. Ver detalle legal.</p>
        </div>
    );
}
