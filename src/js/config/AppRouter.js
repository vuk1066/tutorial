import React from 'react';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';
import Home from '../components/home';
import Main from '../components/main';
import Profile from '../components/profile';

class AppRouter extends React.Component {
	render() {
		return(
			<Router history={ hashHistory }>
			  <Route path="/" component={Main}>
			    <IndexRoute component={Home} />
			    <Route path="/profile/:username" component={Profile} />
			  </Route>
    		</Router> 
		);
	}
}; 

export default AppRouter;