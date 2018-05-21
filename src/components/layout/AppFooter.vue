<template>
  <footer class='navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark'>
    <p class='navbar-brand mb-0'>{{ text }}</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: ['text'],
};
</script>
