const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'bundle': './src/main.js',
        'graphiql': './src/graphiql.js'
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        // preLoaders: [
        //   {
        //     test: /\.(js|jsx)$/,
        //     exclude: /node_modules/,
        //     loader: 'eslint-loader'
        //   }
        // ],
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: ['babel-loader'],
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.(css)$/,
                loaders: [
                    'style-loader',
                    'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss?sourceMap&sourceComments'
                ]
            },
            {
                test: /\.(scss)$/,
                loaders: ['style-loader', 'css-loader?modules', 'sass-loader']
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                exclude: /node_modules/,
                loader: 'url-loader',
                query: {
                    limit: 10240
                }
            }
        ]
    },
    postcss: () => {
        return [
            /* eslint-disable global-require */
            require('postcss-cssnext'),
            /* eslint-enable global-require */
        ];
    },
    plugins: [

    ],
    devServer: {
        port: 9090,
        cache: false,
        colors: true,
        inline: false
    }
};
