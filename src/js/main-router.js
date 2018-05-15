import Vue from 'vue';
import VueRouter from 'vue-router';

// load router middleware
Vue.use(VueRouter);

// load pages
import pages from './main-pages.js';

// instantiate the router and define routes
const router = new VueRouter({
  mode: 'history',
  base: __dirname, // eslint-disable-line
  routes: [
    { path: '/', component: pages.home },
    { path: '/about', component: pages.about },
    { path: '*', component: pages.error },
  ],
  linkActiveClass: 'active',
});

// export
export default router;
