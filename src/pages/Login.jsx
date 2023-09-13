import { useState, useContext } from "react";
import { Formik, useField } from "formik";
import { useNavigate } from "react-router-dom";
import { logInValidation } from "../validations/login.js";
import "../styles/Login.css"; // Asegúrate de ajustar la ruta a tu archivo CSS
import logo from "/SR.png"; // Reemplaza con la ruta de tu logo
/* import eyeOpenIcon from "/eye-open.png"; // Reemplaza con la ruta de tu ícono de ojo abierto
import eyeClosedIcon from "/basic-eye-closed.png"; */ // Reemplaza con la ruta de tu ícono de ojo cerrado
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer2 from "../Components/Footer2";
import { apiService} from "../API/service.js";
import { AuthContext } from "../context/authContext.jsx"

const validationSchema = logInValidation

const InputField = ({ togglePassword, showPassword, label, type, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="input-container">
      <label>{label}</label>
      <div className="input-field">
        <input {...field} {...props} type={type} className="login-input" />
        {meta.touched && meta.error && (
          <div className="error">{meta.error}</div>
        )}
      </div>
    </div>
  );
};

export default function Login() {
  const navigate = useNavigate()
  const { handleLogin } = useContext(AuthContext);
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
          onSubmit={ async (values) => {
            try {
              const res = await apiService.onSignIn(values)
              if(res.status){
                let finallyUser = {...res.data}
                console.log(finallyUser)
                handleLogin(finallyUser)
                navigate("/")
              }
            } catch (error) {
              console.log(error)
            }
          }}
        >
          {({ handleSubmit }) => (
            <>
              <InputField name="email" type="email" placeholder="Correo" />

              <InputField
                name="password"
                type={showPassword ? "text" : "password"}
                togglePassword={setShowPassword}
                showPassword={showPassword}
                placeholder="Contraseña"
              />
              <p className="password">
                Olvidaste tu contraseña?{" "}
                <Link to="/recuperar-contrasena">Recuperar</Link>
              </p>
              <button
                className="button-ingresar"
                type="button"
                onClick={handleSubmit}
              >
                Ingresar
              </button>
              <button
                className="button-registrarme"
                type="button"
                onClick={handleSubmit}
              >
                <Link to="/newaccount">REGISTRARME</Link>
              </button>

              {loginError && (
                <div className="error-message">
                  <p>
                    Error al iniciar sesión. Verifica tus datos e intenta de
                    nuevo.
                  </p>
                  <p>
                    Si olvidaste tu contraseña, puedes restablecerla o
                    contactarnos para ayuda.
                  </p>
                  <button onClick={() => setLoginError(false)}>Cerrar</button>
                </div>
              )}
            </>
          )}
        </Formik>

      </div>
      <Footer2 />
    </div>
  );
}

