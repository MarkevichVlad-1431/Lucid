'use strict';

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge([
  common,
  {
    mode: 'production',
    optimization: {
      minimizer: [new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false,
          },
        },
        cache: true,
        parallel: true,
        sourceMap: true,
      })],
    },
  },
]);
