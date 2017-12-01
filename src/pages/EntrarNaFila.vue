<template>
  <section>
    <div class="content">
      <form>
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
                    <input class="input" name="NumPeopleField" type="text">
                  </div>
                </div>

                <div class="field">
                  <label class="label">Celular</label>
                  <div class="control">
                    <input class="input" name="MobileField" type="tel"
                           placeholder="(11) 11111-1111">
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <label class="checkbox">
                      <input type="checkbox" name="SMS">
                      {{ smscheckbox }}
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

  var data = {
    smscheckbox: 'Quero receber alertas da fila via SMS',
  };

  import Vue from 'vue'
  import '../../firebase-messaging-sw.js'
  require('../../firebase-messaging-sw.js');
  import api from '../js/environment.js'

  export default {
    name: 'Entrarnafila',
    methods: {
      entrar_na_fila: function (event) {
        const [form] = document.getElementsByTagName('form')
        let nameValid = function () {
          return !(form.NameField.value === '')
        }
        let groupnumberValid = function () {
          return !(form.NumPeopleField.value === '')
        }
        let phoneValid = function () {
          return !(form.SMS.checked && form.MobileField.value === '')
        }

        if (!nameValid() || !groupnumberValid() || !phoneValid()) {
          alert('Dados inválidos: \n\n'
            + (!nameValid() ? 'Nome não preenchido\n' : '')
            + (!groupnumberValid() ? 'Número de pessoas no seu grupo inválido\n' : '')
            + (!phoneValid() ? 'Número de celular inválido' : ''))

        }
        else {
        
          /*
          const messaging = firebase.messaging();

          console.log('Requesting permission...');
          // [START request_permission]
          messaging.requestPermission()
          .then(function() {
            console.log('Notification permission granted.');
            messaging.getToken()
              .then(function(currentToken) {
                console.log(currentToken)
              })
          })
          .catch(function(err) {
            console.log('Unable to get permission to notify.', err);
          });
          */
        
          //insert new temporary user in the database
          this.$http
            .post(api('/auth/new/temp'), {
              id: Vue.prototype.$CalculateSnowflake(0, 0),
              nome: form.NameField.value,
              telefone: form.MobileField.value,
            })
            //with the id returned in the insertion, I put the new user in line
            .then(response => {
              this.$http
                .put(api('/filas' + this.$route.params.id + '/enter'), {
                  id_usuario: response.data.data[0].id_usuario,
                  qtd_pessoas: form.NumPeopleField.value,
                })
                .then(response => {
                  console.log(`Response: ${response}`)
                })
                .catch(err => {
                  console.log('Error: ${err}')
                  return false
                })
              //send information to the next page
              this.$router.push({
                path: '../nafila/' + response.data.data[0].id_usuario
                /*query: {hash: response.data.data[0].id_usuario},*/
              })
            })
            .catch(err => {
              console.log(`Error: ${err}`)
              return false
            })
          }
        }
      },
    data () {
      return data
    },
  }

  window.onload = function () {
    const client = new ClientJS()
    const OS = client.getOS()
    if (OS === 'iOS' || OS === 'Mac OS' || !('serviceWorker' in navigator)) {
      data.smscheckbox = 'É necessário o uso de alertas via SMS para iOS'
      document.getElementById('SMS').checked = true
      document.getElementById('SMS').disabled = true
    }
  }
</script>

<style lang="scss" scoped>

</style>
