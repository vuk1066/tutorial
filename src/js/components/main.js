import React from 'react';
import { Router, Route, Link} from 'react-router';

const Main = (props) => (
	<div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2">
            <Link to="/"> Home</Link>
            <Link to="/"> Profile </Link> 
          </div>
        </nav>
        <div className="container">
          {props.children}
        </div>
    </div>
);

export default Main;