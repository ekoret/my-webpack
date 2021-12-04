const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//Change these paths per project
const cssPath = './css';
const jsPath = './js';

//Update entry points for files to be included in bundling
const entryPoints = {
    'main': `${jsPath}/main.js`,
    'styles': `${cssPath}/styles.scss`,
}

module.exports = {
    entry: entryPoints,
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/dev'),
    },

    plugins: [new MiniCssExtractPlugin()],

    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    //without additional settings, this will reference .babelrc in the current folder
                    loader: 'babel-loader',
                }
            }
        ],
    },

    devtool: 'source-map',

}