'use strict';
import React, { Component } from 'react';
import { getReverbJSON } from 'src/reverb_api';

class Listings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_page: null,
            humanized_param: null,
            listings: [],
            _links: null,
            per_page: null,
            ships_to: null,
            total: null,
            total_pages: null,
        };
    }

    componentDidMount() {
        getReverbJSON('listings/all?per_page=' + encodeURIComponent(10))
            .then(json => {
                //console.log('Got json! json is: ', json);
                this.setState(prevState => ({
                    current_page: json.current_page,
                    humanized_param: json.humanized_param,
                    _links: json._links,
                    listings: json.listings,
                    per_page: json.per_page,
                    ships_to: json.ships_to,
                    total: json.total,
                    total_pages: json.total_pages,
                }));
            })
    }

    renderListings(listings) {
        console.log('Render listings - ', listings);
        const renderedListings = listings.map((l, i) => <li key={i}>{l.title}</li>
        );
        return renderedListings;
    }

    render() {
        const { listings, current_page } = this.state;
        return (
            <div>
                <p>Listings on Reverb.com. You can filter the results by category below.</p>
                <ul>
                    {this.renderListings(listings)}
                </ul>
            </div>
        );
    }
}

export default Listings;
