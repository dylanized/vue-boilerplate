<template>
  <main>
    <ul>
      <li><router-link to='/'>Home</router-link></li>
      <li><router-link to='/about'>About</router-link></li>
      <li><router-link to='/error'>Error</router-link></li>
    </ul>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: 'App',
}
</script>
