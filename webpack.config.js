
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: isProduction ? false : 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: 'public/favicon.ico',
      minify: isProduction
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    // Copy static assets
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: '',
          globOptions: {
            ignore: ['**/index.html', '**/favicon.ico'],
          },
        },
      ],
    }),
  ],
  optimization: {
    minimize: isProduction,
  },
};
