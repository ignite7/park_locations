// Path
const path = require("path");

// Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");

// Manifest
const manifestModules = require("./modules-manifest.json");

// Module
module.exports = {
  entry: {
    app: path.resolve(__dirname, "src", "index.js"),
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[fullhash].js",
    chunkFilename: "js/[contenthash].js",
    publicPath: "/",
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
            limit: 9000,
            name: "[hash].[ext]",
            chunkFilename: "[contenthash].[ext]",
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
      filename: "css/[fullhash].css",
      chunkFilename: "css/[contenthash].css",
    }),
    new Dotenv({
      path: path.resolve(__dirname, ".env"),
    }),
    new webpack.DllReferencePlugin({
      manifest: manifestModules,
    }),
  ],
  performance: {
    hints: false,
  },
};
