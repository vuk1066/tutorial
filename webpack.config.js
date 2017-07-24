var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
module.exports = {
    entry: './src/js/main.js',
    output: {
        path: './build',
        filename: 'prod-main.js',
        publicPath: 'index.html'
    },
    resolve: {
        alias: {
            'rxjs': 'rxjs-es'
        }
    },
    devServer: {
        inline: true,
        port: 3000
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['public'] }
        })
    ],
    module: {
         loaders: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
          }
        ]
    }
 };