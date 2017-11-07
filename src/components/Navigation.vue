<template>
  <nav id="navbar" class="navbar">
    <section class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <h1 class="is-size-4">Linr </h1>
        <img :src="logo" alt="Logo"/>
      </router-link>
      <button class="button navbar-burger"
              onclick="document.getElementById('menu').classList.toggle('is-active');">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </section>
    <section class="navbar-menu" id="menu">
      <div class="navbar-end">
        <router-link to="/admin" class="navbar-item">
          <span>Admin</span>
        </router-link>
        <router-link to="/usuario/cadastro" class="navbar-item">
          <span>Cadastro</span>
        </router-link>
        <router-link to="/usuario/login" class="navbar-item">
          <span>Login</span>
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

<style lang="scss">
  @import "../scss/style";

  #navbar {
    background-color: $navbarbg;
  }
</style>
