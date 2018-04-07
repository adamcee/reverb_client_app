'use strict';
import React, { Component } from 'react';
import { getReverbJSON } from 'src/reverb_api';

class Listings extends Component {
    state = {
        listings: []
    }

    componentDidMount() {
        getReverbJSON('listings/all')
            .then(json => {
                console.log('Got json! json is: ', json);
            })
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
