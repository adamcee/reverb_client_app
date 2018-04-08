'use strict';
import React, { Component } from 'react';
import { getReverbJSON } from 'src/reverb_api';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        };

        this.makeCategoryRequest = this.makeCategoryRequest.bind(this);
        this.updateCategories = this.updateCategories.bind(this);
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
        console.log('Render categories - ', categories);
        const rendered = categories.map((c, i) => <li key={i}>{c.name}</li>
        );
        return rendered;
    }


    render() {
        const { categories } = this.state;
        return (
            <div>
                <p>Categories on Reverb.com.</p>
                <ul>
                    {this.renderCategories(categories)}
                </ul>
            </div>
        );
    }
}

export default Categories;
