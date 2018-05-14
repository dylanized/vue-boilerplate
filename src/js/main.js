import Vue from 'vue';

// disable dev msg
Vue.config.productionTip = false;

// load global components
import './main-inc.js';

// load router
import router from './main-router.js';

// load locals
import locals from './main-locals.js';

// launch App
new Vue({
  router,
  template: '<app :locals="locals"></app>',
  data() {
    return { locals };
  },
}).$mount('#app');
