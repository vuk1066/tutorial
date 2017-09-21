import React from 'react'
import ReactDOM from 'react-dom'
import Redux from 'redux'
import { createStore } from 'redux'

class ItemLister extends React.Component {
  constructor() {
    super();
     this.state={items:[]};
  }
  componentDidMount(){
    fetch(`http://jsonplaceholder.typicode.com/photos`)
    .then(result=>result.json())
    .then(items=>this.setState({items}))
  }
  render() {
    return(
      <ul>
          {this.state.items.length ?
            this.state.items.map(item=><li key={item.id}>{item.title} <img src={item.thumbnailUrl} /></li>) 
            : <li>Loading...</li>
          }
      </ul>
   )
  }
}

ReactDOM.render(
  <ItemLister />,
  document.getElementById('app')
);






