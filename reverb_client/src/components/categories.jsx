'use strict';
import React, { Component } from 'react';
import { getReverbJSON } from 'src/reverb_api';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            filterBy: "",
        };

        this.makeCategoryRequest = this.makeCategoryRequest.bind(this);
        this.updateCategories = this.updateCategories.bind(this);
        this.onFilterByChange = this.onFilterByChange.bind(this);
    }

    componentDidMount() {
        this.makeCategoryRequest();
    }

    makeCategoryRequest() {
        getReverbJSON('categories/flat')
            .then(json => {
                this.updateCategories(json);
            });
    }

    updateCategories(json) {
        this.setState(prevState => ({
            categories: json.categories,
        }));
    }

    renderCategories(categories) {
        const rendered = categories.map((c, i) => <li key={i}>{c.full_name}</li>
        );
        return rendered;
    }

    onFilterByChange(event) {
        const updated =  event.target.value;
        this.setState(prev => ({
            filterBy: updated,
        }));
    }


    render() {
        const { categories, filterBy } = this.state;
        const filteredCategories = categories.filter(cat => cat.full_name.toLowerCase().includes(filterBy.toLowerCase()));
        return (
            <div>
                <p>Categories on Reverb.com.</p>
                <label>
                    Filter by:
                    <input type="text" value={filterBy} onChange={this.onFilterByChange} />
                </label>
                <ul>
                    {this.renderCategories(filteredCategories)}
                </ul>
            </div>
        );
    }
}

export default Categories;
