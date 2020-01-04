const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');




module.exports = {
    entry: './src/app.js',

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }, {
                test: /\.pug$/,
                use: ['pug-loader']
            }, {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, {
                test: /\.html$/,
                use: ['html-loader']
            }, {
                test: /\.(png|jpg|svg|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: (url, resourcePath) => {
                            // if (/furs/.test(resourcePath)) {
                            //     return `imgs/furs/${url}`;
                            // }
                            return `imgs/${url}`;
                        }

                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/pug/index.pug',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/pug/docs.pug',
            filename: 'docs.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ]
}
