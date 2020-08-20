import React, { useContext } from 'react';
import {
  NavRow,
  Title,
  Logo,
  TitleWrapper, NavButtonWrapper,
} from './Navbar.components';
import { CallToAction, SecondaryButton } from '../Button/Button.components';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../hooks/UserContext';
import axios from 'axios'
import { useHistory } from 'react-router-dom';

export const Navbar = () => {

  const userContext = useContext(UserContext);
  const isLoggedIn = !(userContext?.user === null);
  const history = useHistory();
  const onClick = 
    isLoggedIn ?
       () => axios.delete('http://localhost:3001/logout', { withCredentials: true }).then(() => userContext?.setUser(null))
    : () => history.push('/register')
  
  return (
    <NavRow>
      <Col xs={3}>
        <TitleWrapper>
          <Logo />
          <Title>Startup</Title>
        </TitleWrapper>
      </Col>
      <Col>
        <NavButtonWrapper>
          <SecondaryButton><Link to={isLoggedIn ? '/profile' : '/'}>{isLoggedIn ? 'Your Profile' : 'Home'}</Link></SecondaryButton>
          <SecondaryButton><Link to='/posts'>Posts</Link></SecondaryButton>
          { isLoggedIn && <SecondaryButton><Link to='/new'>Create post</Link></SecondaryButton>}
          <CallToAction onClick={onClick} >{isLoggedIn ? 'Log out' : 'Sign up'}</CallToAction>

        </NavButtonWrapper>
      </Col>
    </NavRow>
  );
}
