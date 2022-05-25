const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
 entry: ['@babel/polyfill', './src/main.js'],
 output: {
     path: __dirname + '/dist',
     filename: 'bungle.js'
 },
 devServer: {
     static: __dirname + '/dist'
 },
 plugins: [
     new HTMLPlugin({
         filename: 'main.html',
         template: './src/main.html'
     }),
     new HTMLPlugin({
        filename: 'index.html',
        template: './src/index.html'
    })
 ],
 resolve: {
     extensions: ['.js']
 },
 module: {
    rules: [
    {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env']
        }
        }
    }
    ]
 }
}