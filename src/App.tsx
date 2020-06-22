import React from "react";
import { createGlobalStyle } from 'styled-components';
import { Homepage } from './Pages/Homepage/Homepage';
import { Registration } from './Pages/Registration/Registration';
import "bootstrap/dist/css/bootstrap.min.css";


import Posts from './Pages/Posts/Posts';
const GlobalStyle = createGlobalStyle`
  font-family: 'Baloo Bhaina 2',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
` 

const App = () => {
  return (
  <>
    <GlobalStyle/>
    <Posts />
  </>
  )
};

export default App;
