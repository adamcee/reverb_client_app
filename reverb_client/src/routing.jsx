'use strict';
/**
 * Define Routes
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainScreen from './components/main_screen';

const Routes = () => (
    <Router>
        <Route exact path="/" component={MainScreen}/>
    </Router>
);

export default Routes;
