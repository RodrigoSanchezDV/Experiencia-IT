import * as yup from "yup"

export const logInValidation = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(5).max(10).required()
})