const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const autoprefixer = requre('autoprefixer');

const config = {
    entry: './src/quill-word-count.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'quill-word-count.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                    options: {
                        minimize: true || {/* CSSNano Options */}
                    } 
                }, {
                    loader: 'sass-loader',
                }]
            })
        },
        {
            test: /\.js$/,
            include: [
                path.resolve(__dirname, "src/")
            ],
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [['es2015', {modules: false}],]
                }
            }
        }
        ]
    },
    plugins: [
        new ExtractTextPlugin('quill-word-count.css'),
    ]
};

module.exports = config;