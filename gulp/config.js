import stream from 'stream';

let config = {
  port: 3000,
  src: {
      index: './src',
      entry: './src/index.jsx',
      html: './src/index.html'
  },
  dest: './dist'
};

export default config;