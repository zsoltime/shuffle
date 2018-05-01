const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.min.js',
    globalObject: 'this',
    library: 'shuffle',
    libraryExport: 'default',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
