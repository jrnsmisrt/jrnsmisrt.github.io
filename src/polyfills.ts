const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  resolve: {
    fallback: {
      "path": require.resolve("path"),
      "tls": require.resolve("tls"),
      "net": require.resolve("net"),
      "querystring": require.resolve("querystring-es3"),
      "crypto": require.resolve('crypto-browserify'),
      "https": require.resolve('https-browserify'),
      "os": require.resolve('os-browserify/browser'),
    }
  },
  // Other rules...
  plugins: [
    new NodePolyfillPlugin(),
  ],
};
