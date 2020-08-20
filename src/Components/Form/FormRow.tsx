import React from 'react';
import { FormRowWrapper } from './Form.components';
import { InputProperties } from './Form';
import { Input } from '../Input/Input';
import styled from 'styled-components';

interface FormRowProps {
  inputs: InputProperties[];
  getInputValue: (name: string, value: string) => void;
}

const InputWrapper = styled.div`
  display: flex; 
  flex-direction: column;
`;

export const FormRow = (props: FormRowProps) => {
  const { inputs, getInputValue } = props;
  return (
    <FormRowWrapper>
      {inputs.map((input) => {
        return  (
        <>
            <label htmlFor={input.name}>{input.name}</label>
            <Input
              inputHandler={getInputValue}
              name={input.name}
              id={input.id}
              type={input.type}
            />
        </>
        )
      })}
    </FormRowWrapper>
  );
};
