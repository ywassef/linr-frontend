<template>
  <section class="section">

    <div class="content">
      <div class="field">
        <label class="label">Número de pessoas:</label>
        <div class="control">
          <input class="input" id="NumPeopleField" type="text">
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

      <div class="container has-text-centered">
        <button class="button is-medium is-primary" v-on:click="entrar_na_fila">ENTRAR</button>
      </div>

    </div>

  </section>
</template>

<script>

  var data = {
    smscheckbox: 'Alertas via SMS'
  };

  import Vue from 'vue'

  export default {
    name: 'Entrarnafila',
    methods: {
      entrar_na_fila: function(event) {
        if(document.getElementById('NumPeopleField').value !== '') {
          Vue.prototype.$name = 'Maria';
          Vue.prototype.$num_people = document.getElementById('NumPeopleField').value;
          Vue.prototype.$rest_id = 'outback12';
          Vue.prototype.$line = '16';
          Vue.prototype.$time = '45';


          this.$router.push({
            path: 'confirmado'
          });
        console.log(event)
        } else {
          alert('É necessário informar o número de pessoas!');
        }
      }
    },
    data() {
      return data;
    }
  };

  window.onload = function() {
    const client = new ClientJS();
    const OS = client.getOS();
    if(OS === 'iOS' || OS === 'Mac OS') {
      data.smscheckbox = 'É necessário o uso de alertas via SMS para iOS';
      document.getElementById('SMS').checked = true;
      document.getElementById('SMS').disabled = true;
    }
  };
</script>

<style>
  #navbar {
    background-color: #c40000;
  }
</style>
