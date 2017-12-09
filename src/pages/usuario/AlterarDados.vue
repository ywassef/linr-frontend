<template>
  <section>
    <div v-if="this.$session.exists()">
      <div class="content">
        <section class="hero">
          <form onsubmit="return false">
            <div class="hero-body">
              <h1 class="title"><b>Alterar Dados Cadastrais</b></h1>
            </div>
            <div class="hero-body">
              <div class="columns is-mobile is-centered">
                <div class="column has-text-centered is-one-third-desktop">
                  <div class="columns is-mobile is-centered">
                    <div class="column has-text-centered">
                      <label class="label has-text-left" style="font-size: 20px">Senha antiga: </label>
                      <div class="control">
                        <input class="input" name="old_password" type="password">
                      </div>
                      <div class="tile notification is-info is-mobile">
                        Preencha apenas os dados que devem ser alterados!
                      </div>

                      <label class="label has-text-left" style="font-size: 20px">Nome: </label>
                      <div class="control">
                        <input class="input" name="name" type="text">
                      </div>
                      <label class="label has-text-left" style="font-size: 20px">Senha: </label>
                      <div class="control">
                        <input class="input" name="new_password" type="password">
                      </div>
                      <label class="label has-text-left" style="font-size: 20px">Celular: </label>
                      <div class="control">
                        <input class="input" name="celular" type="tel">
                      </div>
                      <label class="label has-text-left" style="font-size: 20px">Email: </label>
                      <div class="control">
                        <input class="input" name="email" type="email">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="hero-body">
              <button type="submit" class="button is-large is-primary"
                      v-on:click="salvar">
                Salvar Dados
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
    <div v-else>
      <div class="content">
        <section class="hero">
          <div class="hero-body">
            <h2 class="title"><b>Não autorizado</b></h2>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
  import { api } from '../../js/environment.js'
  import Vue from 'vue'
  import VueSession from 'vue-session'
  Vue.use(VueSession)

  export default {
    name: 'AlterarDados',
    methods: {
      refresh_session (email, password) {
        this.$session.destroy()
        const vm = this
        this.$http
          .post(api('/auth/login'), {
            email: email,
            senha: password,
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
            console.log(`Error: ${err}`)
            return false
          })
      },
      salvar: function (event) {
        const vm = this
        const id_sessao = this.$session.getAll().token
        const [form] = document.getElementsByTagName('form')
        let test = false
        let email = vm.$session.getAll().usuario.email
        let password = form.old_password.value

        vm.$http
          .put(api('/auth/updateuser'), {
            session: id_sessao,
            nome: form.name.value,
            email: form.email.value,
            senha: form.new_password.value,
            telefone: form.celular.value
          })
          .then(function(response) {
            if(form.email.value !== '') {
              email = form.email.value
            }
            if(form.new_password.value !== '') {
              password = form.new_password.value
            }
            vm.refresh_session(email, password)
          })

      },
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../scss/style";

  .tile {
    padding: 10px;
    border-radius: 10px;
  }

  .input {
    margin-bottom: 20px;
  }

</style>
