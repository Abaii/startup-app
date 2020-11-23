import React from 'react';
import { FormRowWrapper } from './Form.components';
import { InputProperties } from './Form';
import { Input } from '../Input/Input';
import { FormikProps } from 'formik';
import FormError from '../FormError/FormError';

interface FormRowProps extends FormikProps<any> {
  inputs: InputProperties[];
}

export const FormRow = ({inputs, errors, setFieldValue, values, handleSubmit}: FormRowProps) => {
  return (
   <>
      <FormRowWrapper>
        {inputs.map((input) => {
          return (
            <>
              <label htmlFor={input.name}>{input.name}</label>
              <Input
                inputHandler={(id, value) => {
                  console.log(values)
                  setFieldValue(id, value)
                }}
                name={input.name}
                id={input.id}
                type={input.type}
              />
             
              {errors[input.id] && <FormError><span>{errors[input.id]}</span></FormError>}
            </>
          )
        })}
      </FormRowWrapper>

   </>
  );
};
