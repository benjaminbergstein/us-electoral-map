const path = require('path');

const mode = process.env.DEV === '1' ? 'development' : 'production';

const options = mode === 'development'
  ? { devtool: 'inline-source-map' } : {};

module.exports = {
  ...options,
  mode,
  entry: path.resolve(__dirname, './js/main.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname),
  },
};
