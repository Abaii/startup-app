import React from "react";
import {
    NavRow,
    Title,
    LinkCol,
    LinkText,
    Logo,
} from "./Navbar.components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';


export const Navbar = () => {
    return (
        <Container fluid>
            <NavRow>
                <LinkCol><Logo/></LinkCol>
                <LinkCol><Title>Startup</Title></LinkCol>
                <LinkCol><LinkText>Home</LinkText>
                <LinkText>Join</LinkText></LinkCol>
            </NavRow>
        </Container>
    );
};