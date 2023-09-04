import React, { useState } from "react";
import "../styles/PasswordRecovery.css"
import Header from "../pageComponents/Header";
import Footer from "../pageComponents/Footer";
export default function SimpleForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    // Aquí puedes realizar alguna acción con los datos del formulario
    console.log("Datos enviados:", formData);
  };

  return (
    <div>
    <Header />
    <div className="center-container">
      
      <h2>Recuperar contraseña</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <Footer/>
    </div>
    </div>
  );
}
