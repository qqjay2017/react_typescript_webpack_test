const webpack = require('webpack')
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

const mode = 'production'
const {htmlWebpackPlugin} = require('./htmlWebpackPlugin') 

module.exports = merge(common,{
  mode,
  devtool: 'source-map',
  plugins: [
    // 打包时候才需要clear
    new CleanWebpackPlugin(),
    htmlWebpackPlugin(mode),
  ],
})