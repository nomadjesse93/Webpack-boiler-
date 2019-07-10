const path = require("path");
const Htmlwebpackplugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: ["babel-polyfill", "./src/js/app.js"],
  // Directs the output of files bundled by webpack
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/bundle.js"
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    //streams static html from src (dev code) to dist (production code)
    new Htmlwebpackplugin({
      filename: "index.html",
      template: "./src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  node: {
    fs: "empty"
  }
};
