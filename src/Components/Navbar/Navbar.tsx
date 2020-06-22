import React from "react";
import {
    NavRow,
    Title,
    LinkCol,
    LinkText,
    Logo,
    TitleWrapper, NavButtonWrapper,
} from "./Navbar.components";
import { CallToAction } from '../Button/Button.components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';


export const Navbar = () => {
    
    return (
        <NavRow>
            <Col xs={3}>
                <TitleWrapper>
                    <Logo />
                    <Title>Startup</Title>
                </TitleWrapper>
            </Col>
            <Col>
                <NavButtonWrapper>
                    <CallToAction clear>Home</CallToAction>
                    <CallToAction clear>About</CallToAction>

                    <CallToAction>Sign up</CallToAction>

                </NavButtonWrapper>
            </Col>
        </NavRow>
    );
};