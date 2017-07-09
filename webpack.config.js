const path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: { 
    dashboard : './client/dashboard/index.js',
    train: './client/train/index.js'
  },
  output: {
    path: path.resolve('public/build'),
    filename:  '[name]-app.js'
  },
  resolve: {
     extensions: ['.jsx', '.js', '.css'],
	},
  module: {
    loaders: [
      {
        test: /\.js$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/,
        query: {
          presets:['es2015','react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("css-loader")
      }
    ]
  },
  // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
  plugins: [
        new ExtractTextPlugin("[name]-app.css")
  ],
  devtool: "source-map"
}
