<template>
  <div>

    <app-nav :links='locals.links' />

    <app-header>
      <h1>Vue.js Boilerplate</h1>
      <p class='lead'>Simple starter project showing off Vue.js, Webpack 4 and Bootstrap 4</p>
    </app-header>

    <section class='container'>
      <router-view />
    </section>

    <app-footer text='Powered by Vue.js' />

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
