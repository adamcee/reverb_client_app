'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './src/app';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

module.hot.accept();
