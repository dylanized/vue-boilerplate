const { VueLoaderPlugin } = require('vue-loader'),
      path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

// cache env
const env = process.env.NODE_ENV;

const config = {
  // basic settings
  entry: path.join(__dirname, 'src', 'main.js'),
  mode: env,
  output: {
    publicPath: '/',
  },
  // required settings
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  // set handling for file types
  module: {
    rules: [
      // .vue
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // .js
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'src')],
      },
      // .scss
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  // load plugins
  plugins: [
    // vue loader
    new VueLoaderPlugin(),
    // index.html loader
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'static', 'index.html'),
      filename: path.join(__dirname, 'dist', 'index.html'),
      inject: true,
    }),
  ],
};

module.exports = config;
