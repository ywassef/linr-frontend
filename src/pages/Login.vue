<template>
  <section>
    <div class="content">
      <section class="hero">
        <div class="hero-body">
          <h2 class="title"><b>Login</b></h2>
        </div>
        <div class="hero-body">
          <div class="columns is-mobile is-centered">
            <div class="column has-text-centered is-one-third-desktop">
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input" id="EmailField" type="email" value="UsuarioCadastrado 1">
                </div>
              </div>

              <div class="field">
                <label class="label">Senha</label>
                <div class="control">
                  <input class="input" id="PasswordField" type="password" value="hunter1">
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
        this.$http
          .post('http://localhost:8080/auth/login', {
            email: document.getElementById('EmailField'),
            senha: document.getElementById('PasswordField'),
          })
          .then(response => {
            console.log(`Response: ${response}`)
            // TODO add session to cookies
            const session_id = response.data.id_usuario
            this.$router.push('/usuario/dashboard')
          })
          .catch(err => {
            console.log(`Error: ${err}`)
            return false
          })
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import "../scss/style";
</style>
