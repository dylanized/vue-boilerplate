// load Vue library
import Vue from 'vue';
import VueRouter from 'vue-router';

// load components
import App from './components/App';

// register components
Vue.component('App', App);

// load pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';

// register pages
Vue.component('HomePage', HomePage);
Vue.component('AboutPage', AboutPage);
Vue.component('ErrorPage', ErrorPage);

// disable dev msg
Vue.config.productionTip = false;

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
}).$mount('main');
