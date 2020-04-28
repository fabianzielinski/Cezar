var ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['./src/js/script.js', './src/styles/style.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
      loader: 'css-loader?importLoaders=1',
      }),
    },
    {
    test: /\.(sass|scss)$/,
    loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
    }
  ]},
  plugins: [
    new ExtractTextPlugin({
      filename: './[name].bundle.css',
      allChunks: true,
    })
  ],
  devServer: {
    port: 3000,
    contentBase: './dist',
    inline: true //automatyczny update
  }
}