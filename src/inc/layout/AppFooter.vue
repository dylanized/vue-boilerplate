<template>
  <footer>
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: [ 'text' ],
};
</script>
