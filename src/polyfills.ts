const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

(window as any).process = {
  env: { DEBUG: undefined },
};

module.exports = {
  // Other rules...
  plugins: [
    new NodePolyfillPlugin(),
  ],
};
