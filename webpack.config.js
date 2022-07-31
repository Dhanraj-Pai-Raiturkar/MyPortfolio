const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist")
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },

            {
                test: /\.scss$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                  "sass-loader"
                ]
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  }
                ],
            }
        ]
    }
}