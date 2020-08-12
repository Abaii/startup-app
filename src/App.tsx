import React, { useState, useContext, createContext, useEffect } from "react";
import { createGlobalStyle } from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserContext } from './hooks/UserContext';
import AuthenticatedApp from './Pages/App/AuthenticatedApp';
import { UnauthenticatedApp } from './Pages/App/UnauthenticatedApp';
import axios from "axios";

const GlobalStyle = createGlobalStyle`
  font-family: 'Baloo Bhaina 2',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    --blue-primary: '#4762e6';
    --secondary-color: '#e6e8f2';
    --third-color:'#4bd6f2';
    background-color: var(--secondary-color);
`;

export interface User {
  username: string;
  email: string;
}

const App = () => {
  
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    console.log(user)
    axios.get('http://localhost:3001/whoami', { withCredentials: true }).then(response => setUser(response.data)).catch(err => setUser(null))
  }, [])

  return (
  <Router>
    <GlobalStyle/>
    <Switch>
      <UserContext.Provider value={{ user, setUser }}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </UserContext.Provider>
    </Switch>
      
    
  </Router>
  )
};

export default App;
