import React, { useState } from 'react';
import {
  FormWrapper, FormTitle, Footer, FormTitleWrapper,
} from './Form.components';
import { FormRow } from './FormRow';
import { CallToAction } from '../../Components/Button/Button.components';

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
  title: string;
  buttonText: string;
}

export const Form = (props: FormProps) => {
  const {
    submitFunction, config, responseHandler, title, buttonText,
  } = props;
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
      <FormTitleWrapper><FormTitle>{title}</FormTitle></FormTitleWrapper>
      {rows.map((rowKey) => (
        <FormRow
          getInputValue={updateInputValue}
          inputs={config[rowKey]}
        />
      ))}
      <Footer><CallToAction onClick={onSubmit}>{buttonText}</CallToAction></Footer>
    </FormWrapper>
  );
};
