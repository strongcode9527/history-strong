const path = require('path') 


module.exports = {
  entry: {
    index: ['./examples/index.js']
  },
  output: {
    library: "MyLibrary",
    libraryTarget: "amd"
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
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'inline-source-map',
}