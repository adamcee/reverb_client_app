'use strict';
import React, { Component } from 'react';
import { getReverbJSON } from 'src/reverb_api';
import ListingsList from 'src/components/listings_list';

class Listings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_page: null,
            listings: [],
            total_pages: null,
            categories: [],
            filterByCategoryId: null,
        };

        this.makeListingsRequest = this.makeListingsRequest.bind(this);
        this.updateStateWithResponse = this.updateStateWithResponse.bind(this);
        this.updateCategories = this.updateCategories.bind(this);
        this.renderPagination = this.renderPagination.bind(this);
        this.renderCategoryOptions = this.renderCategoryOptions.bind(this);
        this.onCategoryChangeHandler = this.onCategoryChangeHandler.bind(this);
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
        const category_uuid = opts.category_uuid ? opts.category_uuid : null;
        let url = 'listings/all?per_page=' + encodeURIComponent(10) + '&page=' + encodeURIComponent(page);
        if(category_uuid) {
            url = url + '&category_uuid=' + encodeURIComponent(category_uuid);
        }
        getReverbJSON(url)
            .then(json => {
                this.updateStateWithResponse(json, category_uuid);
            });
    }

    updateStateWithResponse(json, category_uuid) {
        this.setState(prevState => ({
            current_page: json.current_page,
            listings: json.listings,
            total_pages: json.total_pages,
            filterByCategoryId: category_uuid,
        }));
    }

    updateCategories(json) {
        this.setState(prevState => ({
            categories: json.categories,
        }));
    }

    renderPagination() {
        const { current_page, filterByCategoryId, total_pages } = this.state;
        if(!current_page) {
            return null;
        }

        const optsNextPage = {
            page: current_page + 1,
            category_uuid: filterByCategoryId
        };
        const optsPrevPage = {
            page: current_page - 1,
            category_uuid: filterByCategoryId,
        };

        const renderedPrevPage =
            <a onClick={() => this.makeListingsRequest(optsPrevPage)}>Prev Page</a>;

        return (
            <div>
                {current_page == 1 ? null : renderedPrevPage}
                <div>Current Page: {current_page} / {total_pages}</div>
                <a onClick={() => this.makeListingsRequest(optsNextPage)}>Next Page</a>
            </div>
        );
    }

    renderCategoryOptions(categories) {
        const { filterByCategoryId } = this.state;
        const selectVal = filterByCategoryId | "default";
        if(!categories.length) {
            return null;
        }

        const cats = categories.map((cat, i) =>
            <option value={cat.uuid} key={i}>{cat.name}</option>
        );

        return (
            <select value={selectVal} onChange={(e) => this.onCategoryChangeHandler(e)} >
                <option value="default" key={9999999}>-----</option>
                {cats}
            </select>
        );
    }

    onCategoryChangeHandler(e) {
        this.makeListingsRequest({category_uuid: e.target.value});
    }

    render() {
        const { listings, categories } = this.state;
        return (
            <div>
                <p>Listings on Reverb.com. You can filter the results by category below.</p>
                {this.renderCategoryOptions(categories)}
                <ListingsList listings={listings} />
                {listings.length ? this.renderPagination() : null}
            </div>
        );
    }
}

export default Listings;
