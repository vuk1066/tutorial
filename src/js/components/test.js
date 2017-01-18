import React from 'react';

class StateTest extends React.Component {
  	render(){
	  	return (
	      <div>
	 		<Title />
	      </div>
     	);
  	}
}

const Title = (props) => <h1>Title: {props.txt} </h1>

Title.propTypes = {
	txt(props, propName, component){
		if(!(propName in props)){
			return new Error(`missing ${propName}`)
		}
	}
}

export default StateTest;
