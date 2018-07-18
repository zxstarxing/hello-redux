import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as types from './actions';
import { bindActionCreators } from 'redux';
import User from './components/user'



class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="jumbotron-heading text-center">{this.props.counter}</h1>
          <p className="text-center">
            <button className="btn btn-primary mr-2" onClick={() => this.props.increment()} >Increase</button>
            <button className="btn btn-danger my-2" onClick={() => this.props.decrement()} >Decrease</button>
          </p>
        </div>
        <User></User>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(types, dispatch);
}

App.propTypes = {
  counter: PropTypes.number.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
