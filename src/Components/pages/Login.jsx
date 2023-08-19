// import { Link } from "react-router-dom";
// import { useState } from 'react';
import { Formik, useField } from "formik";
import {logInValidate} from "../../validations/login";
import '../styles/Login.css';

const initialValues = { email: "", password: "" }

export default function Login() {

  const inputField = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);

    return (
      <inputFormik
      value={field.value}
      onChange = {value => helpers.setValue(value)}
      {...props}
      />
    );
  };
  //   const [username, setUsername] = useState('');
  //   const [password, setPassword] = useState('');

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Agrega aquí la lógica de autenticación en el servidor
  //     console.log('Usuario:', username);
  //     console.log('Contraseña:', password);
  // };

  return (
    <Formik validationSchema={logInValidate} initialValues={initialValues} onSubmit={values => console.log(values)}>
      {({ handleChange, handleSubmit, values }) => {
        return (
          <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <input
              className="login-input"
              type="text"
              placeholder="E-mail"
            />
            

            <input
              className="login-input"
              type="text"
              placeholder="Password"
            />

            <button type="button" onClick={handleSubmit}>Ingresar</button>
          </div>
        )
      }
      }
    </Formik>
















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
  );
}




