const path = require('path'),
      { VueLoaderPlugin } = require('vue-loader'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      CopyWebpackPlugin = require('copy-webpack-plugin'),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
      UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// cache env
const env = process.env.NODE_ENV;

// set env conditionals
const isProd = (env === 'production'),
      isDev = !isProd;

// build config
const config = {
  // set mode
  mode: env,
  // set entry
  entry: {
    main: './src/main.js',
  },
  // set output
  output: {
    filename: 'tmp/[name].[hash:5].js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  // set external module aliases
  externals: {
    'jquery': 'jQuery',
    'vue': 'Vue',
    'vue-router': 'VueRouter',
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
  // if not prod, set devtool, else leave it undefined
  devtool: (isDev ? 'cheap-module-eval-source-map' : undefined),
  // set required settings
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
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
              sourceMap: isDev,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev,
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
    // load html loader
    new HtmlWebpackPlugin({
      // set it to process index.html
      template: path.join(__dirname, 'src', 'index.html'),
      filename: path.join(__dirname, 'dist', 'index.html'),
      // set it to inject asset tags
      inject: true,
      // if prod, minify html, else dont
      minify: isProd ? {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      } : false,
      // dont re-sort assets
      chunksSortMode: 'none',
    }),
  ],
};

// if prod
if (isProd) {
  // mount CleanWebpackPlugin to clean dist folder
  config.plugins.push(new CleanWebpackPlugin(['dist']));
  // mount MiniCssExtractor
  config.plugins.push(new MiniCssExtractPlugin({
    filename: 'tmp/[name].[chunkhash:5].css',
  }));
  // cache sassLoader
  const sassLoader = config.module.rules.find(({ test }) => test.test('.scss'));
  // replace sassLoader with miniCssExtractor
  sassLoader.use[0] = MiniCssExtractPlugin.loader;
  // manually configure minimizer
  config.optimization.minimizer = [
    // load css minimizer
    new OptimizeCSSAssetsPlugin(),
    // load js minimizer
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
    }),
  ];
  // load copy plugin
  config.plugins.push(new CopyWebpackPlugin([
    // copy img folder
    {
      from: 'src/img',
      to: 'img',
      ignore: ['.*'],
    },
    // copy lib folder
    {
      from: 'src/lib',
      to: 'lib',
      ignore: ['.*'],
    },
  ]));
}

module.exports = config;
