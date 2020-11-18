const webpack = require('webpack')
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

const path = require('path');

module.exports = merge(common,{
  mode: 'production',
  devtool: 'source-map',
  plugins: [
  
    // 打包时候才需要clear
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:  path.join(__dirname, "../public/index.html"),
      filename:'index.html'
    }),
    
    new HtmlWebpackTagsPlugin({ tags: ['a.js', 'b.css'], append: true })
  ],
})