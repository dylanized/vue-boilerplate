<template>
  <div>

    <app-nav :links='locals.links' />

    <div class='starter-template container pt-5'>
      <app-header title='Vue.js Boilerplate' />
      <p class='lead'>Simple starter project showing off Vue.js, Webpack 4 and Bootstrap 4</p>
    </div>

    <div class='container'>
      <router-view />
    </div>

    <app-footer><p class='navbar-brand mb-0'>Powered by Vue.js</p></app-footer>

  </div>
</template>

<script>
import AppNav from './AppNav';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

export default {
  name: 'App',
  components: {
    AppNav,
    AppHeader,
    AppFooter,
  },
  props: ['locals'],
};
</script>

<style lang='scss'>
// import custom css
@import '@/css/app.scss';
</style>
