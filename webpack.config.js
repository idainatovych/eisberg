module.exports = {
    output: {
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            }
        ]
    }
};