const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

// Choosing modes
let mode = 'development'
let HMR = true

if (process.env.NODE_ENV === 'production') {
    mode = 'production'
    HMR = false
}

console.log(mode + ' : mode')
console.log(HMR + ' : HMR')
// Choosing modes end

module.exports = {
    mode: mode,
    entry: './src/index.js',
    stats: "errors-only",
    devtool: 'inline-source-map',

    output: {
        filename: 'bundle.js',
    },

    devServer: {
        static: './dist',
        hot: HMR,
        port: 3001,
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Практическая работа 13.7 (HW-03)',
            template: './src/index.html',
        }),
        new ESLintPlugin(),
    ],

    performance: {
        hints: false
    }
}