<template>
  <div id='app'>
    <app-header></app-header>
    <div>
      <app-sidebar></app-sidebar>
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
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
};
</script>
