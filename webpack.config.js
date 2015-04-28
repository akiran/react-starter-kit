var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: '#inline-source-map',
  debug: true,
  entry: {
    'app.js': './client/js/app.jsx'
  },
  output: {
    path: path.join(__dirname, 'build', 'js'),
    filename: '[name]',
  },
  module: {
    loaders: [
      {test: /\.jsx$/, loaders: ['babel']},
    ],
  },
  resolve : {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    
  ]
};