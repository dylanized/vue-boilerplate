const path = require('path'),
      { VueLoaderPlugin } = require('vue-loader'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      CopyWebpackPlugin = require('copy-webpack-plugin');

// cache env
const env = process.env.NODE_ENV;

// if development, set sourceMap to true, else false
const sourceMap = (env === 'development');

// build config
const config = {
  // set mode
  mode: env,
  // set entry and output
  entry: path.join(__dirname, 'src', 'main.js'),
  output: {
    filename: 'tmp/[name].[hash].js',
    publicPath: '/',
  },
  resolve: {
    // set extensions to load
    extensions: ['.js', '.vue', '.json'],
    alias: {
      // set alias for vue with template compiler
      'vue$': 'vue/dist/vue.esm.js',
      // set src alias
      '@': path.join(__dirname, '..', 'src'),
    },
  },
  // if sourcemap enabled, set devtool, else leave it undefined
  devtool: (sourceMap ? 'cheap-module-eval-source-map' : undefined),
  // configure dev server
  devServer: {
    contentBase: './src',
  },
  // set required settings
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  // set handling for file types
  module: {
    rules: [
      // configure .vue loading
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // configure .js loading
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'src')],
      },
      // configure .scss loading
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap,
            },
          },
        ],
      },
    ],
  },
  // load plugins
  plugins: [
    // load vue loader
    new VueLoaderPlugin(),
    // load html loader, set it to process index.html
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: path.join(__dirname, 'dist', 'index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
      chunksSortMode: 'none',
    }),
    // load copy plugin
    new CopyWebpackPlugin([
      // set it to copy img folder
      {
        from: 'src/img',
        to: 'img',
        ignore: ['.*'],
      },
      // set it to copy lib folder
      {
        from: 'src/lib',
        to: 'lib',
        ignore: ['.*'],
      },
    ]),
  ],
};

module.exports = config;
