import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { Navbar } from '../../Components/Navbar/Navbar';
import { CallToAction } from '../../Components/Button/Button.components';
import { tokens } from '../../assets/tokens';

const HomepageContainer = styled(Container)``;

const Title = styled.h1`
  font-size: 6vw;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 2rem;
  color: ${tokens.color.tertiaryColor};
  
  & span {
    color: #20D5C9;
  }
`;

const Subtitle = styled.p`
  line-height: 1.6;
  opacity: 0.5;
  font-size: 24px;
  font-weight: 200;
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
`;

export const Homepage = () => (
  <HomepageContainer>
    <Navbar />
    <Row>
      <Col>
        <HomepageWrapper>
          <Title>
            Perfect partners for
            <span> passionate</span>
            {' '}
            people
          </Title>
          <Subtitle>You have a passion. However, not all of us can achieve big things on our own. Startup serves as a platform for you to connect with others
            who have a skillset and share your passions in order to achieve something great.
          </Subtitle>
          <ButtonContainer>
            <CallToAction>Sign up for free</CallToAction>
            <CallToAction>Find out more</CallToAction>
          </ButtonContainer>
        </HomepageWrapper>

      </Col>
    </Row>

  </HomepageContainer>
);
