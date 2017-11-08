<template>
  <nav id="navbar" class="navbar">
    <section class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <h1 class="is-size-4">Linr </h1>
        <img :src="logo" alt="Logo"/>
      </router-link>
      <button class="button navbar-burger" onclick="document.getElementById('menu').classList.toggle('is-active');">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </section>
    <section class="navbar-menu" id="menu">
      <div class="navbar-end">
        <router-link to="/admin" class="navbar-item" onclick="document.getElementById('menu').classList.toggle('is-active');">
          <span style="color: #fff">Admin</span>
        </router-link>
        <router-link to="/cadastro" class="navbar-item" onclick="document.getElementById('menu').classList.toggle('is-active');">
          <span style="color: #fff">Cadastro</span>
        </router-link>
        <router-link to="/login" class="navbar-item" onclick="document.getElementById('menu').classList.toggle('is-active');">
          <span style="color: #fff">Login</span>
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
