import React from 'react';
import {
  FormWrapper, FormTitle, FormTitleWrapper, Footer
} from './Form.components';
import { FormRow } from './FormRow';
import { CallToAction } from '../../Components/Button/Button.components';
import { FormikProps, Formik, FormikErrors } from 'formik';

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
  responseHandler: (response: any, payload?: any) => void;
  title?: string;
  buttonText: string;
  defaultValues: any;
  validate: (values: any) => FormikErrors<any>
}

interface FormContainerProps extends FormikProps<any> {
  config: FormConfig;
  buttonText: string;
}

const FormContainer = ({ config, buttonText, handleSubmit, values, ...formikProps }: FormContainerProps) => {
  const rows = Object.keys(config);
    return (
      <>
      {rows.map((rowKey) => (
          <FormRow
            inputs={config[rowKey]}
            values={values}
            handleSubmit={handleSubmit}
            {...formikProps}
          />
      ))}
        <Footer>
          <CallToAction type="submit" onClick={() => handleSubmit(values)}>{buttonText}</CallToAction>
        </Footer>
      </>
        
    )
}

export const Form = ({
  submitFunction, config, responseHandler, title, buttonText, defaultValues, validate
}: FormProps) => {
  

  const onSubmit = async (values: any) => {
    const result = await submitFunction(values);
    responseHandler(result, values);
    return result;
  };

  return (
    
      <FormWrapper>
        {title && <FormTitleWrapper><FormTitle>{title || ''}</FormTitle></FormTitleWrapper>}
        <Formik
          onSubmit={onSubmit}
          initialValues={defaultValues}
          validate={validate}
        >
          {(formikProps: FormikProps<any>) => (
            <FormContainer 
              {...formikProps}
              config={config}
              buttonText={buttonText}
            />
          )}
        </Formik>
        
      </FormWrapper>
   
  );
};
