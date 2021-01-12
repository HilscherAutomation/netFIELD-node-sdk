var path = require('path');
var pkg = require('./package.json');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    library: pkg.library,
    // The following 2 lines configure the build to work on both a node and browser env (Universal Module Definition)
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this'
    // This config is something like a workaround given: https://github.com/webpack/webpack/issues/6522 (open atm)
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: pkg.browserList,
                  },
                  modules: false,
                  useBuiltIns: false,
                  debug: false,
                },
              ],
            ],
          },
        },
      },
    ],
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map',
};
