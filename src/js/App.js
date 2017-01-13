import React from 'react';
import { Router, Route, Link, Redirect, browserHistory } from 'react-router';
import AppRouter from './config/AppRouter';

const App = () => { 
  return ( 
    <AppRouter />
  ) 
}

export default App;