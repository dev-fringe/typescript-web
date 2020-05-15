const path = require('path');
const merge = require('webpack-merge');
const createDefaultConfig = require('@open-wc/building-webpack/modern-and-legacy-config.js');

const configs = module.exports = createDefaultConfig({ //for ie11
  input: path.resolve(__dirname, './index.html'),
});

module.exports = configs.map(config =>
    merge(config, {
        resolve: {
            extensions: [".ts", ".js"]
          },
          module: {
            rules: [{ test: /\.ts$/, loader: "ts-loader" }]
          },
    }),
  );