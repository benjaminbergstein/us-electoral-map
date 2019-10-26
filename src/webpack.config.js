const path = require('path');

// const options = mode === 'development'
//   ? { devtool: 'inline-source-map' } : {};

const target = process.env.TARGET;

const entries = {
  html: './src/renderHtml.js',
};

const output = {
  html: '../render.js',
};

module.exports = {
  // ...options,
  entry: entries[target] || './src/index.js',
  output: {
    filename: output[target] || '../index.js',
    path: path.resolve(__dirname),
  },
  externals: {
    fs: 'commonjs fs'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react'],
          },
        }
      },
    ],
  },
};
