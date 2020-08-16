const config = require('./webpack.common.js')

const newConfig = Object.assign({
  mode: 'production'
}, config)

newConfig.output.filename = 'wape-ui.min.js'

module.exports = newConfig