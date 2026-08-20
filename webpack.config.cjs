const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: path.resolve(__dirname, 'src', 'index.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true,
  },

  devtool: 'inline-source-map',

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    open: true,
    hot: true,
    port: 8080,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'template.html'),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|avif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.js'],
  },
};
