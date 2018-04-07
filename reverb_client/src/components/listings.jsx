'use strict';
import React, { Component } from 'react';
import { HEADERS } from 'src/utils';

class Listings extends Component {
    state: {
        listings: []
    }
    render() {
        return (
            <div>
                Listings on Reverb.com. You can filter the results by category below.
            </div>
        );
    }
}

export default Listings;
