const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, './js/main.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname),
  },
};
