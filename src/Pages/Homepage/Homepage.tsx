import React from "react";
import styled from "styled-components";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import { CallToAction } from "../../Components/Button/Button.components";

const HomepageContainer = styled(Container)``;

const Title = styled.h1`
  font-size: 80px;
  font-weight: bold;
  line-height: 1.2;
  color: #364e0e;
  margin-bottom: 2rem;

  & span {
      color: #BBE774;
  }
`;

const Subtitle = styled.p`
  line-height: 1.6;
  opacity: 0.5;
  font-size: 24px;
  color: #364e0e;
`;

const HomepageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px 50px 0 50px;
    padding: 50px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    margin-top: 50px;
`

export const Homepage = () => {
    return(
        <HomepageContainer>
            <Navbar />
                <Row >
                    <Col>
                       <HomepageWrapper>
                            <Title>Perfect partners for <span>passionate</span> people</Title>
                            <Subtitle>Startup is the easiest way for you to find like-minded individiuals to collaborate with on your passion projects.</Subtitle>
                            <ButtonContainer>
                                <CallToAction>Sign up for free</CallToAction>
                                <CallToAction>Find out more</CallToAction>
                            </ButtonContainer>
                        </HomepageWrapper> 
                    
                    </Col>
                </Row>
            
        </HomepageContainer>
    )
};
