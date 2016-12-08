import React from 'react';
import {Router, Route, Link, hashHistory} from 'react-router';

const Home = (props) => <div><h1> Home </h1><Links /> {props.children} </div>;
const About = (props) => <div><h1> About </h1> {props.children} </div>;
const Contact = () => <div><h1> Contact </h1><Links /></div>;

const Links = () =>
	<nav>
		<Link to="/"> Home </Link>
		<Link to="/about"> About </Link>
		<Link to="about/contact"> Contact </Link>
	</nav>

class App extends React.Component {
	render(){
		return (
			<Router history={ hashHistory }>
				<Route path="/" component={Home}>
					<Route path="about" component={About}>
						<Route path="contact" component={Contact}></Route>
					</Route>
				</Route>
			</Router>
		);
	}
}

export default App;
