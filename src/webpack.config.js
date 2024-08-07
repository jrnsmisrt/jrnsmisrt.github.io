const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  resolve: {
    fallback: {
      "path": require.resolve("path"),
      "tls": require.resolve("tls"),
      "net": require.resolve("net"),
      "os": require.resolve("os-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "querystring": require.resolve("querystring-es3"),
    }
  },
  // Other rules...
  plugins: [
    new NodePolyfillPlugin({
      additionalAliases: ['os', 'crypto', 'querystring' ,'https', 'path']
    }),
  ],
};
