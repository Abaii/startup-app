/* eslint no-unused-vars: 0 */
import { FormikErrors } from "formik";

export interface ResetPasswordValues {
    password: string;
    passwordConfirm: string;
}

export const validate = (values: ResetPasswordValues) => {
  const errors: FormikErrors<ResetPasswordValues> = {};

  if (!values.password) {
    errors.password = "You must enter a new username";
  };

  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'You must confirm your password.'
  }

  return errors;
};
