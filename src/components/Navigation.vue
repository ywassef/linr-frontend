<template>
  <nav id="navbar" class="navbar">
    <section class="navbar-brand">
      <a class="navbar-item" href="/">
        <img :src="logo" alt="Logo"/>
      </a>
    </section>

    <div id="nav-toggle" class="nav-toggle"  onclick="document.getElementById('menu').classList.toggle('is-active');">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <section class="nav-right nav-menu" id="menu">
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
    background-color: #c40000;
  }
</style>

-->