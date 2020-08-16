const config = require('./webpack.common.js')

module.exports = Object.assign({
  mode: 'development',
  devtool: '#eval-source-map',
}, config)