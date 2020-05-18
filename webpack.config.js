const resolve = require('path');
const merge = require('webpack-merge');
const createDefaultConfig = require('@open-wc/building-webpack/modern-and-legacy-config.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const configs = module.exports = createDefaultConfig({ //for ie11
//  input: resolve.resolve(__dirname, '/index.html'),
  input: resolve.resolve(__dirname, './index.ts'),
  webpackIndexHTMLPlugin: {
    template: ({ assets, entries, legacyEntries, variation }) => `
    <!doctype html>
    <html lang="ko" manifest="/cache.manifest">
    <head>
      <meta charset="utf-8">    
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />      
      <link rel="icon" href="data:;base64,iVBORw0KGgo=">      
    </head>          
      <body> 
      <my-header></my-header>      
      <header>
        <nav>
          <li><a href="/">Home</a></li>
          <li><a href="/hello/world">Hello {name}</a></li>
        </nav>
      </header>      
        <main></main>
        <my-footer></my-footer>            
      </body>
    </html>
    `,
  },
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