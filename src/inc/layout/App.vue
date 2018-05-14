<template>
  <div>

    <nav class='navbar navbar-expand-md navbar-dark bg-dark fixed-top'>
      <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarsExampleDefault' aria-controls='navbarsExampleDefault' aria-expanded='false' aria-label='Toggle navigation'>
        <span class='navbar-toggler-icon'></span>
      </button>

      <div class='collapse navbar-collapse' id='navbarsExampleDefault'>
        <app-sidebar :links='locals.links' />
      </div>
    </nav>

    <main role='main' class='container pt-5'>
      <div class='starter-template'>
        <app-header title='Vue.js Boilerplate' />
        <p class='lead'>Simple starter project showing off Vue.js, Webpack 4 and Bootstrap 4</p>
      </div>

      <router-view />

      <app-footer><p class='navbar-brand mb-0'>Powered by Vue.js</p></app-footer>
    </main>

  </div>
</template>

<script>
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import AppFooter from './AppFooter';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppSidebar,
    AppFooter,
  },
  props: ['locals'],
};
</script>

<style lang='scss'>
// import custom css
@import '@/css/app.scss';
</style>
