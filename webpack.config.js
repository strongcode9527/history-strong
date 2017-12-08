var path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  webpack = require('webpack')

module.exports = {
  entry: {
    index: ['./examples/index.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'/dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader','eslint-loader'],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'inline-source-map',
}