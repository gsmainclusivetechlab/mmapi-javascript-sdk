const Dotenv = require('dotenv-webpack');
module.exports ={
    mode: "production",
    output:{
        filename:"main.min.js"
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use:[{loader: 'babel-loader'}],
                exclude: /node-modules/
            }
        ]
    },
    plugins: [
        new Dotenv()
    ]
}