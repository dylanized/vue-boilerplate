<template>
  <nav class='navbar navbar-expand-md navbar-dark bg-dark fixed-top'>
    <div class='collapse navbar-collapse' id='navbarsExampleDefault'>
      <div class='col-md-4 col-12 p-1'>
        <ul class='navbar-nav mr-auto'>
          <li v-for='link in $store.state.links'><router-link :to='link.to' class='nav-link' exact>{{ link.text }}</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNav',
};
</script>
