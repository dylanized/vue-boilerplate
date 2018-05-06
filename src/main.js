import Vue from 'vue';
import VueRouter from 'vue-router';

// disable dev msg
Vue.config.productionTip = false;

// load components
import App from './inc/layout/App';

// register components
Vue.component('App', App);

// load pages
import HomePage from './inc/pages/HomePage';
import AboutPage from './inc/pages/AboutPage';
import ErrorPage from './inc/pages/ErrorPage';

// register pages
Vue.component('HomePage', HomePage);
Vue.component('AboutPage', AboutPage);
Vue.component('ErrorPage', ErrorPage);

// load router middleware
Vue.use(VueRouter);

// instantiate the router and define routes
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '*', component: ErrorPage },
  ],
});

// launch App
new Vue({
  router,
  template: '<app></app>',
}).$mount('#app');
