import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Form } from "../../Components/Form/Form";
import {
  Title,
  FooterText,
  FooterSpan,
  Footer,
} from "./Registration.components";
import { Navbar } from "../../Components/Navbar/Navbar";
import { validate, RegistrationValues } from './Registration.validate';

const RegistrationContainer = styled(Container)`
  height: 100vh;
`;

const RegistrationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
`;
const registrationFormConfig = {
  row1: [
    { name: "Username", type: "text", id: "username" },
  ],
  row2: [{ name: "Email", type: "text", id: "email" }],
  row3: [{ name: "Password", type: "password", id: "password" }],
  row4: [{ name: "Confirm Password", type: "password", id: "password_confirmation" }],
};

const registrationRequest = (payload: any) =>
  axios.post("http://localhost:3001/register", { newUser: payload });

const registrationResponseHandler = (response: Promise<any>) => response;

const defaultRegistrationValues: RegistrationValues = {
  username: '',
  email: '',
  password: '',
  password_confirmation: '',
}
export const Registration = () => (
  <RegistrationContainer>
    <Navbar />
    <RegistrationWrapper>
      <Row className="justify-content-center">
        <Col lg={10} xl={8}>
          <Form
            buttonText="Create account"
            responseHandler={registrationResponseHandler}
            submitFunction={registrationRequest}
            config={registrationFormConfig}
            title="Sign up to get started."
            defaultValues={defaultRegistrationValues}
            validate={validate}
          />
        </Col>
        <Col lg={10} xl={8}>
          <Footer>
            <FooterText>
              Already got an account? <FooterSpan>Log in</FooterSpan>
            </FooterText>
          </Footer>
        </Col>
      </Row>
    </RegistrationWrapper>
  </RegistrationContainer>
);
