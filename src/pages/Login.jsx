import React, { useState } from "react";
import { Formik, useField } from "formik";
import * as Yup from "yup"; // Importa Yup para validar el formulario
import '../styles/Login.css'; // Asegúrate de ajustar la ruta a tu archivo CSS
import logo from '/SR.png'; // Reemplaza con la ruta de tu logo
import eyeOpenIcon from '/eye-open.png'; // Reemplaza con la ruta de tu ícono de ojo abierto
import eyeClosedIcon from '/basic-eye-closed.png'; // Reemplaza con la ruta de tu ícono de ojo cerrado
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer2 from "../Components/Footer2";


const validationSchema = Yup.object().shape({
  email: Yup.string().required("El correo electrónico es obligatorio"),
  password: Yup.string().required("La contraseña es obligatoria"),
});

const InputField = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="input-container">

      <label>{label}</label>
      <div className="input-field">
        <input
          {...field}
          {...props}
          type={type}
          className="login-input"
        />
        {meta.touched && meta.error && (
          <div className="error">{meta.error}</div>
        )}
      </div>
    </div>
  );
};

export default function Login() {
  const initialValues = { email: "", password: "" };
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false);

  return (
    <div>
      <Header />
      <div className="login-container">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Mi cuenta SR</h2>

        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={(values) => {
            // Simula una verificación de las credenciales (debes implementar la lógica real aquí)
            if (values.email === "usuario@ejemplo.com" && values.password === "contraseña") {
              // Inicio de sesión exitoso
              console.log("Inicio de sesión exitoso");
            } else {
              // Error en el inicio de sesión
              setLoginError(true);
            }
          }}
        >
          {({ handleSubmit }) => (
            <>
              <InputField
                
                name="email"
                type="email"
                placeholder="Correo"
              />

              <InputField
                
                name="password"
                type={showPassword ? "text" : "password"}
                togglePassword={setShowPassword}
                showPassword={showPassword}
                placeholder="Contraseña"
              />
 <p className="password">
          Olvidaste tu contraseña? <Link to="/recuperar-contrasena">Recuperar</Link>
        </p>
              <button className="button-ingresar" type="button" onClick={handleSubmit}>
                Ingresar
              </button>
              <button className="button-registrarme" type="button" onClick={handleSubmit}>
                
                <Link to="/newaccount">REGISTRARME</Link>
              </button>

              {loginError && (
                <div className="error-message">
                  <p>Error al iniciar sesión. Verifica tus datos e intenta de nuevo.</p>
                  <p>Si olvidaste tu contraseña, puedes restablecerla o contactarnos para ayuda.</p>
                  <button onClick={() => setLoginError(false)}>Cerrar</button>
                </div>
              )}
            </>
          )}
        </Formik>
       
        {/* <p className="password">Olvidaste tu contraseña?</p>
      <button type="button">Recuperar</button> */}
      </div>
      <Footer2 />
    </div>
  );
}






// import { Link } from "react-router-dom";
// import { useState } from 'react';

 // <div className="login-container">
    //   <h2>Iniciar Sesión</h2>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       className="login-input"
    //       type="text"
    //       placeholder="Usuario"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //       required
    //     />
    //     <input
    //       className="login-input"
    //       type="password"
    //       placeholder="Contraseña"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       required
    //     />
    //     <button className="login-button" type="submit">
    //       Enter
    //     </button>
    //   </form>
    //   <br></br>
    //   <Link to='/'>Home</Link>
    // </div>