import React from 'react';

class Repos extends React.Component {
	render(){
	return(
		<div>
			<h2>REPOS</h2>
			<p>REPOS: {this.props.repos}</p>
	    </div>
	);
	}
}

export default Repos;