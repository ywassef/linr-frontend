<template>
  <div>
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navigation from '../components/Navigation.vue'

  export default {
    name: 'Index',
    components: {
      'navigation': Navigation,
    },
  }
</script>

<style lang="scss" scoped>
  @import "../scss/style";
</style>