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
    --blue-primary: '#4762e6';
    --secondary-color: '#e6e8f2';
    --third-color:'#4bd6f2';
    background-color: var(--secondary-color);
` 
const primaryColor ='#00ad37';
const secondaryColor = '#f2fff7';
const thirdColor = '#4dbf1d';


const App = () => {
  return (
  <>
    <GlobalStyle/>
    <Registration />
  </>
  )
};

export default App;
