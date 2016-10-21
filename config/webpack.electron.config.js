// ----------------------------------------------------------------------------
// Copyright (c) 2016--, QIIME development team.
//
// Distributed under the terms of the Modified BSD License.
//
// The full license is in the file LICENSE, distributed with this software.
// ----------------------------------------------------------------------------
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extendConfig = require('./webpack.shared');


module.exports = extendConfig((config) => {
    return {
        output: {
            path: path.resolve(__dirname, '../electron-build'),
            filename: 'js/bundle.js'
        },
        plugins: [...config.plugins,
            new HtmlWebpackPlugin({
                template: 'app/index.html',
                inject: true
            }),
            new ExtractTextPlugin('css/main.css'),
            new CopyWebpackPlugin([
                { from: 'electron/main.js', to: 'main.js' },
                { from: 'electron/server.js', to: 'server.js' },
                { from: 'electron/icon.ico', to: 'icon.ico' },
                { from: 'package.json', to: 'package.json' },
            ]),
        ]
    };
}, false);
