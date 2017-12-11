<template>
  <section>
    <div class="content">
      <section class="hero">
        <form>
          <div class="hero-body">
            <h2 class="title"><b>Cadastro de Usuário</b></h2>
          </div>
          <div class="hero-body">
            <div class="columns is-mobile is-centered">
              <div class="column has-text-centered is-one-third-desktop">
                <div class="field">
                  <label class="label">Nome</label>
                  <div class="control">
                    <input
                        class="input"
                        name="nome"
                        type="text"
                        placeholder="Ex: Ivan Alves"/>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Telefone</label>
                  <div class="control">
                    <input
                        class="input"
                        name="telefone"
                        type="tel"
                        placeholder="(11) 11111-1111"/>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input
                        class="input"
                        name="email"
                        type="email"
                        placeholder="Ex: ivanalves@gmail.com"/>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Senha</label>
                  <div class="control">
                    <input
                        class="input"
                        name="senha"
                        type="password"
                        placeholder="••••••"/>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <label class="checkbox">
                      <input type="checkbox" name="termos">
                      Concordo com os  <a href="#">Termos e Condições de Uso</a>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hero-body">
            <button type="button" class="button is-large is-primary"
                    v-on:click="cadastrar">
              Cadastrar
            </button>
          </div>
        </form>
      </section>
    </div>
  </section>
</template>

<script>
  import { api } from '../js/environment'

  function getRandomInt (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  export default {
    name: 'Cadastro',
    methods: {
      cadastrar () {
        const [form] = document.getElementsByTagName('form')
        if (!form.termos.checked) {
          alert('Você deve aceitar os Termos e Condições para fazer o cadastro!')
          return false
        }
        this.$http
          .post(api('/auth/new'), {
            id: getRandomInt(0, 10000000),
            nome: form.nome.value,
            telefone: form.telefone.value,
            email: form.email.value,
            senha: form.senha.value,
          })
          .then(response => {
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
                  this.$router.push('/usuario')
                }
              })
          })
          .catch(err => {
            console.log(`Error: ${err}`)
            return false
          })
      },
    },
  }
</script>

<style lang="scss">
  @import "../scss/style";
</style>
