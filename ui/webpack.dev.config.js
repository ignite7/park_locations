// Path
const path = require("path");

// Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

// Manifest
const manifestModules = require("./modules-manifest.json");

// Module
module.exports = {
  entry: {
    app: path.resolve(__dirname, "src", "index.js"),
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/",
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.webp|png|jpg|gif|ttf$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000,
            name: "[name].[ext]",
            outputPath: "./assets",
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new Dotenv({
      path: path.resolve(__dirname, ".env"),
    }),
    new webpack.DllReferencePlugin({
      manifest: manifestModules,
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
};
