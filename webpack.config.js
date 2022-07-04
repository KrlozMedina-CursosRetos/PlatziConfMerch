const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/' //Raiz para que funcione el route
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      // {
      //     test: /\.s[ac]ss$/i,
      //     use: [
      //       "style-loader",
      //       "css-loader",
      //       {
      //         loader: "sass-loader",
      //         options: {
      //           // Prefer `dart-sass`
      //           implementation: require("sass"),
      //         },
      //       },
      //     ],
      // },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new miniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
  ],
  devServer: {
    historyApiFallback: true, //Para que funcione route
    // contentBase: path.join(__dirname, 'dist'),
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3005,
  },
};
