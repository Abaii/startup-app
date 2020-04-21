import React from 'react';
import { LoginContainer, LoginRow, LoginWrapper, LoginTitle, RegisterText, Wrapper } from './Login.components';
import { Input } from '../../Components/Input/Input'
import { Button } from '../../Components/Button/Button';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Col } from 'react-bootstrap';
export const Login = () => {
    return (
        <Wrapper>
            <Navbar />
            <LoginContainer fluid>
                <LoginRow>
                    <Col lg={5}>
                        <LoginWrapper>
                            <LoginTitle>Welcome back.</LoginTitle>
                            <Input id="username" name="username"></Input>
                            <Input id="password" name="password"></Input>
                            <Button text="Continue" width="100%"/>
                            <RegisterText>Dont have an account? Register now.</RegisterText>
                        </LoginWrapper>
                    </Col>
                </LoginRow>
            </LoginContainer>
        </Wrapper>
    )
}