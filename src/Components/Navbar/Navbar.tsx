import React from 'react';
import {
  NavRow,
  Title,
  Logo,
  TitleWrapper, NavButtonWrapper,
} from './Navbar.components';
import { CallToAction, SecondaryButton } from '../Button/Button.components';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Navbar = () => (
  <NavRow>
    <Col xs={3}>
      <TitleWrapper>
        <Logo />
        <Title>Startup</Title>
      </TitleWrapper>
    </Col>
    <Col>
      <NavButtonWrapper>
        <SecondaryButton><Link to='/'>Home</Link></SecondaryButton>
        <SecondaryButton><Link to='/posts'>Posts</Link></SecondaryButton>
        <CallToAction><Link to='/register'>Sign up</Link></CallToAction>

      </NavButtonWrapper>
    </Col>
  </NavRow>
);
