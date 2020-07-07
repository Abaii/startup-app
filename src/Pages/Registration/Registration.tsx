import React from "react";
import styled from "styled-components";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Container } from "react-bootstrap";
import { Form } from "../../Components/Form/Form";
import axios from "axios";
import { Row, Col } from 'react-bootstrap';

const RegistrationContainer = styled(Container)`
  height: 100vh;
`;

const RegistrationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
`
const registrationFormConfig = {
  row1: [
    { name: "First Name", type: "text", id: "firstName" },
    { name: "Last Name", type: "text", id: "surname" },
  ],
  row2: [{ name: "Email", type: "text", id: "email" }],
  row3: [{ name: "Role", type: "text", id: "role" }],
  row4: [{ name: "Password", type: "password", id: "password" }],
  row5: [{ name: "Confirm Password", type: "password", id: "passwordVerify" }],
};

const registrationRequest = (payload: any) => {
  return axios.post("http://localhost:3001/register", { newUser: payload });
};

const registrationResponseHandler = (response: Promise<any>) => {
  return response;
};

export const Registration = () => {
  return (
    <RegistrationContainer>
      <Navbar />
      <RegistrationWrapper>
        <Row className="justify-content-center">
          <Col  lg={10} xl={8}>
            <Form
              title={"Enter your details"}
              buttonText={"Create account"}
              responseHandler={registrationResponseHandler}
              submitFunction={registrationRequest}
              config={registrationFormConfig}
            />
          </Col>
        </Row>
      </RegistrationWrapper>
    </RegistrationContainer>
  );
};
