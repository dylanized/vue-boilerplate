<template>
  <footer class='col-12 p-1'>
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: [ 'text' ],
};
</script>
