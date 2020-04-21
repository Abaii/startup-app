import React from "react";
import styled from "styled-components";
import { Navbar } from "../../Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { CallToAction } from "../../Components/Button/Button.components";
import { Input } from "../../Components/Input/Input";

const RegistrationContainer = styled(Container)``;

const RegistrationPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 150px 20% 0 20%;
  padding: 50px;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  margin: 0 auto;
`;

export const Registration = () => {
  return (
    <RegistrationContainer fluid>
      <Navbar />
      <RegistrationPageWrapper>
        <FormRow>
          <Input name="First Name" type="text" id="firstName" />
          <Input name="Last Name" type="text" id="surname" />
        </FormRow>
        <FormRow>
          <Input name="Email" type="text" id="email" />
        </FormRow>

        <FormRow>
          <Input name="Role" type="text" id="role" />
        </FormRow>

        <FormRow>
          <Input name="Password" type="password" id="password" />
        </FormRow>

        <FormRow>
          <Input name="Confirm Password" type="password" id="passwordVerify" />
        </FormRow>

        <CallToAction> Submit </CallToAction>
      </RegistrationPageWrapper>
    </RegistrationContainer>
  );
};
