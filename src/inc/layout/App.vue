<template>
  <div id='app'>
    <header>
      <h1>Vue Boilerplate</h1>
      <nav>
        <ul>
          <li><router-link to='/'>Home</router-link></li>
          <li><router-link to='/about'>About</router-link></li>
          <li><router-link to='/error'>Error</router-link></li>
        </ul>
      </nav>
    </header>
    <div>
      <aside></aside>
      <router-view></router-view>
    </div>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
