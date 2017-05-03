const express = require("express")
const webpack = require('webpack')

const app = express();

const opn = require("opn")
const webpackDevConf = require('./webpack.dev.config')

let compiler = webpack(webpackDevConf)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackDevConf.output.publicPath,
  quiet: true
})
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})

app.use(devMiddleware)

app.use(hotMiddleware)

let uri = 'http://www.localhost:3030'

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  opn(uri)
})




app.listen(3030,function(){
  
})
