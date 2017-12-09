<template>
  <section class="section">
    <div v-if="this.$session.exists()">
      <nav class="level is-mobile">
        <div class="level-item has-text-centered">
          <p class="title">Meu Histórico</p>
        </div>
      </nav>
      <div class="columns is-mobile is-centered">
        <div class="column has-text-centered is-half-desktop">
          <div v-if="logs.length === 0">
            <h3 class="subtitle" style="padding: 3rem 3rem 3rem 3rem;">Não há histórico!</h3>
          </div>
          <div v-else>
            <table class="table is-mobile is-fullwidth">
              <thead>
              <tr>
                <th>Data</th>
                <th>Restaurante</th>
                <th>Espera</th>
              </tr>
              </thead>
              <tbody v-for="log in logs">
              <tr>
                <td>{{log.date}}</td>
                <td>{{log.nome}}</td>
                <td>{{log.espera}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <button type="submit" class="button is-medium is-info"
              v-on:click="voltar">
        Voltar
      </button>
    </div>
    <div v-else>
      <section class="hero">
        <div class="hero-body">
          <h2 class="title"><b>Não autorizado</b></h2>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
  import { api } from '../../js/environment.js'
  import Vue from 'vue'
  import VueSession from 'vue-session'
  Vue.use(VueSession)

  var data = {
    logs: [],
  }

  export default {
    name: 'Historico',
    data() {
      return data
    },
    methods: {
      voltar: function (event) {
        this.$router.push({path: '/usuario'})
      },
      load_pagina() {
        data.logs = []
        const vm = this
        const historico = this.$session.getAll().usuario.historico
        let hora_entrada, hora_saida
        let date_in, date_out, espera
        for (let i = 0; i < historico.length; i++) {
          if(historico[i].hora_entrada_atendimento !== null){
            let log_temp = {nome: '', date: '', espera: ''}

            log_temp.nome = historico[i].nome
            log_temp.date = historico[i].hora_entrada_fila.slice(8,10)
              + '/' + historico[0].hora_entrada_fila.slice(5,7)
              + '/' + historico[0].hora_entrada_fila.slice(0,4)

            hora_entrada = historico[i].hora_entrada_fila.replace(/-/g,'/').replace('T',' ').slice(0, -5)
            hora_saida = historico[i].hora_entrada_atendimento.replace(/-/g,'/').replace('T',' ').slice(0, -5)
            date_in = new Date(hora_entrada)
            date_out = new Date(hora_saida)
            espera = Math.round((Math.abs(date_in - date_out)/1000)/60)
            log_temp.espera = espera + ' min'

            data.logs.push(log_temp)
          }
        }
      }
    },
    mounted () {
      this.load_pagina()
    }
  }
</script>

<style lang="scss" scoped>

</style>
