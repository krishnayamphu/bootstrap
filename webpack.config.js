const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
module.exports = {
    mode: 'production',
    watch: true,
    devtool: "source-map",
    entry:{
        app: ['./assets/scss/app.scss', './assets/js/app.js'],
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/assets',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
};