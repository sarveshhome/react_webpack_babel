1. npm init

2. In src folder create Index.html, index.js

3.  `npm install react react-dom`

4.  ```<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>```

5. In Index.js

 `import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <h1>Hello World</h1>,
  document.getElementById('root')
);`

6. `npm install webpack webpack-cli webpack-dev-server --save-dev`

7.   Add configuration file

    webpack.config.js

8 . `const path = require('path');

module.exports = {
  //entry property - https://webpack.js.org/configuration/entry-context/#entry
  /* The point or points where to start the application bundling process. 
  If an array is passed then all items will be processed.
    A dynamically loaded module is not an entry point. */
  entry: path.join(__dirname, "src", "index.js"),
  //Configuring the output configuration options tells webpack how to write the compiled files to disk.
  //-- https://webpack.js.org/concepts/output/
  output: {
    path:path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
}`

9. `npm install html-webpack-plugin --save-dev`

10. Add the bundled js file to the HTML file

11. setup babel

    `npm install @babel/core babel-loader --save-dev`

12.  @babel/core  which is the core transpiler. URL - https://babeljs.io/docs/en/babel-core

13.  babel-loader which is a webpack loader that will help webpack to use babel transpiler. 

        URL - https://webpack.js.org/loaders/babel-loader/

14.  

        `module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
    ]
  },`

 15. Rules : https://webpack.js.org/configuration/module/#rule

 16.  `npm install @babel/preset-env @babel/preset-react --save-dev`

 17.  Defining rules for babel

 18.  package.json 

19. Install Jest 

20. `npm install --save-dev jest`

21. `npm run test`

22. `npm install jest --global`

        `"dev": "webpack serve",
  "build": "webpack",`

- what is webpack?

- What is babel?

- what is a transpiler?

