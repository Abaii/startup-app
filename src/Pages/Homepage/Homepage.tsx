import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { Navbar } from '../../Components/Navbar/Navbar';
import { CallToAction } from '../../Components/Button/Button.components';
import { tokens } from '../../assets/tokens';
import { UserContext } from '../../hooks/UserContext';
import { Link } from 'react-router-dom';
import { SocketCtx } from '../App/AuthenticatedApp';

const HomepageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 2rem;
  color: ${tokens.color.secondaryColor};
  letter-spacing: 1.4px;
  span {
    opacity: 0.5;
  }
`;

const Subtitle = styled.p`
  line-height: 1.8;
  opacity: 0.8;
  font-size: 18px;
  font-weight: 200;
  color: ${tokens.color.secondaryColor};
`;

const HomepageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ButtonContainer = styled.div`
    display: flex;
    margin-top: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
`;

export const Homepage = () => {
  const val = useContext(UserContext);
  const socket = useContext(SocketCtx);
  console.log(socket)
  return (
    <HomepageContainer>
      <Navbar />
      <ContentWrapper>
        <Row>
          <Col xs={6}>
            <HomepageWrapper>
              <Title>
                Perfect partners for
                <span>passionate</span>
                {' '}
                people
              </Title>
              <Subtitle>Great products are made by teams. Startup serves as a platform for you to connect with others
              who have a skillset and share your passions in order to achieve something great.
              </Subtitle>
              <ButtonContainer>
                {!val?.user && <CallToAction><Link to='/login'>Log in</Link></CallToAction>}
              </ButtonContainer>
              <button onClick={() => socket.emit('hello', 'hello matey')}>click to send</button>
            </HomepageWrapper>

          </Col>
        </Row>
      </ContentWrapper>

    </HomepageContainer>
  );
}
