// eslint-disable-next-line no-unused-vars
const path = require('path');
// eslint-disable-next-line no-unused-vars
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// eslint-disable-next-line no-unused-vars
var HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');




module.exports = {
    entry: {
        'bundle.js': [
            path.resolve(__dirname, './src/js/app.js'),
            path.resolve(__dirname, './src/js/index.js')
        ]
    },
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
                        presets: [
                            '@babel/preset-env',
                            '@babel/react'
                        ]
                    }
                }
            }, {
                test: /\.index\.js$/,
                use: ['script-loader']
            }, {
                test: /\.html$/,
                use: ['html-loader']
            }, {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts'
                    }
                }]
            }, {
                test: /\.(png|jpg|svg|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: (url, resourcePath) => {
                            if (/images/.test(resourcePath)) {
                                return `images/${url}`;
                            }
                            return `images/${url}`;
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
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/pug/categories.pug',
            filename: 'categories.html'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/pug/login.pug',
            filename: 'login.html'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/pug/request.pug',
            filename: 'request.html'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/pug/history.pug',
            filename: 'history.html'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/pug/changepass.pug',
            filename: 'changepass.html'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/pug/profile.pug',
            filename: 'profile.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ]
}
