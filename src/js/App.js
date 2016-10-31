import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(){
		super();
<<<<<<< HEAD
		this.state = {val:0};
		this.update = this.update.bind(this);
=======
		this.state = { 
			txt: 'this is the state',
			cat: 0
		}
>>>>>>> parent of 5430a99... React owner ownee relationship
	}
	update() {
		this.setState({val:this.state.val + 1})
	}
	componentWillMount() {
		console.log('mounting')
	}
	render(){
<<<<<<< HEAD
		console.log('rendering!')
		return <button onClick={this.update}>{this.state.val}</button>
	}
	componentDidMount() {
		console.log('mounted')
	}
	componentWillUnmount() {
		console.log('buy')
=======
		return (
			<div>
			<input type="text" 
				onChange={this.update.bind(this)} />
			<h1> {this.state.txt} </h1>
			</div>
		);
>>>>>>> parent of 5430a99... React owner ownee relationship
	}

<<<<<<< HEAD
	class Wrapper extends React.Component {
		constructor(){
			super();
		}
		mount(){
			ReactDOM.render(<App />, document.getElementById('a'))
		}
		unmount(){
			ReactDOM.unmountComponentAtNode(document.getElementById('a'))
		}
		render(){
			return (
				<div>
					<button onClick={this.mount.bind(this)}>Mount</button>
					<button onClick={this.unmount.bind(this)}>Unmount</button>
					<div id="a"></div>
				</div>
			);
		}

	}
}

export default Wrapper



=======
export default App
>>>>>>> parent of 5430a99... React owner ownee relationship
