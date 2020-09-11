import React from 'react';
import { StyledInput } from './Input.components';

export interface inputValueObject {
  [name: string]: string;
}

interface InputProps {
  id: string;
  name: string;
  type: string;
  inputHandler: (name: string, value: string) => void;
  placeholder?: string;
}

export const Input = (props: InputProps) => {
  const {
    id, name, type, inputHandler, placeholder,
  } = props;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => inputHandler(e.currentTarget.id, e.currentTarget.value);

  return (
      <StyledInput
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        onChange={handleInputChange}
        required
      />

  );
};
