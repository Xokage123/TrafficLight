const paths = require('../paths.cjs')
const {
    merge
} = require('webpack-merge')
const common = require('./common.cjs')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    output: {
        filename: 'js/[name].[contenthash].bundle.js',
        publicPath: './'
    },
    module: {
        rules: [{
            test: /\.(c|sa|sc)ss$/i,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                {
                    loader: "sass-loader",
                    options: {
                        implementation: require("sass")
                    }
                }
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: '[id].css',
            linkType: false
        }),

        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i
        })
    ],
    optimization: {
        runtimeChunk: 'single'
    },
    performance: {
        hints: 'warning',
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
})