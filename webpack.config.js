var webpack = require('webpack');
var config = {
    context: __dirname + "/app",
    entry: [
        "webpack-dev-server/client?http://localhost:8080",
        "./app.js"
        ],

    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react', 'env']
                }
            }
        ],
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        contentBase:'./dist',
        hot: true
    }
};
module.exports = config;
