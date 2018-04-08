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

        this.makeListingsRequest = this.makeListingsRequest.bind(this);
        this.updateListingsJson = this.updateListingsJson.bind(this);
    }

    componentDidMount() {
        this.makeListingsRequest();
    }

    makeListingsRequest(page = 1) {
        getReverbJSON('listings/all?per_page=' + encodeURIComponent(10) + '&page=' + encodeURIComponent(page))
            .then(json => {
                this.updateListingsJson(json);
            });
    }

    updateListingsJson(json) {
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
    }

    renderListings(listings) {
        console.log('Render listings - ', listings);
        const renderedListings = listings.map((l, i) => <li key={i}>{l.title}</li>
        );
        return renderedListings;
    }

    renderPagination(current_page) {
        const nextPage = current_page + 1;
        const prevPage = current_page - 1;
        const renderedPrevPage =
            <a onClick={() => this.makeListingsRequest(prevPage)}>Prev Page</a>;

        return (
            <div>
                {current_page == 1 ? null : renderedPrevPage}
                <div>Current Page: {current_page}</div>
                <a onClick={() => this.makeListingsRequest(nextPage)}>Next Page</a>
            </div>
        );
    }

    render() {
        const { listings, current_page } = this.state;
        return (
            <div>
                <p>Listings on Reverb.com. You can filter the results by category below.</p>
                <ul>
                    {this.renderListings(listings)}
                </ul>
                {listings.length ? this.renderPagination(current_page) : null}
            </div>
        );
    }
}

export default Listings;
