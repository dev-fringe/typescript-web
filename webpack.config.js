const resolve = require('path');
const merge = require('webpack-merge');
const createDefaultConfig = require('@open-wc/building-webpack/modern-and-legacy-config.js');

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
    </head>
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
      <header>
        <nav>
          <li><a href="/">Home</a></li>
          <li><a href="/hello/world">Hello {name}</a></li>
        </nav>
      </header>      
        <main></main>
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
              "@view": resolve.resolve("./app/view")
            }            
          },
          module: {
            rules: [
              { 
                test: /\.ts$/, loader: "ts-loader"            
              }
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