module.exports = {
    output: {
        filename: 'index.js',
        sourceMapFilename: 'index.js.map'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    },

    devtool: 'source-map'
};
