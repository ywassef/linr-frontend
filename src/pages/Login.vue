<template>
  <section>
    <div class="content">
      <section class="hero">
        <div class="hero-body">
          <h2 class="title"><b>Login</b></h2>
        </div>
        <div class="hero-body">
          <div class="columns is-mobile is-centered">
            <form class="column has-text-centered is-one-third-desktop">
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input" name="email" type="email"
                         value="usuario1@gmail.com">
                </div>
              </div>
              <div class="field">
                <label class="label">Senha</label>
                <div class="control">
                  <input class="input" name="senha" type="password"
                         value="hunter1">
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="hero-body">
          <button class="button is-large is-primary" type="button"
                  v-on:click="logar">
            Entrar
          </button>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
  import { api } from '../js/environment'

  export default {
    name: 'Login',
    methods: {
      logar (event) {
        const [form] = document.getElementsByTagName('form')
        this.$http
          .post(api('/auth/login'), {
            email: form.email.value,
            senha: form.senha.value,
          })
          .then(response => {
            if (response.data.status === 'ok') {
              this.$session.start()
              this.$session.set('usuario', response.data.session.usuario)
              this.$session.set('token', response.data.session.token)
              this.$bus.$emit('login', 'User logged')
              this.$router.push({path: '/usuario'})
            }
          })
          .catch(err => {
            alert('Email ou senha incorretos')
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
