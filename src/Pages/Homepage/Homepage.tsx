import React from "react";
import styled from 'styled-components';
import { Navbar } from '../../Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import image from '../../assets/photos/friends.svg';

const HomepageContainer = styled(Container)`
    padding: 0;
`;

const Title = styled.h1`
    font-size: 100px;
    font-weight: bold;
    line-height: 1.2;
`

const Subtitle = styled.p`
    line-height: 1.6;
    opacity: 0.8;
    font-size: 24px;
`;

const HomepageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 150px 50px 0 50px;
    
`

export const Homepage = () => {
    return(
        <HomepageContainer fluid>
            <Navbar />
                <Row>
                    <Col lg={5}>
                        <HomepageWrapper>
                            <Title>Startup</Title>
                            <Subtitle>We are two young G's ready to make a couple billion. If you also want to make a billion then register up.</Subtitle>
                        </HomepageWrapper>
                    </Col>
                    <Col lg={5}>
                    <HomepageWrapper><img src={image} alt="Social media friends"/></HomepageWrapper>
                    </Col>
                </Row>
            
        </HomepageContainer>
    )
};