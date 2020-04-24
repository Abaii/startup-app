import React from "react";
import { InputWrapper } from "./Input.components";

export interface inputValueObject {
  [name: string]: string;
}

interface InputProps {
  id: string;
  name: string;
  type: string;
  inputHandler: (name: string, value: string) => void;
}

export const Input = (props: InputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    props.inputHandler(e.currentTarget.name, e.currentTarget.value);

  return (
    <InputWrapper>
      <input
        id={props.id}
        name={props.id}
        type={props.type}
        onChange={handleInputChange}
        required
      />
      <label htmlFor={props.id}>{props.name}</label>
    </InputWrapper>
  );
};
