const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        inline: true, // autorefresh
        contentBase:  path.resolve(__dirname, 'dist'),
        port:55555
    },
});

///webpack v3
module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "public"),
    contentBasePublicPath: "/serve-content-base-at-this-url",
    serveIndex: true,
    watchContentBase: true,
    watchOptions: {
      poll: true,
    },
  },
};

//webpack v4
module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, "static"),
      staticOptions: {},
      // Don't be confused with `devMiddleware.publicPath`, it is `publicPath` for static directory
      // Can be:
      // publicPath: ['/static-public-path-one/', '/static-public-path-two/'],
      publicPath: "/static-public-path/",
      // Can be:
      // serveIndex: {} (options for the `serveIndex` option you can find https://github.com/expressjs/serve-index)
      serveIndex: true,
      // Can be:
      // watch: {} (options for the `watch` option you can find https://github.com/paulmillr/chokidar)
      watch: true,
    },
  },
};
