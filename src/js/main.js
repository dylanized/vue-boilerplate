import Vue from 'vue';

// disable dev msg
Vue.config.productionTip = false;

// load global components
import './main-inc.js';

// load router
import router from './main-router.js';

// build locals
const locals = {
  links: [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/error', text: 'Error' },
  ],
};

// launch App
new Vue({
  router,
  data() {
    return { locals };
  },
  template: '<app :locals="locals"></app>',
}).$mount('#app');
