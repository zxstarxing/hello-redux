import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {increment} from './actions';



class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.props.counter}</h1>
        <p className="text-center">
          <button className="btn btn-primary mr-2" onClick={()=>this.props.increment({id:1,name:'zhangxing'})} >Increase</button>
          <button className="btn btn-danger my-2" onClick={this.props.onDecrement} >Decrease</button>
        </p>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return{
      counter:state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (object)=>dispatch(increment(object))
  }
}

App.propTypes = {
   counter:PropTypes.number.isRequired
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
