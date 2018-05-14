<template>
  <aside class='col-md-4 col-12 p-1'>
    <nav>
      <ul class='navbar-nav mr-auto'>
        <li v-for='link in links' class='nav-item'><router-link :to='link.to' class='nav-link'>{{ link.text }}</router-link></li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'AppSidebar',
  props: [ 'links' ],
};
</script>
