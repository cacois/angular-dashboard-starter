const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    context: path.join(__dirname, 'src'),
    entry: [
      'babel-polyfill',
      './app.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    performance: {
        hints: false
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          loader: 'eslint-loader',
          exclude: /node_modules/,
        },{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            plugins: ['transform-runtime'],
            presets: ['es2015', 'stage-0'],
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.json']
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
    ],
};