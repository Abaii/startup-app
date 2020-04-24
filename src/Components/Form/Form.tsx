import React, { useState } from "react";
import { FormWrapper } from "./Form.components";
import { FormRow } from "./FormRow";
import { CallToAction } from "../../Components/Button/Button.components";

export interface InputProperties {
  name: string;
  type: string;
  id: string;
}

interface FormConfig {
  [key: string]: InputProperties[];
}

interface FormProps {
  config: FormConfig;
  submitFunction: (payload: any) => Promise<any>;
  responseHandler: (response: any) => void;
}

export const Form = (props: FormProps) => {
  const { submitFunction, config, responseHandler } = props;
  const rows = Object.keys(config);
  const [payload, updatePayload] = useState({});

  const onSubmit = async () => {
    const result = await submitFunction(payload);
    responseHandler(result);
    return result;
  };

  const updateInputValue = (inputName: string, inputValue: string) => {
    const newPayload = { ...payload, [inputName]: inputValue };
    updatePayload(newPayload);
  };

  return (
    <FormWrapper>
      {rows.map((rowKey) => {
        return (
          <FormRow
            getInputValue={updateInputValue}
            inputs={config[rowKey]}
          ></FormRow>
        );
      })}
      <CallToAction onClick={onSubmit} />
    </FormWrapper>
  );
};
