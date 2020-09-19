import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Form } from '../Form/Form';
import axios from 'axios';
import { URL } from '../../common/constants';
import { useParams, useHistory } from 'react-router-dom';
import { User } from '../../App';
import { validate, ResetPasswordValues } from './ResetPassword.validate';

const resetPasswordConfig = {
    row1: [{ name: 'Enter new password', type: 'password', id: 'password'}],
    row2: [{ name: 'Confirm your password', type: 'password', id: 'passwordConfirm' }]
};

interface ResetPasswordProps {
    login: (logIn: User) => void | undefined;
};

const defaultResetPassword: ResetPasswordValues = {
    password: '',
    passwordConfirm: '',
}

const ResetPassword = (props: ResetPasswordProps) => {
    let { token } = useParams();
    let history = useHistory();
    const resetPasswordRequest = (payload: any) => axios.post(`${URL}/reset`, { ...payload, token }, { withCredentials: true });

    const responseHandler = (response: any, payload: any) => {
        axios.post(`${URL}/login`, { user: { 'username': response.data.username, 'password': payload.password }}, { withCredentials: true }).then((res) => 
            props.login(response)
        )
        .then(() => history.push('/'))
    };
    return (
        <Container>
            <Row>
                <Col>
                    <Form 
                        defaultValues={defaultResetPassword}
                        buttonText="Change your password"
                        submitFunction={resetPasswordRequest}
                        config={resetPasswordConfig}
                        responseHandler={responseHandler}
                        title="Reset your password"
                        validate={validate}
                    />
                </Col>
            </Row>
        </Container>
    )    
};

export default ResetPassword;