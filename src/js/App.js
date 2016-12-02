import React from 'react';

const HOC = (InnerComponent) => class extends React.Component {
	constructor(){
		super();
		this.state = {count: 0}
	}

	update(){
		this.setState({count: this.state.count + 1})
	}

	//adding a component lifecycle method
	componentWillMount(){
		console.log('will mount')
	}

	render(){
		return(
			<InnerComponent 
				{...this.props}  //to make sure the childern's props are coming through
				{...this.state}
				update={this.update.bind(this)} />
				
			)
	}
}

class App extends React.Component {
	render(){
		return (
			<div>
				<Button>button </Button>
				<hr/>
				<LabelHOC>label</LabelHOC>
			</div>
		)
	}
}

const Button = HOC((props) => 
	<button onClick={props.update}>{props.children} - {props.count} </button>
)

class Label extends React.Component {
	render(){
		return (
			<label onMouseMove={this.props.update}>{this.props.children} - {this.props.count}</label>
		)
	}
}

const LabelHOC = HOC(Label)

export default App