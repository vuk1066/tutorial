import React from 'react'
import ReactDOM from 'react-dom'
//import Counter from './components/Counter'
import Redux from 'redux'
import { createStore } from 'redux'

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counter = (state = 0, action) => { //this is the reducer
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
} 

const store = createStore(counter);

const Counter = ({value, onIncrement, onDecrement}) =>
  (<div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
   </div>
  );

const render = () => {
  ReactDOM.render( 
    <Counter value={ store.getState() }
             onIncrement={() =>
               store.dispatch({ type: INCREMENT })
             }
             onDecrement={() =>
              store.dispatch({ type: DECREMENT })
             }/>, 
  document.getElementById( 'app' ) 
  );
};

store.subscribe(render);
render();

 let previousState = {
   visibleTodoFilter: 'SHOW_ALL',
   todos: [ 
     {
       text: 'Read the docs.',
       complete: false
     }
   ]
 };

let action = {
   type: 'ADD_TODO',
   text: 'Understand the flow.'
 };

let nextState = todoApp(previousState, action)






