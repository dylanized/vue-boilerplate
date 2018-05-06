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
export default {
  name: 'App',
};
</script>
