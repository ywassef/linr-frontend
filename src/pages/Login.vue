<template>
  <section class="section">
    <div class="container has-text-centered">
      <h1 class="title">Login</h1>
    </div>
    <div class="content">
      <section class="hero">
        <div class="hero-body">
          <div class="columns is-mobile is-centered">
            <div class="column has-text-centered is-one-third-desktop">
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input" id="EmailField" type="email" value="maria@gmail.com">
                </div>
              </div>

              <div class="field">
                <label class="label">Senha</label>
                <div class="control">
                  <input class="input" id="PasswordField" type="password" value="maria">
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="hero-body">
          <button class="button is-large is-primary" v-on:click="logar">
            Entrar
          </button>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
  import MaskedInput from 'vue-masked-input'

  export default {
    name: 'Login',
    methods: {
      logar (event) {
        if (document.getElementById('EmailField').value === 'maria@gmail.com') {
          if (document.getElementById('PasswordField').value === 'maria') {
            this.$router.push('Usuario')
          } else {
            alert('Senha incorreta')
          }
        } else {
          alert('Usuário não encontrado')
        }
      },
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
