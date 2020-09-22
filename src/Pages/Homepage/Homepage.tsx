import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { Navbar } from '../../Components/Navbar/Navbar';
import { CallToAction } from '../../Components/Button/Button.components';
import { tokens } from '../../assets/tokens';
import { UserContext } from '../../hooks/UserContext';
import { Link } from 'react-router-dom';
import { SocketCtx } from '../../App';
import Waves from '../../assets/categories/waves.svg';

const HomepageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const WaveContainer = styled(Container)`
  padding: 0;
  overflow: hidden;
`

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 2rem;
  color: ${tokens.color.secondaryColor};
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
    align-items: center;
    text-align: center;
    margin-top: 14%;
`;

export const ButtonContainer = styled.div`
    display: flex;
    margin-top: 20px;
`;

const ContentWrapper = styled.div`
`;


const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  img {
    width: 800px;
    height: 100%;
  }
 
`

export const Homepage = () => {
  const val = useContext(UserContext);
  const socket = useContext(SocketCtx);
  
  return (
    <>
      <Container>
        <Navbar />

         
            <Row>
              <Col>
                <HomepageWrapper>
                  <Title>
                    Perfect partners for{" "}
                    <span>passionate</span>
                    {' '}
                    people
                  </Title>
                  <Subtitle>Teams make great projects. Startup serves as a platform for you to connect with others
                  who have a skillset and share your passions in order to achieve something great.
                  </Subtitle>
                  <ButtonContainer>
                    {!val?.user && <CallToAction><Link to='/login'>Log in</Link></CallToAction>}
                  </ButtonContainer>
                </HomepageWrapper>
              </Col>
            </Row>
            
          
      </Container>
      <WaveContainer fluid>
        <Row>
          <Col>
            <img src={Waves} alt="Wave icon" />

          </Col>
        </Row>
      </WaveContainer>

    </>
  );
}
