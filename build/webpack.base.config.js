const path = require("path")
const ExtractTextPlugin = require('extract-text-webpack-plugin')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: {
    app: './js/app.js'
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('js')]
      },
      {
        test: /\.css$/,
        //use: ['style-loader','css-loader']
        use: [{
          loader: 'style-loader'
        },{
          loader: 'css-loader'
        }]
      }
    ]
  }
}