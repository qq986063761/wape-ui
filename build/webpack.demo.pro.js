const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common.js')

module.exports = {
  mode: 'production',
  entry: {
    app: './demo/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../docs'),
    filename: '[name]_[hash].js'
  },
  module: {
    rules: [
      ...commonConfig.module.rules,
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './demo/index.html',
      filename: 'index.html',
      chunks: ['app']
    })
  ],
  resolve: {
    extensions: commonConfig.resolve.extensions,
    alias: Object.assign({
      'demo': path.resolve(__dirname, '../demo')
    }, commonConfig.resolve.alias)
  }
}