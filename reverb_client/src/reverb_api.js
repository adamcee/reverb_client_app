'use strict';
/**
 * Interact with the Reverb.com API
 */
import { getResource } from 'src/async';

const HEADERS = new Headers({
    'Accept-Version': '3.0',
    'Content-Type': 'hal+json',
    'Accept': 'hal+json',
});

const HOST = 'https://reverb.com/api'

export function getReverbJSON(endpointUrl) {
    return getResource(HEADERS, HOST, endpointUrl);
}
