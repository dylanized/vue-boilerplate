<template>
  <aside class='col-md-4 col-12 p-1'>
    <nav>
      <ul>
        <li v-for='link in links'><router-link :to='link.to'>{{ link.text }}</router-link></li>
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
