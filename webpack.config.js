const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/public",
    filename: "./bundle.js"
  },
  devServer: {
    port: 8080,
    contentBase: "./public"
  },
  module: {
    loaders: [
      {
        text: /.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
          plugins: ["transform-object-rest-spread"]
        }
      }
    ]
  }
};
