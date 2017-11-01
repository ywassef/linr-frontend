<template>
  <nav id="navbar" class="navbar">
    <section class="navbar-brand">
      <a class="navbar-item" href="/">
        <img :src="logo" alt="Logo"/>
      </a>
      <button class="button navbar-burger"
              onclick="document.getElementById('menu').classList.toggle('is-active');">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </section>

    <section class="navbar-menu" id="menu">
      <div class="navbar-end">
        <span class="navbar-item">
            <router-link to="/loginAdmin"><span style="color: #fff">Admin</span></router-link>
        </span>
        <span class="navbar-item">
            <router-link to="/cadastro"><span style="color: #fff">Cadastro</span></router-link>
        </span>
        <span class="navbar-item">
            <router-link to="/login"><span style="color: #fff">Login</span></router-link>
        </span>
      </div>
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
