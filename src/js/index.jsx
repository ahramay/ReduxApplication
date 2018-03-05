import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';

import {
	createStore,

} from 'redux';

import reducers from './reducers';

let store = createStore(reducers)

ReactDOM.render(
  <App store={store} />,
  document.querySelector('#app')
);

export default store;





















// // const reducer = function(state = 0, action){
// // 	if (action.type === 'addOne') {
// // 	var newState = state + action.payload
// // 	console.log('New State is: ', newState)
// // 	return newState;
// // 	}else if(action.type === 'subtractOne'){
// // 		var newState = state - action.payload
// // 		console.log('New State is: ', newState)
// // 		return newState;
// // 	}else if (action.type === 'newValue') {
// // 		var newState = action.payload;	
// // 		console.log('New State is: ', newState)
// // 		return newState;
// // 	}
// // 	return state;
// // };

// // let store = createStore(reducer);
// // store.dispatch({
// // 							type: 'addOne', //type is reserved
// // 							payload: 1
// // 							}); //change value of state
// // console.log('State Value: ', store.getState()) //read value of state
// // store.dispatch({
// // 	type: 'subtractOne',
// // 	payload: 1
// // })
// // store.dispatch({
// // 	type: 'subtractOne',
// // 	payload: 1
// // })

// // store.dispatch({
// // 	type: 'newValue',
// // 	payload: 6
// // })



// const reducer = function(state = {}, action){
// 	switch(action.type){
// 		case 'addOne':
// 			if (state.number === undefined) {
// 				var newState = {...state, number:action.payload}
// 			}else{
// 				var newState = {...state, number: state.number + action.payload}
// 			}
// 			console.log(newState)
// 			return newState;

// 		case 'newValue':
// 			var newState = {...state, number:action.payload}	
// 			console.log('New State is: ', newState)
// 			return newState;		
// 	}
// 	return state;
// };

// let store = createStore(reducer);
// store.dispatch({
// 							type: 'addOne', //type is reserved
// 							payload: 1
// 							}); //change value of state
// // console.log('State Value: ', store.getState()) //read value of state
// store.dispatch({
// 	type: 'addOne',
// 	payload: 1
// })
// store.dispatch({
// 	type: 'addOne',
// 	payload: 1
// })

// store.dispatch({
// 	type: 'newValue',
// 	payload: 1
// })