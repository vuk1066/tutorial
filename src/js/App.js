import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render(){
		return <h1> {this.props.txt} </h1>
	}
}

ReactDOM.render(
	<App txt="this is the props text" />,
	document.getElementById('app')
);

export default App