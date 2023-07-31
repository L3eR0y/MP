const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const { VueLoaderPlugin } = require('vue-loader')
const deps = require("./package.json").dependencies
const path = require('path')

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    resolve: {
        extensions: ['.vue', '.ts', '.tsx', '.jsx', '.js', '.json' ],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.pug$/,
                use: 'pug-plain-loader',  
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                  'style-loader',
                  {
                    loader: 'css-loader',
                    options: { importLoaders: 1 }
                  },
                  'sass-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                  appendTsSuffixTo: [/\.vue$/],
                  transpileOnly: true,
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'host',
            filename: 'hostRemoteEntry.entry.js',
            exposes: {
                './HostStore': './src/store/index.ts'
            },
            shared: {
                vue: {
                    singleton: true
                },
                "vue-router": {
                    singleton: true
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
        }),
        new FileManagerPlugin({
            events: {
                onStart: {
                    delete: ['dist']
                }
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new VueLoaderPlugin()
        ],
    devServer: {
        watchFiles: path.join(__dirname, 'src'),
        static: {
          directory: path.join(__dirname),
        },
        historyApiFallback: true,
        compress: true,
        port: 3030,
        hot: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
    },
  };