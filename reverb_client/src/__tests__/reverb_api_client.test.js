'use strict';
import { getListingsAll } from '../reverb_api_client';

test('getListingsAll returns data from GET /listings/all', () => {
    getListingsAll();
});

