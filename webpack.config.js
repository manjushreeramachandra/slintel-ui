const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');

  module.exports = {
    mode: 'development',
    entry: {
      app: './src/index.js'
    },
    devtool: 'inline-source-map',
devServer: {
     contentBase: './dist',
   },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader',
          options: {
            limit: 8192,
            name:'[name].[ext]',
            outputPath:'assets' 
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                minimize: true,
              }
            }
          ]
        },
        {
          test: /\.(png |svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
      ],
    },
    plugins: [
     // new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }), 
      new HtmlWebpackPlugin({
        title: 'Slintel',
        template: "./src/index.html",
        filename: "./index.html"
      }),
    ],
  };