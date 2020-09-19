import React, { useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Form } from '../Form/Form';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import RequestConfirmation from './RequestConfirmation';
import { URL } from '../../common/constants';
import { ApiResponse } from '../../common/types';
import styled from 'styled-components';
import { validate, ResetPasswordFormValues } from './ResetPasswordForm.validate';

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
const defaultResetValues: ResetPasswordFormValues = {
    username: '',
}

const ResetPasswordForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [userEmail, setUserEmail] = useState('');
    const resetRequest = (payload: RequestPayload) => {
        setCurrentStep(2)
        return axios.post(`${URL}/forgot`, payload, { withCredentials: true });
    }
    const responseHandler = async ({ data: { email } }: ApiResponse<{ email: string }>) => 
        setUserEmail(email);
    

    return (
        <Container>
            <Navbar />
            <ResetFormWrapper>
                <Row>
                    <Col>
                        {currentStep === 1 ?
                            <Form
                                defaultValues={defaultResetValues}
                                buttonText="Email me a reset link"
                                submitFunction={resetRequest}
                                responseHandler={responseHandler}
                                config={resetPasswordConfig}
                                title="Don't worry it happens to the best of us"
                                validate={validate}
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