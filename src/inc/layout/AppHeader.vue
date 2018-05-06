<template>
  <header class='col-12 p-1'>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: [ 'title' ],
};
</script>
