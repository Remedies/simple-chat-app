const path = require('path');

module.exports = {
    entry: {
        app: './client/assets/js/sockets.js',
    },
    output: {
        path: path.resolve(__dirname, './client/assets/js/'),
        filename: 'app.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/env'],
                },
            },
        ],
    },
};
