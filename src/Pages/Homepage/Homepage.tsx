import React from "react";
import styled from "styled-components";
import { Navbar } from "../../Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import image from "../../assets/photos/friends.svg";
import { CallToAction } from "../../Components/Button/Button.components";

const HomepageContainer = styled(Container)``;

const Title = styled.h1`
  font-size: 100px;
  font-weight: bold;
  line-height: 1.2;
  padding: 20px;
`;

const Subtitle = styled.p`
  line-height: 1.6;
  opacity: 0.5;
  font-size: 24px;
`;

const HomepageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 150px 50px 0 50px;
    padding: 50px;
    
`

export const Homepage = () => {
    return(
        <HomepageContainer fluid>
            <Navbar />
                <Row>
                    <Col lg={12}>
                        <HomepageWrapper>
                            <Title>Find your creative match.</Title>
                            <CallToAction>Get started</CallToAction>

                        </HomepageWrapper>
                    </Col>
                    <Col lg={5}>
                    {/* <HomepageWrapper><img src={image} alt="Social media friends"/></HomepageWrapper> */}
                    </Col>
                </Row>
            
        </HomepageContainer>
    )
};
