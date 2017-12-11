<template>
  <section>
    <div class="content">
      <form onsubmit="return false">
        <section class="hero is-one-third-desktop">
          <div class="hero-body">
            <div class="columns is-mobile is-centered">
              <div class="column has-text-centered is-one-third-desktop">
                <div class="field">
                  <label class="label">Nome</label>
                  <div class="control">
                    <input class="input" name="NameField" type="text"
                           placeholder="Ex: Ivan Alvez">
                  </div>
                </div>

                <div class="field">
                  <label class="label">Número de pessoas:</label>
                  <div class="control">
                    <input class="input" name="NumPeopleField" type="text"
                           maxlength="2">
                  </div>
                </div>

                <div class="field">
                  <label class="label">Celular</label>
                  <div class="control">
                    <input class="input" name="MobileField" type="tel"
                           minlength="11" maxlength="11"
                           placeholder="Telefone com DDD, somente números">
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <label class="checkbox">
                      <input type="checkbox" name="SMS">
                      <span v-html="smscheckbox"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hero-body">
            <button class="button is-large is-primary"
                    v-on:click="entrar_na_fila">ENTRAR NA FILA
            </button>
          </div>
        </section>
      </form>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
  import '../../firebase-messaging-sw.js'
  require('../../firebase-messaging-sw.js')
  import { api } from '../js/environment.js'
  import VueSession from 'vue-session'
  Vue.use(VueSession)

  var data = {
    smscheckbox: 'Quero receber alertas da fila via SMS',
  }

  let num_pessoas_fila;
  let id_fila

  export default {
    name: 'Entrarnafila',
    methods: {
      entrar_na_fila: function (event) {

        //Validar se dados estão corretos

        const [form] = document.getElementsByTagName('form')

        let nameValid = function () {
          // Check if name is not blank and does not contain numbers
          return !(form.NameField.value === '') && !(/^\d+$/.test(form.NameField.value))
        }

        let groupnumberValid = function () {
          // Check if groupnumber is not blank and only contains numbers
          return !(form.NumPeopleField.value === '') && (/^\d+$/.test(form.NumPeopleField.value))
        }

        let phoneValid = function () {
          // Check if SMS is not blank and only contains numbers, iff SMS is checked
          return !form.SMS.checked ||
            (!(form.MobileField.value === '') && /^\d+$/.test(form.MobileField.value) && form.MobileField.value.length == 11)
        }

        if (!nameValid() || !groupnumberValid() || !phoneValid()) {
          alert('Dados inválidos: \n\n'
            + (!nameValid() ? 'Nome não preenchido ou inválido\n' : '')
            + (!groupnumberValid() ? 'Número de pessoas no seu grupo inválido\n' : '')
            + (!phoneValid() ? 'Número de celular inválido' : ''))

        }
        else {

          this.subscribe_to_notifications()

        }
      },
      subscribe_to_notifications: function () {

        const vm = this
        const messaging = firebase.messaging()
        const [form] = document.getElementsByTagName('form')
        // Request permission to send notifications

        console.log('Requesting permission...')
        messaging.requestPermission()
          .then(function () {
            console.log('Notification permission granted.')

            // Get the user notifications token

            messaging.getToken()
              .then(function (currentToken) {
                // TODO: send the token to the API
                if (vm.$session.exists()) {
                  vm.call_api_entrarnafila_logged(currentToken)
                }
                else {
                  vm.call_api_entrarnafila_temp(currentToken)
                }

              })
          })
          .catch(function (err) {
            console.log('Unable to get permission to notify.', err)

            if (!form.SMS.checked) {
              data.smscheckbox = '<strong>É preciso habilitar notificações pelo navegador or por SMS</strong>'
            }
            else {
              if (vm.$session.exists()) {
                vm.call_api_entrarnafila_logged('')
              }
              else {
                vm.call_api_entrarnafila_temp('')
              }
            }

          })

      },
      call_api_entrarnafila_logged: function (currentToken) {
        const id_user = this.$session.getAll().usuario.id
        const [form] = document.getElementsByTagName('form')

        const vm = this
        vm.$http.put(api('/auth/updatetoken'), {
          session: this.$session.getAll().token,
          fcmtoken: currentToken
        })
        .then (function (response) {
          vm.$http.put(api(`/filas/${id_fila}/entercadastrado`), {
            session_token: vm.$session.getAll().token,
            qtd_pessoas: form.NumPeopleField.value,
            posicao_qdo_entrou: num_pessoas_fila
          })
            .then(function (response) {
              vm.$router.push({
                path: '../nafila/' + id_fila, query: {id: id_user},
              })
            })
        })
        .catch(function (err) {
          return false
        })

      },
      load_data: function (){
        id_fila = this.$route.params.id_fila
        const client = new ClientJS()
        const OS = client.getOS()
        if (OS === 'iOS' || OS === 'Mac OS' || !('serviceWorker' in navigator)) {
          data.smscheckbox = 'É necessário o uso de alertas via SMS para iOS'
          document.getElementById('SMS').checked = true
          document.getElementById('SMS').disabled = true
        }
        const vm = this
        vm.$http.get(api(`/filas/${id_fila}`))
          .then(function (response) {
            num_pessoas_fila = parseInt(response.data.data.usuarios_na_fila.length) + 1
          })
        if (this.$session.exists()) {
          const usuario = this.$session.getAll().usuario
          const [form] = document.getElementsByTagName('form')
          form.elements['NameField'].value = usuario.nome
          form.elements['MobileField'].value = usuario.telefone
        }
      },
      call_api_entrarnafila_temp: function (currentToken) {

        const id_user = this.$CalculateSnowflake(id_fila, 0)
        const [form] = document.getElementsByTagName('form')

        //insert new temporary user in the database
        const vm = this

        vm.$http.post(api('/auth/new/temp'), {
          id: id_user,
          nome: form.NameField.value,
          fcmtoken: currentToken,
          telefone: form.MobileField.value,
        })
        //with the id returned in the insertion, put the new user in line
          .then(function (response) {
            vm.$http.put(api(`/filas/${id_fila}/enter`), {
              id_usuario: id_user,
              qtd_pessoas: form.NumPeopleField.value,
              posicao_qdo_entrou: num_pessoas_fila
            })
              .then(function (response) {
                vm.$router.push({
                  path: '../nafila/' + id_fila, query: {id: id_user},
                })
              })
          })
          .catch(function (err) {
            console.log(`Error: ${err}`)
            return false
          })
      },
    },
    data () {
      return data
    },
    mounted(){
      this.load_data()
    },
  }

  window.onload = function () {

  }
</script>

<style lang="scss" scoped>

</style>

