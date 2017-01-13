import React from 'react';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import Home from '../components/home'
import Main from '../components/main'

class AppRouter extends React.Component {
	render() {
		return(
			<Router history={ browserHistory }>
			  <Route path="/" component={Main}>
			    <IndexRoute component={Home} />
			  </Route>
    		</Router> 
		)
	}
} 

export default AppRouter;