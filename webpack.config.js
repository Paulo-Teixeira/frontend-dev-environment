const path = require("path");
const HtmlWebpackplugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: "./src/index.js",
    print: "./src/print.js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackplugin({
      title: 'Output Management'
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
