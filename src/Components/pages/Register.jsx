import "../styles/Register.css";
import { useFormik } from "formik";
import { registerValidation } from "../../validations/register";

export default function Register() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone,
      adress,
      city,
      country,
      password: "",

    },
    validationSchema: registerValidation,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="register-container">
      <h2>Registro</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="Firs Name"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}
        <input
          type="text"
          placeholder="Last Name"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}

        <input
          type="text"
          placeholder="Email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
