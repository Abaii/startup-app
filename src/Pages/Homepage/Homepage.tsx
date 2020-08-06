import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { Navbar } from '../../Components/Navbar/Navbar';
import { CallToAction } from '../../Components/Button/Button.components';
import { tokens } from '../../assets/tokens';
import { UserContext } from '../../hooks/UserContext';


const HomepageContainer = styled(Container)``;

const Title = styled.h1`
  font-size: 56px;
  font-weight: 900;
  line-height: 1.3;
  margin-bottom: 2rem;
  color: ${tokens.color.secondaryColor};
  span {
    opacity: 0.5;
  }
`;

const Subtitle = styled.p`
  line-height: 1.8;
  opacity: 0.8;
  font-size: 24px;
  font-weight: 200;
  color: ${tokens.color.secondaryColor};
`;

const HomepageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 100px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    margin-top: 50px;
`;

export const Homepage = () => {
  const val = useContext(UserContext);

  return (
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
}
