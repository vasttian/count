<template>
  <div id="app">
    <img src="./assets/logo.png">
    <display></display>
    <increment></increment>
  </div>
</template>

<script>
  import display from './display.vue';
  import increment from './increment.vue';

  export default {
    data() {
      return {}
    },
    components: {
      display,
      increment,
    }
  };
</script>

<style>
  #app {
    text-align: center;
  }
</style>