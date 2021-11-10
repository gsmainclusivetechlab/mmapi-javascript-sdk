const Dotenv = require('dotenv-webpack');
module.exports = {
    mode: 'production',
    output: {
        filename: 'mmsdk.min.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{ loader: 'babel-loader' }],
                exclude: /node-modules/,
            },
        ],
    },
    plugins: [new Dotenv()],
};
