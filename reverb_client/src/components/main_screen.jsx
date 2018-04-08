'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainScreen extends Component {
    render() {
        return (
            <div>
                <p>Explore the Reverb.com API.</p>
                <ul>
                    <li><Link to="/listings" >Explore Listings</Link></li>
                    <li><Link to="/categories" >Explore Categories</Link></li>
                </ul>
            </div>
        );
    }
}

export default MainScreen;
