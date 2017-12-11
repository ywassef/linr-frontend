<template>
  <section id="app">
    <div class="container is-fluid has-text-centered">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style lang="scss">
  @import "../scss/style";

</style>
