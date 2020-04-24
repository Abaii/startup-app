import React from "react";
import { FormRowWrapper } from "./Form.components";
import { InputProperties } from "./Form";
import { Input } from "../Input/Input";

interface FormRowProps {
  inputs: InputProperties[];
  getInputValue: (name: string, value: string) => void;
}

export const FormRow = (props: FormRowProps) => {
  return (
    <FormRowWrapper>
      {props.inputs.map((input) => (
        <Input
          inputHandler={props.getInputValue}
          name={input.name}
          id={input.id}
          type={input.type}
        />
      ))}
    </FormRowWrapper>
  );
};
