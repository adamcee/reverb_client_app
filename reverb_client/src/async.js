'use strict';
/**
 * Functions for HTTP requests
 */

export function getResource(headers = [], host, endpointUrl) {
    return fetch(`${host}/${endpointUrl}`, {headers: headers})
        .then(handleErrors)
        .then(response => response.json());
}

export function handleErrors(response: Response) {
    if(!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
