const path = require('path');

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
}