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
            categories: [],
        };

        this.makeListingsRequest = this.makeListingsRequest.bind(this);
        this.updateListingsData = this.updateListingsData.bind(this);
        this.updateCategories = this.updateCategories.bind(this);
    }

    componentDidMount() {
        this.makeListingsRequest();
        getReverbJSON('categories/flat')
            .then(json => {
                this.updateCategories(json);
            });
    }

    makeListingsRequest(opts = {}) {
        const page = opts.page ? opts.page : 1;
        const catUUID = opts.catUUID ? opts.catUUID : null;
        let url = 'listings/all?per_page=' + encodeURIComponent(10) + '&page=' + encodeURIComponent(page);
        if(catUUID) {
            url = url + '&category_uuid=' + encodeURIComponent(catUUID);
        }
        getReverbJSON(url)
            .then(json => {
                this.updateListingsData(json);
            });
    }

    updateListingsData(json) {
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

    updateCategories(json) {
        this.setState(prevState => ({
            categories: json.categories,
        }));
    }

    renderListings(listings) {
        if(!listings.length) {
            return null;
        }

        console.log('Render listings - ', listings);
        const renderedListings = listings.map((l, i) => <li key={i}>{l.title}</li>
        );
        return renderedListings;
    }

    renderPagination(current_page) {
        if(!current_page) {
            return null;
        }

        const nextPage = current_page + 1;
        const prevPage = current_page - 1;
        const renderedPrevPage =
            <a onClick={() => this.makeListingsRequest({page: prevPage})}>Prev Page</a>;

        return (
            <div>
                {current_page == 1 ? null : renderedPrevPage}
                <div>Current Page: {current_page}</div>
                <a onClick={() => this.makeListingsRequest({page: nextPage})}>Next Page</a>
            </div>
        );
    }

    renderCategoryOptions(categories) {
        if(!categories.length) {
            return null;
        }
        const cats = categories.map((cat, i) =>
            <option value={cat.uuid} key={i}>{cat.name}</option>
        );

        return (
            <select> 
                {cats}
            </select>
        );
    }

    render() {
        const { listings, current_page, categories } = this.state;
        return (
            <div>
                <p>Listings on Reverb.com. You can filter the results by category below.</p>
                {this.renderCategoryOptions(categories)}
                <ul>
                    {this.renderListings(listings)}
                </ul>
                {listings.length ? this.renderPagination(current_page) : null}
            </div>
        );
    }
}

export default Listings;
