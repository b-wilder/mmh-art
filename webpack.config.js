const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: ''
            }
          }
        ]
      },
      {
        test: /\.(woff|eot|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          "css-loader"
        ]
      },
      {
          test: /\.ttf$/,
          use: [
            {
              loader: 'ttf-loader',
              options: {
                name: './fonts/[hash].[ext]',
              },
            },
          ]
      }/*,
      {
        test: /^(templatemo_main|jquery\.backstretch\.min)\.js$/,
        loader: 'imports?jQuery=jquery,$=jquery,this=>window'
      }*/
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      inject: 'head',
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({filename:"styles.css"}),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
