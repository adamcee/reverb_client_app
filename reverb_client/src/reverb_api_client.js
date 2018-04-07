'use strict';
/***
 * Interact with the Reverb.com API
 */

const BASE_URL = "https://reverb.com/api"

/**
 * GET /listings/all
 * Returns a promise representing the response from the endpoint.
 * @param {object} default {} params - optional query params.
 *  Currently only the query params `page`  and `category` are supported.
 *  @param page {integer} - which page of listings to return
 *  @param {string} category - a category slug from the Reverb API which the endpoint
 *  will filter results by.
 *  Ex: `{page:
 * @returns {promise}  - the fetch http response
 */
export function getListingsAll(params = {}) {
    const page = params.page;
    const category = params.category;

    // we always want pages of 10 results
    let queryParams = '?per_page=' + encodeURIComponent(10);
    if(page) {
        queryParams = '?page=' + encodeURIComponent(page);
    } else if(category) {
        queryParams = '&category=' + encodeURIComponent(category);
    }

    const url = BASE_URL + '/listings/all' + queryParams;
    return fetch('https://reverb.com/api/listings/all');
}

console.log('Getting Listings All: ');
getListingsAll();
