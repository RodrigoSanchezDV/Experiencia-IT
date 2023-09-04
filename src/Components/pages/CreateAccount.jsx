import React from 'react';
import '../styles/CreateAccount.css';
import logo3 from '/Logo3.png'; 

export default function CreateAccount() {
    return (
        <div className="create-account-container">
            <img src={logo3} alt="Logo3" className="logo3" />
           <h5 className='titulo-create'>Empieza a crear tu cuenta</h5>
            <div className="round-buttons">
                <button className="round-button">Botón 1</button>
                <button className="round-button">Botón 2</button>
                <button className="round-button">Botón 3</button>
                <button className="round-button">Botón 4</button>
            </div>
            <form className="account-form">
             
                <label className='label-create'>Nombres</label>
                <input className='input-create' type="text"/>
                <label className='label-create'>Apellidos</label>
                <input className='input-create' type="text"/>
                <label className='label-create'>Correo</label>
                <input className='input-create' type="text" placeholder="ejemplo@gmail.com" />
                <label className='label-create'>Contraseña</label>
                <input className='input-create' type="password"/>
                <label className='label-create'>Pais</label>
<select className='input-create'>
    <option value="selecciona">Selecciona un país</option>
    <option value="pais1">País 1</option>
    <option value="pais2">País 2</option>
    <option value="pais3">País 3</option>
  
</select>
               
                <label className='label-create'>Provincia</label>
                <select className='input-create'>
    <option value="selecciona">Selecciona un país</option>
    <option value="provincia1">provincia 1</option>
    <option value="provincia2">provincia 2</option>
    <option value="provincia3">provincia 3</option>
  
</select>
                <label className='label-create'>Puesto de trabajo deseado</label>
                <input className='input-create' type="text"  />
                
               
            </form>
            <button className="submit-button">CONTINUAR</button>
       <p className="p-create">Al hacer click en "CONTINUAR", acepta las Condiciones legles y la Politica de privacidad de Smart Resources para crear una cuenta, aplicar a vacantes de empleo, contar con potenciales empleadores y recibir comunicaciones, entre otros servicios. Ver detalle legall.</p>
       
        </div>
    );
}
