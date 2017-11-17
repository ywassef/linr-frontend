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
                         placeholder="Ex: Ivan Alves">
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
  }

  import Vue from 'vue'

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
          + (!nameValid() ? 'Nome não preeeeenchido\n' : '')
          + (!groupnumberValid() ? 'Número de pessoas no seu grupo inválido\n' : '')
          + (!phoneValid() ? 'Número de celular inválido': ''))

        }
        else {
          Vue.prototype.$name = document.getElementById('NameField').value
          Vue.prototype.$num_people = document.getElementById('NumPeopleField').value
          Vue.prototype.$rest_id = document.getElementById('restaurantID').textContent
          Vue.prototype.$line = '15'
          Vue.prototype.$time = '30'

          this.$router.push({
            path: 'confirmado',
            query: {hash: Vue.prototype.$CalculateSnowflake(0, 0)},
          })
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
