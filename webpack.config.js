const resolve = require('path');
const merge = require('webpack-merge');
const createDefaultConfig = require('@open-wc/building-webpack/modern-and-legacy-config.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const configs = module.exports = createDefaultConfig({ //for ie11
  input: resolve.resolve(__dirname, './index.html')
});

module.exports = configs.map(config =>
    merge(config, {
          resolve: {
            extensions: [".ts", ".js"],
            alias: {
              "@view": resolve.resolve("./app/view"),
              "@root": resolve.resolve("./"),
              "@app": resolve.resolve("./app")
            }            
          },
          module: {
            rules: [
              { 
                test: /\.ts$/, loader: "ts-loader"            
              },
              {
                test: /\.css$/,
                use: ['css-loader'],
              },              
            ]              
          }
          // 아래 코드 쓰면 ie에선 안됨.
          // ,
          // output: {
          //   filename: 'bundle.js',
          //   path: resolve.resolve(__dirname, 'dist'),
          // }                  
    }),
  );