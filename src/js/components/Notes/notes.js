import React from 'react';

class Notes extends React.Component {
	render(){
	return (
		<div>
			<h2>NOTES</h2>
			Notes: <p>{this.props.notes}</p>
	    </div>
	);
	}
}

export default Notes;