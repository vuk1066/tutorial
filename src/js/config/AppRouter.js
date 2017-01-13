import React from 'react';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import Home from '../components/home';
import Main from '../components/main';
import Profile from '../components/profile';
import Search from '../components/search';

class AppRouter extends React.Component {
	render() {
		return(
			<Router history={ browserHistory }>
			  <Route path="/" component={Main}>
			    <IndexRoute component={Home} />
			    <Route path="/profile" component={Profile} />
			    <Route path="/s" component={Search}>
			    </Route>
			  </Route>
    		</Router> 
		);
	}
}; 

export default AppRouter;