import React, { useState, useContext, createContext } from "react";
import { createGlobalStyle } from 'styled-components';
import { Homepage } from './Pages/Homepage/Homepage';
import { Registration } from './Pages/Registration/Registration';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import AuthenticatedApp from './Pages/App/AuthenticatedApp';
import { UnauthenticatedApp } from './Pages/App/UnauthenticatedApp';

import Posts from './Pages/Posts/Posts';
const GlobalStyle = createGlobalStyle`
  font-family: 'Baloo Bhaina 2',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    --blue-primary: '#4762e6';
    --secondary-color: '#e6e8f2';
    --third-color:'#4bd6f2';
    background-color: var(--secondary-color);
`;

interface User {
  username: string;
  loggedIn: boolean;
}
const App = () => {

  const [user, setUser] = useState<User | null>(null);

  const UserContext = createContext(null);
  
  return (
  <Router>
    <GlobalStyle/>
    <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/posts' exact component={Posts} />
        <Route path='/register' exact component={Registration} />
    </Switch>
      
    
  </Router>
  )
};

export default App;
