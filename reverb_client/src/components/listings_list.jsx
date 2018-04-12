'use strict';
import React from 'react';

function ListingsList(props) {
    const { listings } = props;
    if(!listings.length) {
        return null;
    }
    const renderedListings = listings.map((l, i) => {
        const href = l.photos[0]._links.thumbnail.href;
        return <li key={i}>{l.title}<img src={href}/></li>
    });
    return (
        <ul>
            {renderedListings}

        </ul>
    );
}

export default ListingsList;
