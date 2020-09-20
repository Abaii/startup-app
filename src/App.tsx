import React, { useState, useContext, createContext, useEffect } from "react";
import { createGlobalStyle } from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserContext } from './hooks/UserContext';
import AuthenticatedApp from './Pages/App/AuthenticatedApp';
import { UnauthenticatedApp } from './Pages/App/UnauthenticatedApp';
import axios from "axios";
import socketIOClient from 'socket.io-client';

const GlobalStyle = createGlobalStyle`
  font-family: 'Baloo Bhaina 2',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    --blue-primary: '#4762e6';
    --secondary-color: '#e6e8f2';
    --third-color:'#4bd6f2';
    background-color: var(--secondary-color);
  .MuiPaginationItem-sizeLarge {
    font-size: 20px !important;
    padding: 0 20px !important;
  }
`;

export interface User {
  userId: number;
  username: string;
  email: string;
}
export let SocketCtx = createContext<any>(null);

let socket: any = socketIOClient('http://localhost:4000');
const App = () => {
  SocketCtx = createContext(socket);
  
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    axios.get('http://localhost:3001/whoami', { withCredentials: true }).then(response => setUser(response.data)).catch(err => setUser(null))
  }, []);
  
  return (
  <Router>
    <GlobalStyle/>
    <Switch>
      <SocketCtx.Provider value={socket}>
        <UserContext.Provider value={{ user, setUser }}>
          {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </UserContext.Provider>
      </SocketCtx.Provider>
    </Switch>
      
    
  </Router>
  )
};

export default App;
