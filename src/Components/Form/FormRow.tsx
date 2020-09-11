import React from 'react';
import { FormRowWrapper } from './Form.components';
import { InputProperties } from './Form';
import { Input } from '../Input/Input';
import styled from 'styled-components';
import { FormikProps } from 'formik';
import FormError from '../FormError/FormError';
import { CallToAction } from '../Button/Button.components';

interface FormRowProps extends FormikProps<any> {
  inputs: InputProperties[];
  buttonText: string;
}



export const FormRow = ({inputs, buttonText, errors, setFieldValue, values, handleSubmit}: FormRowProps) => {
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
              {errors[input.name] && <FormError>{errors[input.name]}</FormError>}
            </>
          )
        })}
      </FormRowWrapper>

   </>
  );
};
