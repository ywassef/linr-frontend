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
    methods: {
      entrar_na_fila: function (event) {
        alert('Entrou na fila!')
        console.log(event)
      },
    },
  }
</script>
