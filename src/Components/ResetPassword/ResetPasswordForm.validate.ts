import { FormikErrors } from "formik";

export interface ResetPasswordFormValues {
    username: string;
}

export const validate = 
    (values: ResetPasswordFormValues): FormikErrors<ResetPasswordFormValues> => {
    const errors: FormikErrors<ResetPasswordFormValues> = {};
        if (!values.username) {
            errors.username = 'Please enter your username.'
        }
        return errors;
}