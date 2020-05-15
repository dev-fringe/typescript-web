const resolve = require('path');
const merge = require('webpack-merge');
const createDefaultConfig = require('@open-wc/building-webpack/modern-and-legacy-config.js');

const configs = module.exports = createDefaultConfig({ //for ie11
//  input: resolve.resolve(__dirname, '/index.html'),
  input: resolve.resolve(__dirname, './index.ts'),
  webpackIndexHTMLPlugin: {
    template: ({ assets, entries, legacyEntries, variation }) => `
    <!doctype html>
    <html manifest="/cache.manifest">
    <style>
		body {
			font: 80% arial, helvetica, sans-serif;
			margin: 0;
    }
		h1, h2 {
			margin: 0;
    }
    </style>            
      <body> 
        <my-header></my-header>
        <my-navigation></my-navigation>
        <simple-greeting name="Everyone"></simple-greeting>
        <my-footer></my-footer>  
      </body>
    </html>
    `,
  },
});

module.exports = configs.map(config =>
    merge(config, {
          resolve: {
            extensions: [".ts", ".js"]
          },
          module: {
            rules: [{ test: /\.ts$/, loader: "ts-loader" }]              
          }
          // 아래 코드 쓰면 ie에선 안됨.
          // ,
          // output: {
          //   filename: 'bundle.js',
          //   path: resolve.resolve(__dirname, 'dist'),
          // }                  
    }),
  );