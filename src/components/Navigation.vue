<template>
  <nav id="navbar" class="navbar">
    <section class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img :src="logo" alt="Logo"/>
        <h1 class="is-size-4" style='margin-left:0.5rem; display:inline-block'>Linr </h1>
      </router-link>
      <button class="button navbar-burger" onclick="document.getElementById('menu').classList.toggle('is-active');">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </section>
    <section class="navbar-menu" id="menu">
      <div class="navbar-end">
        <!-- Refactoring to v-on:click doesnt work -->
        <router-link to="/cadastro" class="navbar-item" onclick="document.getElementById('menu').classList.toggle('is-active');">
          Cadastro
        </router-link>
        <router-link to="/login" class="navbar-item"
                     onclick="document.getElementById('menu').classList.toggle('is-active');">
          Login
        </router-link>
      </div>
    </section>
  </nav>
</template>

<script>
  import Logo from '../img/logo64px.png'

  export default {
    name: 'navbar',
    data () {
      return {
        'logo': Logo,
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "../scss/style";

  .navbar-item {
    color: #FFFFFF !important;
  }

  .navbar-menu {
    background-color: $navbarbg;
  }

  .navbar-item img {
    max-height: 2rem !important;
  }

  #navbar {
    background-color: $navbarbg;
  }
</style>
