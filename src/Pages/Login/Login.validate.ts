
import { FormikErrors } from "formik";

export interface LoginValues {
    username: string;
    email: string;
    password: string;
}
export const validate = (values: LoginValues): FormikErrors<LoginValues> => {
    const errors: FormikErrors<LoginValues> = {};

    if (!values.username) {
        errors.username = 'You must enter your username'
    }

    if (!values.password) {
        errors.password = 'You must enter your password'
    }
    
    return errors;
}