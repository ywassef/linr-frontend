<template>
  <nav id="navbar" class="navbar">
    <section class="navbar-brand">
      <a class="navbar-item" href="/">
        <h1 class="is-size-4">Linr</h1>
        <img :src="logo" alt="Logo"/>
      </a>
    </section>
  </nav>
</template>

<script>
  import Logo from "../img/logo.png"

  export default {
    name: "navbar",
    data() {
      return {
        "logo": Logo,
      }
    },
  }
</script>

<style lang="scss">
  @import "../scss/style";

  #navbar {
    background-color: $primary;
  }
</style>
