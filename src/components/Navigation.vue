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
        <div v-if="isLogged === false">
          <router-link to="/cadastro" class="navbar-item" onclick="document.getElementById('menu').classList.toggle('is-active');">
            Cadastro
          </router-link>
        </div>
        <div v-if="isLogged === false" style="padding: 0px">
          <router-link to="/login" class="navbar-item" onclick="document.getElementById('menu').classList.toggle('is-active');">
            Login
          </router-link>
        </div>
        <div v-if="isLogged === true">
          <b style="color: white">Bem vindo {{welcome}}!</b> <!-- I dont care if it's ugly :p -->
        </div>
        <div v-if="isLogged === true" style="padding: 0px">
          <router-link to="/usuario/dashboard" class="navbar-item" onclick="document.getElementById('menu').classList.toggle('is-active');">
            Dashboard
          </router-link>
        </div>
        <div v-if="isLogged === true" style="padding: 0px">
          <router-link to="/restaurantes" class="navbar-item" onclick="document.getElementById('menu').classList.toggle('is-active');">
            Restaurantes
          </router-link>
        </div>
        <div v-if="isLogged === true" style="padding: 0px">
          <router-link to="/usuario/logout" class="navbar-item" onclick="document.getElementById('menu').classList.toggle('is-active');">
            Logout
          </router-link>
        </div>
      </div>
    </section>
  </nav>
</template>

<script>
  import Logo from '../img/logo64px.png'
  import Vue from 'vue'
  import VueSession from 'vue-session'
  Vue.use(VueSession)

  export default {
    name: 'navbar',
    data () {
      return {
        'logo': Logo,
        isLogged: this.$session.exists(),
        welcome: ''
      }
    },
    created () {
      this.$bus.$on('login', () => {
        this.isLogged = this.$session.exists()
        if (this.isLogged) {
          this.welcome = this.$session.getAll().usuario.nome
        }
      })
    },
    mounted () {
      if (this.isLogged) {
        this.welcome = this.$session.getAll().usuario.nome
      }
    }
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
