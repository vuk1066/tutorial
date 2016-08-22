module.exports = {
    entry: './src/js/main.js',
    output: {
        path: './build',
        filename: 'prod-main.js'
    },
    module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
         }]
    }
 };