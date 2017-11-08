<template>
  <div>
    <div class="tile">
      <div class="field has-addons">
        <div class="control">
          <input
              class="input"
              id="NumPeopleField"
              type="number"
              placeholder="Número de pessoas">
        </div>
        <div class="control">
          <button class="button is-primary" v-on:click="entrar_na_fila">
            Entrar
          </button>
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
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'EntrarFilaCadastrado',
    methods: {
      entrar_na_fila (event) {
        if (document.getElementById('NumPeopleField').value !== '') {
          // TODO: Usar props
          Vue.prototype.$name = 'Maria'
          Vue.prototype.$num_people = document.getElementById('NumPeopleField').value
          Vue.prototype.$rest_id = 'outback12'
          Vue.prototype.$line = '16'
          Vue.prototype.$time = '45'

          this.$router.push({
            path: 'confirmado',
          })
          console.log(event)
        } else {
          alert('É necessário informar o número de pessoas!')
        }
      },
    },
    data () {
      return {
        smscheckbox: 'Alertas via SMS',
      }
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

<style>

</style>
