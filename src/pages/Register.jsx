import "../styles/Register.css";
import { useFormik } from "formik";
import { registerValidation } from "../validations/register";
import { apiService} from "../API/service.js";
export default function Register() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      adress: "",
      city: "",
      country: "",
      password: ""
    },
    validationSchema: registerValidation,
    onSubmit: async (values) => {
      const res = await apiService.onSigUp(values)
      console.log("Respuesta del register")
      console.log(res)
    },
  });
  
  return (
    <div className="register-container">
      <h2>Registro</h2>
      <form onSubmit={formik.handleSubmit}>
        <input className="input-register"
          type="text"
          placeholder="Firs Name"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}
        <input className="input-register"
          type="text"
          placeholder="Last Name"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}

        <input className="input-register"
          type="text"
          placeholder="Email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
          <input className="input-register"
          type="number"
          placeholder="Phone"
          {...formik.getFieldProps("phone")}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div>{formik.errors.phone}</div>
        ) : null}
          <input className="input-register"
          type="text"
          placeholder="Adress"
          {...formik.getFieldProps("adress")}
        />
        {formik.touched.adress && formik.errors.adress ? (
          <div>{formik.errors.adress}</div>
        ) : null}
          <input className="input-register"
          type="text"
          placeholder="City"
          {...formik.getFieldProps("city")}
        />
        {formik.touched.city && formik.errors.city ? (
          <div>{formik.errors.city}</div>
        ) : null}
          <input className="input-register"
          type="text"
          placeholder="Country"
          {...formik.getFieldProps("country")}
        />
        {formik.touched.country && formik.errors.country ? (
          <div>{formik.errors.country}</div>
        ) : null}
          <input className="input-register"
          type="password"
          placeholder="Password"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
        <button className="button-register" type="submit">Sing Up</button>
      </form>
    </div>
  );
}
