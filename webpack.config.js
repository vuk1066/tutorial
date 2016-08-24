module.exports = {
    entry: './src/js/main.js',
    output: {
        path: './build',
        filename: 'prod-main.js'
    },
    resolve: {
        alias: {
            'rxjs': 'rxjs-es'
        }
    },
    module: {
         loaders: [{
            test: /\.js$/,
             exclude: /(node_modules(?!\/rxjs))/,
            loader: 'babel-loader',
         }]
    }
 };