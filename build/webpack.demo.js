const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common.js')

module.exports = {
  entry: {
    app: './demo/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist/demo'),
    filename: '[name]_[hash].js'
  },
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    hot: true
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
    new webpack.HotModuleReplacementPlugin(),
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