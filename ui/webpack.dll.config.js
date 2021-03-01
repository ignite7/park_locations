// Path
const path = require("path");

// Plugins
const webpack = require("webpack");

// Module
module.exports = {
  entry: {
    modules: [
      "@react-google-maps/api",
      "axios",
      "react",
      "react-dom",
      "react-icons",
      "react-redux",
      "react-router-dom",
      "redux",
    ],
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    library: "[name]",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: path.join(__dirname, "[name]-manifest.json"),
      context: path.resolve(__dirname, "src", "app"),
    }),
  ],
};
