'use strict';
import React, { Component } from 'react';
import Listings from 'src/components/listings';

class App extends Component {
    render() {
        return (
            <div>
                <p>This is the main screen.</p>
                <Listings />
            </div>
        );
    }
}

export default App;
