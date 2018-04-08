'use strict';
import React, { Component } from 'react';
import Listings from 'src/components/listings';
import Categories from 'src/components/categories';
import MainScreen from 'src/components/main_screen';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route path="/" component={MainScreen} />
                        <Route path="/listings" component={Listings} />
                        <Route path="/categories" component={Categories} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
