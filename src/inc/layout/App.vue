<template>
  <div id='app'>
    <app-header title='Vue.js Boilerplate' />
    <div>
      <app-sidebar :links='locals.links' />
      <main class='col-md-8 col-12 p-1'>
        <router-view />
      </main>
    </div>
    <app-footer><p>Powered by Vue.js</p></app-footer>
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
// import bootstrap css
@import './node_modules/bootstrap/scss/bootstrap.scss';
</style>
