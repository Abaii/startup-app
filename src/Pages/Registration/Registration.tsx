import React from "react";
import styled from "styled-components";
import { Navbar } from "../../Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Form } from "../../Components/Form/Form";
import axios from "axios";

const RegistrationContainer = styled(Container)``;

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
  return axios.post("localhost:3000/registration", { newUser: payload });
};

const registrationResponseHandler = (response: Promise<any>) => {
  console.log(response);
};

export const Registration = () => {
  return (
    <RegistrationContainer fluid>
      <Navbar />
      <Form
        responseHandler={registrationResponseHandler}
        submitFunction={registrationRequest}
        config={registrationFormConfig}
      />
    </RegistrationContainer>
  );
};
