var HtmlWebpackPlugin = require("html-webpack-plugin")
var webpack = require("webpack")

module.exports = {
    entry: { "js/main.js": "main" },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ["es2015", "react"]
                },
                test: /(\.react)?\.js$/
            },
            {
                loader: "style!css?modules&importLoaders=1",//!postcss",
                test: /\.css$/
            },
        ]
    },
    output: {
        filename: "[name]",
        path: "build"
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "src/index.html" }),
        new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV) })
    ],
    resolve: {
        extensions: ["", ".css", ".js", ".react.js"],
        modulesDirectories: ["src", "lib", "node_modules"]
    }
}
