/* eslint no-unused-vars: off */
import { FormikErrors } from 'formik';

export interface RegistrationValues {
  username: string
  email: string
  password: string
  password_confirmation: string
};

export const validate = (values: RegistrationValues): FormikErrors<RegistrationValues> => {
    const errors: FormikErrors<RegistrationValues> = {};

    if (!values.username) {
        errors.username = 'You must enter a username';
    }

    if (!values.email) {
        errors.email = 'You must enter an email';
    }

    if (!values.password) {
        errors.password = 'You must enter a password';
    }

    if (!values.password_confirmation) {
        errors.password_confirmation = 'Please confirm your password'
    }
    const passwordsAreEqual = values.password === values.password_confirmation;
    const passwordsAreNotEmpty = values.password && values.password_confirmation;

    if (passwordsAreEqual && passwordsAreNotEmpty) {
        errors.password_confirmation = 'Your passwords do not match';
    }
    return errors;
} 