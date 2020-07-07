import React from "react";
import { InputWrapper, IconWrapper } from "./Input.components";

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
  const { id, name, type, inputHandler, placeholder } = props;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    inputHandler(e.currentTarget.name, e.currentTarget.value);

  return (
    <InputWrapper>
      
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        onChange={handleInputChange}
        required
      />
    </InputWrapper>
  );
};
