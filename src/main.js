// load Vue library
import Vue from 'vue';

// load components
import App from './components/App';

// register components
Vue.component('App', App);

// disable dev msg
Vue.config.productionTip = false;

// launch App
new Vue({
  el: 'main',
  template: '<app></app>',
});
