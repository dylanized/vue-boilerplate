import Vue from 'vue';
import VueRouter from 'vue-router';

// load router middleware
Vue.use(VueRouter);

// load page components
import HomePage from '@/inc/pages/HomePage';
import AboutPage from '@/inc/pages/AboutPage';
import ErrorPage from '@/inc/pages/ErrorPage';

// instantiate the router and define routes
const router = new VueRouter({
  mode: 'history',
  base: __dirname, // eslint-disable-line
  routes: [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '*', component: ErrorPage },
  ],
  linkActiveClass: 'active',
});

// export
export default router;
