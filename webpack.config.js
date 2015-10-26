module.exports = {
    entry: './index.jsx',
    output: {
        filename: './site/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel?plugins=babel-plugin-rewire',
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map'
}