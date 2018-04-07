/**
 * Webpack config file
 */
const path = require('path');
const webpack = require('webpack');

const config = {
    entry: [
        'react-hot-loader/patch',
        './index.js',
    ],
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            src: path.resolve(__dirname, 'src'),
        }
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
};

module.exports = config;
