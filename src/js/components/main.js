import React from 'react';

const Main = (props) => (
	<div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2">
            <p>MENU</p>
          </div>
        </nav>
        <div className="container">
          {props.children}
        </div>
    </div>
);

export default Main;