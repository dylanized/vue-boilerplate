#!/usr/bin/env node
const serve = require('webpack-serve');

// load openBrowser helper
const openBrowser = require('./open-browser');

// load config
const config = require('../webpack.config');

// instantiate webpack server
serve({ config, clipboard: false }).then((server) => {
  // build url
  const url = `http://${ server.options.host }:${ server.options.port }`;
  // launch server and open the browser
  server.on('listening', () => openBrowser(url));
});
