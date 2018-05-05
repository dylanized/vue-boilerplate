// load Vue library
import Vue from 'vue';

// load App component
import App from './App';

console.log(App);

// disable dev msg
Vue.config.productionTip = false;

// launch App
new Vue({
  el: 'main',
  components: { App },
  template: '<App></App>',
});
