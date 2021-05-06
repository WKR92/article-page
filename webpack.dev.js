const path = require("path");
const common = require("./webpack.config")
const { merge } = require("webpack-merge");


module.exports = merge(common, {
    mode: "development",
    devServer: {
        contentBase: "./dist",
        port: 3000,
        host: "127.0.0.1",
        open: true,
      },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "docs"),
        assetModuleFilename: 'images/[name].[hash][ext]'
    }
});