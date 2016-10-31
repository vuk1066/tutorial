import React from 'react';

class App extends React.Component { 
	constructor(){
		super();
		this.state = { txt: 'this is the state txt'}
	}	
  	render(){ 
	    return ( 
    	  <h1>{this.state.txt}</h1>
      	); 
  	} 
} 

export default App
