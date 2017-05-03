const webpackMerge = require("webpack-merge")
const webpackBaseConf = require('./webpack.base.config')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

Object.keys(webpackBaseConf.entry).forEach(function (name) {
  webpackBaseConf.entry[name] = ['webpack-hot-middleware/client?noInfo=true&reload=true'].concat(webpackBaseConf.entry[name])
})

module.exports = webpackMerge(webpackBaseConf, {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new ExtractTextPlugin('1.css')
  ]
})