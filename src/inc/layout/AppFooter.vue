<template>
  <footer class='navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark'>
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: [ 'text' ],
};
</script>
