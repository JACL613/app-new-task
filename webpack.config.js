const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname,'App'),
    filename: 'scripts/main.bundle-[hash].js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader' },
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          { loader: 'sass-loader'},
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'static/img/[name].[hash:8].[ext]',
        },
      }
    ],
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },

  // EVIROMENT MODE
  mode: process.env.NODE_ENV || 'development',
  
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: path.join(__dirname,'public','index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash].css",
    })
  ]
};