<template>
  <div>

    <app-nav />

    <app-header>
      <h1>Vue.js Boilerplate</h1>
      <p class='lead'>Simple starter project showing off Vue.js, Webpack 4 and Bootstrap 4</p>
    </app-header>

    <section class='container'>
      <router-view />
    </section>

    <app-footer :text='$store.state.msg' />

  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang='scss'>
// import custom css
@import '@/css/app.scss';
</style>
