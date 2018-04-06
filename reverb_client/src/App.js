'use strict';
/**
 * App entry point
 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainScreen from './components/MainScreen';

class App extends Component {

  render() {
      <Router>
          <Route exact path="/" component={MainScreen}/>
      </Router>

    return (
      <div className="App">
          <MainScreen />
      </div>
    );
  }
}

export default App;
