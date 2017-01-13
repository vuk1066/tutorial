import React from 'react';
import { Router, Route, Link, Redirect, browserHistory } from 'react-router';
import AppRouter from './config/AppRouter';

const Links = () =>
   <nav> 
      <Link to="/">Home </Link> 
      <Link to="about">About </Link> 

    </nav> 

const App = () => { 
  return ( 
    <AppRouter />
  ) 
}

export default App;