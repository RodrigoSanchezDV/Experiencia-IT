import React, { useState } from "react";
import "../styles/NewClient.css"; // Importa tu archivo CSS para estilos personalizados

export default function NewClientForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    estado: "",
    codigoPostal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>Formulario de Nuevo Cliente</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input className="input-newclient"
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido:</label>
          <input className="input-newclient"
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo:</label>
          <input className="input-newclient"
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input className="input-newclient"
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="direccion">Dirección:</label>
          <input className="input-newclient"
            type="text"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ciudad">Ciudad:</label>
          <input className="input-newclient"
            type="text"
            id="ciudad"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="estado">Estado:</label>
          <input className="input-newclient"
            type="text"
            id="estado"
            name="estado"
            value={formData.estado}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="codigoPostal">Código Postal:</label>
          <input className="input-newclient"
            type="text"
            id="codigoPostal"
            name="codigoPostal"
            value={formData.codigoPostal}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button className="button-submit" type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}