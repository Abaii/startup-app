import React, { useContext, useState, useEffect } from 'react';
import {
  NavRow,
  Title,
  Logo,
  TitleWrapper, NavButtonWrapper,
  NotiWrapper,
  NewNotiSymbol
} from './Navbar.components';
import { CallToAction, SecondaryButton } from '../Button/Button.components';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../hooks/UserContext';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { SocketCtx } from '../../App';
import NotificationsDropdown from '../NotificationsDropdown/NotificationsDropdown';
import { URL } from '../../common/constants';

export const Navbar = () => {

  const userContext = useContext(UserContext);
  const socket = useContext(SocketCtx);
  const userId = () => userContext?.user?.userId && userContext.user.userId
  const isLoggedIn = !(userContext?.user === null);
  const history = useHistory();
  const onClick = 
    isLoggedIn ?
      () => axios.delete('http://localhost:3001/logout', { withCredentials: true })
      .then(() => {
        userContext?.setUser(null);
        socket.emit('logout');
      })
    : () => history.push('/register');
  const [showDropdown, setShowDropdown] = useState(false);
  const [newNotification, setNewNotification] = useState(false);
  const [notifications, setNotifications] = useState([])
  socket.on('get-noti', () => {
    setNewNotification(true);
  });
  const mockedNotis = [{ message: 'Dave wants to connect'}];

  useEffect(() => {
    (async() => {
      axios.get('http://localhost:3001/notiflag', { withCredentials: true }).then(res => setNewNotification(res.data.notification_flag)).catch(err => console.log(err));
      const id = userId();
      console.log(id, 'id')
      if (id) {
        console.log('hit', id)
        axios.post(`${URL}/allnotis`, { receiverId: id }, { withCredentials: true }).then(res => setNotifications(res.data.data)).catch(err => console.log(err));
      }
    })();
    
  },[]);

  const markAsRead = async () => {
    setShowDropdown(!showDropdown);
    if (newNotification && userId()) {
      setNewNotification(false);
      axios.post('http://localhost:3001/newnotification', { notification_flag: false, id: userId() }, { withCredentials: true });
    }
  };

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
          <NotiWrapper>
            {isLoggedIn && <SecondaryButton onClick={() => markAsRead()}> Notifications {newNotification && <NewNotiSymbol />}</SecondaryButton>}
            {showDropdown && <NotificationsDropdown notifications={notifications} />}
          </NotiWrapper>
          <CallToAction onClick={onClick} >{isLoggedIn ? 'Log out' : 'Sign up'}</CallToAction>

        </NavButtonWrapper>
      </Col>
    </NavRow>
  );
}
