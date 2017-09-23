<template>
  <section id="app" class="">
    <navigation></navigation>
    <section class="container is-fluid has-text-centered">
      <button class="button is-large is-primary" v-on:click="entrar_na_fila">ENTRAR NA FILA</button>
    </section>
  </section>
</template>

<script>
  import Navigation from "./Navigation.vue"

  export default {
    name: "app",
    components: {
      "navigation": Navigation,
    },
    methods: {
      entrar_na_fila: function(event) {
        alert('Entrou na fila!')
        console.log(event)
      }
    },
    data() {
      return {}
    },
  }
</script>

<style lang="scss">
  @import "../scss/style";

  html, body, #app {
    height: 100%;
    width: 100%;
    margin: 0;
  }

  html {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>
