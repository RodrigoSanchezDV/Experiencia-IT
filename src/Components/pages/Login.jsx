// import { Link } from "react-router-dom";
// import { useState } from 'react';
import { Formik, useField } from "formik";
import { logInValidate } from "../../validations/login";
import '../styles/Login.css';


export default function Login() {

  const initialValues = { email: "", password: "" }

  const InputField = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);

    return (
      <>
        <input
          value={field.value}
          onChange={event => helpers.setValue(event.target.value)}
          {...props}
        />
        {meta.error && <p>{meta.error}</p>}
      </>
    );
  };


  return (
    <Formik validationSchema={logInValidate} initialValues={initialValues} onSubmit={values => console.log(values)}>
      {({ handleSubmit }) => {
        return (
          <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <InputField
              className="login-input"
              type="text"
              name="email"
              placeholder="E-mail"
            />

            <InputField
              className="login-input"
              type="password"
              name="password"
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




