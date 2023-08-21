import * as yup from "yup"

export const registerValidation = yup.object().shape({
  firstName: yup.string().min(3, "Too short!!").max(15, "Too long!!").required("Is required"),
  lastName: yup.string().min(3, "Too short!!").max(15, "Too long!!").required("Is required"),
  email: yup.string().email().required("Is requiered"),
  phone: yup.number().required("Is requiered"),
  adress: yup.string().min(1).max(100).required("Is required"), 
  city: yup.string().min(1).max(100).required("Is required"), 
  country: yup.string().min(1).max(100).required("Is required"), 


  password: yup.string().min(7, "Too short!!").max(25, "Too long!!").matches(/^(?=.*[A-Z])(?=.*\d)/, "Must contain at least one capital letter and one number").required("Is required"),


})
