import React from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

const Outer = (props) => <div><h1>Our Site</h1><Links />{props.children}</div>;
const About = () => <div><h1>About</h1></div>;
const Contact = () => <div><h1>Contact</h1></div>;

const Links = () =>
    <nav>
      <Link to="/">Home </Link>
      <Link to="/about">About </Link>
      <Link to="/contact">Contact </Link>
    </nav> 


const App = () => {
  return (
    <Router history={ browserHistory }>
      <Route path="/" component={Outer}>
        <IndexRoute component={About}></IndexRoute>
        <Route path="contact" component={Contact}></Route>
      </Route>
    </Router>
  )
};

export default App;