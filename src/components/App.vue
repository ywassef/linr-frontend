<template>
  <section id="app">
    <navigation></navigation>
    <section class="container is-fluid has-text-centered">
      <router-view></router-view>
    </section>
  </section>
</template>

<script>
  import Navigation from './Navigation.vue'

  export default {
    name: 'app',
    components: {
      'navigation': Navigation,
    },
  }
</script>

<style lang="scss">
  @import "../scss/style";
</style>
