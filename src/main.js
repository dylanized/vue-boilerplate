import Vue from 'vue';
import VueRouter from 'vue-router';

// disable dev msg
Vue.config.productionTip = false;

// load global components
import App from './inc/layout/App';

// register global components
Vue.component('App', App);

// load pages
import pages from './main-pages.js';

// load router middleware
Vue.use(VueRouter);

// instantiate the router and define routes
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: pages.home },
    { path: '/about', component: pages.about },
    { path: '*', component: pages.error },
  ],
});

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
  template: '<app :locals="locals"></app>',
  data() {
    return { locals };
  },
}).$mount('#app');
