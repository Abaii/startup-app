import React, { useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Form } from '../Form/Form';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import RequestConfirmation from './RequestConfirmation';
import { URL } from '../../common/constants';
import styled from 'styled-components';

const resetPasswordConfig = {
    row1: [{ name: 'Enter your username or email', type: 'text', id: 'username'}]
};

interface RequestPayload {
    emailoruser: string;
}

const ResetFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ResetPasswordForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [userEmail, setUserEmail] = useState('');
    const resetRequest = (payload: RequestPayload) => {
        console.log(payload)
        return axios.post(`${URL}/forgot`, payload, { withCredentials: true })
    }
    const responseHandler = async (email: string) => {
        setUserEmail(email);
        setCurrentStep(2)
    }
    return (
        <Container>
            <Navbar />
            <ResetFormWrapper>
                <Row>
                    <Col>
                        {currentStep === 1 ?
                            <Form
                                buttonText="Email me a reset link"
                                submitFunction={resetRequest}
                                responseHandler={responseHandler}
                                config={resetPasswordConfig}
                                title="Recover password"
                            /> :
                            <RequestConfirmation email={userEmail} />
                        }
                    </Col>
                </Row>
            </ResetFormWrapper>
        </Container>
    )
};

export default ResetPasswordForm;