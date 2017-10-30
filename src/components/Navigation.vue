<template>
  <nav id="navbar" class="navbar">
    <section class="navbar-brand">
      <a class="navbar-item" href="#/home">
        <h1 class="is-size-4">Linr </h1>
        <img :src="logo" alt="Logo"/>
      </a>
    </section>

    <section class="nav-right nav-menu">
      <span class="nav-item">
          <router-link to="/loginAdmin">Admin</router-link>
      </span>
      <span class="nav-item">
          <router-link to="/cadastro">Cadastro</router-link>
      </span>
      <span class="nav-item">
          <router-link to="/login">Login</router-link>
      </span>
    </section>

  </nav>
</template>

<script>
  import Logo from '../img/logo.png'

  export default {
    name: 'navbar',
    data () {
      return {
        'logo': Logo,
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
