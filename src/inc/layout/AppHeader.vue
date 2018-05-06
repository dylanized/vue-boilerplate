<template>
  <header>
    <h1>Vue.js Boilerplate</h1>
    <nav>
      <ul>
        <li><router-link to='/'>Home</router-link></li>
        <li><router-link to='/about'>About</router-link></li>
        <li><router-link to='/error'>Error</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>
