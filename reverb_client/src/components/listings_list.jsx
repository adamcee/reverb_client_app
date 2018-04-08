'use strict';
import React from 'react';

function ListingsList(props) {
    const { listings } = props;
    if(!listings.length) {
        return null;
    }
    const renderedListings = listings.map((l, i) => <li key={i}>{l.title}</li>);
    return (
        <ul>
            {renderedListings}
        </ul>
    );
}

export default ListingsList;
