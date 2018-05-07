const path = require('path'),
      { VueLoaderPlugin } = require('vue-loader'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      CopyWebpackPlugin = require('copy-webpack-plugin'),
      CleanWebpackPlugin = require('clean-webpack-plugin');

// cache env
const env = process.env.NODE_ENV;

// if development, set sourceMap to true, else false
const sourceMap = (env === 'development');

// build config
const config = {
  // set mode
  mode: env,
  // set entry and output
  entry: {
    main: './src/main.js',
  },
  output: {
    filename: '[name].[hash].js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist', 'tmp'),
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
    // clean dist folder
    new CleanWebpackPlugin(['dist']),
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
        to: '../img',
        ignore: ['.*'],
      },
    ]),
  ],
};

module.exports = config;
