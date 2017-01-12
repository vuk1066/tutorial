import React from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

const Home = () => <div><h1>Home</h1></div>
const HomeBody = () => <div><p>This is the home body</p></div>

const Other = () => <div><h1>Other</h1></div>
const OtherBody = () => <div><p>This is the other body</p></div> 

const Links = () =>
    <nav>
      <Link to="/">Home </Link>
      <Link to="/other">Other </Link>
    </nav>

const Container = (props) =>
  <div><Links /> {props.header}{props.body} </div>

const App = () => {
  return (
    <Router history={ browserHistory }>
      <Route path="/" component={Container}>
        <IndexRoute components={ { header: Home, body: HomeBody } }>
        </IndexRoute>
        <Route path="/other" components={ { header: Other, body: OtherBody } }>
        </Route>
      </Route>
    </Router>
  )
};

export default App;