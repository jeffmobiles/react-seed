
const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const express = require('express')
const config = require('./webpack.config')
// import favicon from 'serve-favicon'


var app = express()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { 
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true,
}))
app.use(webpackHotMiddleware(compiler))

app.use('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
})


app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})