const webpack = require('webpack')
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require('path');


module.exports = merge(common,{
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "../dist"),
    historyApiFallback: {
      index: "./index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:  path.join(__dirname, "../public/index.html"),
      filename:'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
})