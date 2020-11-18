const webpack = require('webpack')
const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: "[name].[hash].js",
        path: path.join(__dirname, "dist"),
    },
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: {
            index: "./index.html",
        },
    },

    resolve: {
        // 引入的默认后缀名,一个个找
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        alias: {
            "@": path.resolve("src"), // 这样配置后 @ 可以指向 src 目录
        },
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "ts-loader"
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
}