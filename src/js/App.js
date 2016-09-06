import React from 'react';

class App extends React.Component {
	render(){
		return (
			<Button><Heart/> React </Button> 
			);
	}
}
 
class Button extends React.Component {
	render(){
		return (
			<button>{this.props.children}</button>
		);
	}
}

const Heart = () => <span> I love</span>

export default App



