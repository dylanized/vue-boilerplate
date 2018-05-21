import Vue from 'vue';

// define requireComponent helper
const requireComponent = require.context('@', true, /\.vue$/); // eslint-disable-line

// for each component
requireComponent.keys().forEach(filepath => {
  // load file contents
  const contents = requireComponent(filepath);
  // parse component base name
  const basename = filepath
    .replace('.vue', '')
    .split(/[\\/]/)
    .pop();
  // load component
  Vue.component(basename, contents.default || contents);
});
