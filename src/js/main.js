import Vue from 'vue';

// disable dev msg
Vue.config.productionTip = false;

// load global components
import './main-components.js';

// load store
import store from './main-store.js';

// load router
import router from './main-router.js';

// launch App
new Vue({
  store,
  router,
  template: '<app></app>',
}).$mount('#app');
