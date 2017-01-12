import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

const Page = (props) => 
  <div><h1>{props.location.query.foo || 'Hello'}</h1><Links /></div>

const Links = () =>
    <nav>
      <Link to={ {pathname: '/', query: {message: 'Yo'}} }>link </Link>
    </nav>

const App = () => {
  return (
    <Router history={ hashHistory }>
      <Route path="/" component={Page}> </Route>
    </Router>
  )
}

export default App;