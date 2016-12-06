import React from 'react';

class App extends React.Component {
	render(){
		return (
			<Parent>
				<div className="childB"></div>
				<div className="childC"></div>
			</Parent>
		)
	}
}

class Parent extends React.Component {
	render(){
		//let items = this.props.children.map(child => child)
		//let items = React.Children.map(this.props.children, child => child)
		//let items = React.Children.toArray(this.props.children)
		let items = React.Children.forEach(this.props.children, child => console.log(child.props.className))
		console.log(items)
		return null
	}
}

export default App