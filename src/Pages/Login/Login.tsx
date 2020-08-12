import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Form } from '../../Components/Form/Form';
import { FooterText, FooterSpan, Footer } from './Login.components';
import { Navbar } from '../../Components/Navbar/Navbar';
import { User } from '../../App';

const LoginContainer = styled(Container)`
  height: 100vh;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
`;
const loginFormConfig = {
    row1: [{ name: 'Username', type: 'text', id: 'username' }],
    row2: [{ name: 'Email', type: 'text', id: 'email' }],
    row3: [{ name: 'Password', type: 'password', id: 'password' }],
};

const loginRequest = (payload: any) => axios.post('http://localhost:3001/login', { user: payload }, {withCredentials: true});
interface LoginProps {
    logUserIn: (user: User) => void;
}

export const Login = ({ logUserIn }: LoginProps) => {
    
    const loginResponseHandler = async (response: Promise<User>) => {
        const { username, email } = await response;
        logUserIn({ username, email });
    };

    return (
        <LoginContainer>
            <Navbar />
            <LoginWrapper>
                <Row className="justify-content-center">
                    <Col lg={10} xl={8}>
                        <Form
                            buttonText="Log in"
                            responseHandler={loginResponseHandler}
                            submitFunction={loginRequest}
                            config={loginFormConfig}
                            title="Welcome back"
                        />
                    </Col>
                    <Col lg={10} xl={8}>
                        <Footer>
                            <FooterText>Forgotten your password?<FooterSpan>Reset it.</FooterSpan></FooterText>
                        </Footer>
                    </Col>
                </Row>

            </LoginWrapper>
        </LoginContainer>
    )
};
