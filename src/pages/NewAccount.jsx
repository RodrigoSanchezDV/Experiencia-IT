import React, { useState } from "react";
import { Formik, useField } from "formik";
import * as Yup from "yup"; // Importa Yup para validar el formulario
import '../styles/NewAccount.css'; // Asegúrate de ajustar la ruta a tu archivo CSS
import logo from '/SR.png'; // Reemplaza con la ruta de tu logo
import eyeOpenIcon from '/eye-open.png'; // Reemplaza con la ruta de tu ícono de ojo abierto
import eyeClosedIcon from '/basic-eye-closed.png'; // Reemplaza con la ruta de tu ícono de ojo cerrado
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer2 from "../Components/Footer2";



export default function NewAccount() {
    const initialValues = { email: "", password: "" };
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState(false);

    return (
        <div>
            <Header />
            <div className="newAccount-container">
                <img src={logo} alt="Logo" className="logo" />
                <h2>Tu próximo trabajo está aquí</h2>
                <button className="button-google">
                    <i class="fa-brands fa-google"></i>
                    <p>Continua con google</p>
                </button>
                <button className="button-facebook">
                    <i class="fa-brands fa-facebook"></i>
                    <p>Continua con facebook</p>
                </button>
                <hr className="divider" />
               <input className="newAccount-input" name="email" type="email" placeholder="Correo"></input>
                
             <button className="continuar"><Link to="/createaccount">Continuar</Link></button>
              
            </div>
            <Footer2 />
        </div>
    );
}




















// const validationSchema = Yup.object().shape({
//   email: Yup.string().required("El correo electrónico es obligatorio"),
//   password: Yup.string().required("La contraseña es obligatoria"),
// });

// const InputField = ({ label, type, ...props }) => {
//   const [field, meta] = useField(props);

//   return (
//     <div className="input-container">

//       <label>{label}</label>
//       <div className="input-field">
//         <input
//           {...field}
//           {...props}
//           type={type}
//           className="login-input"
//         />
//         {meta.touched && meta.error && (
//           <div className="error">{meta.error}</div>
//         )}
//       </div>
//     </div>
//   );
// };
