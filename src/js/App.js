import React from 'react';
import { Router, Route, Link, Redirect, browserHistory } from 'react-router';
import AppRouter from './config/AppRouter';
import StateTest from './components/test';

const App = () => { 
  return ( 
  	<div>
    <AppRouter />
    <StateTest />
    </div>
  ) 
}

export default App;