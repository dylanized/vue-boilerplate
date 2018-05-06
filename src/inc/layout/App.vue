<template>
  <div id='app'>
    <app-header title='Vue.js Boilerplate'></app-header>
    <div>
      <app-sidebar :links='locals.links'></app-sidebar>
      <router-view></router-view>
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
  props: [ 'locals' ],
};
</script>
