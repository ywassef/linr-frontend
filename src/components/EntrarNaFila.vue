<template>
  <section>
    <div class="content">
      <section class="hero is-one-third-desktop">
        <div class="hero-body">
          <div class="columns is-mobile is-centered">
            <div class="column has-text-centered is-one-third-desktop">
              <div class="field">
                <label class="label">Nome</label>
                <div class="control">
                  <input class="input" id="NameField" type="text"
                         placeholder="Ex: Ivan Alvez">
                  </div>
                </div>

                <div class="field">
                  <label class="label">Número de pessoas:</label>
                  <div class="control">
                   <input class="input" id="NumPeopleField" type="text">
                  </div>
               </div>

               <div class="field">
                 <label class="label">Celular</label>
                  <div class="control">
                   <input class="input" id="MobileField" type="tel"
                         placeholder="(11) 11111-1111">
                  </div>
              </div>

              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input type="checkbox" id="SMS">
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
    </div>
  </section>
</template>

<script>

  var data = {
    smscheckbox: 'Quero receber alertas da fila via SMS',
  };

  import Vue from 'vue'
  import '../../serviceworker.js'
  require('../../serviceworker.js');


  export default {
    name: 'Entrarnafila',
    methods: {
      entrar_na_fila: function (event) {

        let nameValid = function() {
          return !(document.getElementById('NameField').value === '')
        };
        let groupnumberValid = function() {
          return !(document.getElementById('NumPeopleField').value === '')
        };
        let phoneValid = function() {
          return !(document.getElementById('SMS').checked === true && document.getElementById('MobileField').value === '')
        };

        if(!nameValid() || !groupnumberValid() || !phoneValid()){
          alert('Dados inválidos: \n\n'
          + (!nameValid() ? 'Nome não preenchido\n' : '')
          + (!groupnumberValid() ? 'Número de pessoas no seu grupo inválido\n' : '')
          + (!phoneValid() ? 'Número de celular inválido': ''))

        }
        else {

          // Substitute this with API calls

          Vue.prototype.$name = document.getElementById('NameField').value
          Vue.prototype.$num_people = document.getElementById('NumPeopleField').value
          //Vue.prototype.$rest_id = document.getElementById('restaurantID').textContent
          Vue.prototype.$line = '15'
          Vue.prototype.$time = '30'

          // Subscribe user to push notifications

          var endpoint;
          var key;
          var authSecret;

          //Register a Service Worker.

          navigator.serviceWorker.register('../../serviceworker.js')
            .then(function(registration) {

              //Use the PushManager to get the user’s subscription to the push service.

              return registration.pushManager.getSubscription()
                .then(function(subscription) {

                  //If a subscription was found, return it.

                  if (subscription) {
                    return subscription;
                  }

                  //Otherwise, subscribe the user (userVisibleOnly allows to specify that we don’t plan to send notifications that don’t have a visible effect for the user).

                  return registration.pushManager.subscribe({ userVisibleOnly: true });
                });
            }).then(function(subscription) {

            //Retrieve the user’s public key.

            var rawKey = subscription.getKey ? subscription.getKey('p256dh') : '';
            key = rawKey ?
              btoa(String.fromCharCode.apply(null, new Uint8Array(rawKey))) : '';
            var rawAuthSecret = subscription.getKey ? subscription.getKey('auth') : '';
            authSecret = rawAuthSecret ?
              btoa(String.fromCharCode.apply(null, new Uint8Array(rawAuthSecret))) :
              '';

            endpoint = subscription.endpoint;

            //Send the subscription details to the server using the Fetch API.

            fetch('./register', {
              method: 'post',
              headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify({
                endpoint: subscription.endpoint,
                key: key,
                authSecret: authSecret,
              }),
            });
          });


          // Go to confirmation page

          this.$router.push({
            path: 'confirmado',
            query: {hash: Vue.prototype.$CalculateSnowflake(0, 0)},
          });
          console.log(event)
        }
      },
    },
    data () {
      return data
    },
  }

  window.onload = function () {
    const client = new ClientJS()
    const OS = client.getOS()
    if (OS === 'iOS' || OS === 'Mac OS' ||  !('serviceWorker' in navigator)) {
      data.smscheckbox = 'É necessário o uso de alertas via SMS para iOS'
      document.getElementById('SMS').checked = true
      document.getElementById('SMS').disabled = true
    }
  }
</script>

<style lang="scss" scoped>

</style>
