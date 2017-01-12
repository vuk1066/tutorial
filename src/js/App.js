import React from 'react';
import { Router, Route, Link, Redirect, browserHistory } from 'react-router';

const Home = () => <div><h1>Home</h1><Links /></div>; 
const About = () => <div><h1>About</h1><Links /></div>; 

const Links = () =>
   <nav> 
      <Link to="/">Home </Link> 
      <Link to="about">About </Link> 

    </nav> 

const App = () => { 
  return ( 
    <Router history={ browserHistory }> 
      <Route path="/" component={Home}></Route> 
      <Route path="/about" component={About}></Route> 
    </Router> 
  ) 
}

export default App;