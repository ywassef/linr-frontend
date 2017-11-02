<template>
  <section class="section">

    <div class="content">
      <section class="hero">
        <div class="hero-body">
          <div class="columns is-mobile is-centered">
            <div class="column has-text-centered">

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
          <div class="hero-foot">
            <div class="container has-text-centered">
              <button class="button is-large is-primary"
                      v-on:click="entrar_na_fila">ENTRAR NA FILA
              </button>
            </div>
          </div>

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
        var cljs = new ClientJS()
        Vue.prototype.$name = document.getElementById('NameField').value
        Vue.prototype.$num_people = document.getElementById('NumPeopleField').value
        Vue.prototype.$rest_id = document.getElementById('restaurantID').textContent

        this.$router.push({
          path: 'confirmado',
          query: {hash: cljs.getFingerprint()},
        })
        console.log(event)
      },
    },
    data () {
      return data
    },
  }

  window.onload = function () {
    const client = new ClientJS()
    const OS = client.getOS()
    if (OS === 'iOS' || OS === 'Mac OS') {
      data.smscheckbox = 'É necessário o uso de alertas via SMS para iOS'
      document.getElementById('SMS').checked = true
      document.getElementById('SMS').disabled = true
    }
  }
</script>
