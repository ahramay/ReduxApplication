import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {addOneToCounter, subtractOneToCounter} from '../actions';

// import store from '../index';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      x:1
    }
  }

  incHandler(e){
    console.log('Increment')
    this.setState({
      x:1
    })
    this.props.store.dispatch(addOneToCounter())
  }
  decHandler(e){
    console.log('Decrement')
    this.setState({
      x:1
    })
    this.props.store.dispatch(subtractOneToCounter())
  }

  render() {
    return (
      <div className="app container">
        <h1>Counter Example</h1>
        <button 
          className="btn btn-info"
          style ={{marginRight: '20px'}}
          onClick={this.incHandler.bind(this)}
          >
          Increment
        </button>
        <button 
          className= "btn btn-danger"
          onClick={this.decHandler.bind(this)}
          >
          Decrement
        </button>
        <h2>Value: {this.props.store && this.props.store.getState().counter}</h2>
      </div>
    );
  }
};



App.propTypes = {
  //getVideos: PropTypes.func.isRequired,
}