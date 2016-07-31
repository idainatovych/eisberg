import path from 'path';

module.exports = {
    output: {
        filename: 'index.js',
        sourceMapFilename: 'index.js.map'
    },
    module: {
      preLoaders: [{
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, "src/js")],
        exclude: /node_modules/,
        loader: 'jscs-loader'
      }],
      loaders: [{
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }]
    },

    devtool: 'source-map'
};
