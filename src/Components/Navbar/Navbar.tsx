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
        
            <NavRow>
                <Col><Logo/></Col>
                <Col><Title>Startup</Title></Col>
                <LinkCol><LinkText>Home</LinkText>
                <LinkText>Join</LinkText></LinkCol>
            </NavRow>
     
    );
};