<template>
  <section>
    <div class="content">
      <div v-if="this.$session.exists()">
        <section class="hero">
          <div class="hero-body">
            <h2 class="title"><b>Meu Histórico</b></h2>
          </div>
          <div class="hero-body">
            <div class="columns is-mobile is-centered">
              <div class="column has-text-centered is-one-third-desktop">
                <div v-if="history_size === 0">
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
                    <tbody>
                    <tr v-if="history_size > 0">
                      <td>{{date1}}</td>
                      <td>{{rest1}}</td>
                      <td>{{time1}}</td>
                    </tr>
                    <tr v-if="history_size > 1">
                      <td>{{date2}}</td>
                      <td>{{rest2}}</td>
                      <td>{{time2}}</td>
                    </tr>
                    <tr v-if="history_size > 2">
                      <td>{{date3}}</td>
                      <td>{{rest3}}</td>
                      <td>{{time3}}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="hero-foot">
            <router-link to="historico">
              <button class="button is-small is-info">
                Ver mais
              </button>
            </router-link>
          </div>
          <div class="hero-body">
            <router-link to="../restaurantes">
              <button class="button is-large is-primary">
                <img :src="knife_fork" style="height: 30px; width: 30px"/>
                Restaurantes
              </button>
            </router-link>
          </div>
          <div class="hero-body">
            <router-link to="config">
              <button class="button is-medium is-danger">
                <img :src="setting" style="height: 25px; width: 25px"/>
                Alterar dados cadastrais
              </button>
            </router-link>
          </div>
        </section>
      </div>
      <div v-else>
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
  import knife_fork from '../../img/knife_fork.png'
  import setting from '../../img/setting.png'
  import Vue from 'vue'
  import VueSession from 'vue-session'
  Vue.use(VueSession)

  var data = {
    date1: '',
    date2: '',
    date3: '',
    rest1: '',
    rest2: '',
    rest3: '',
    time1: '',
    time2: '',
    time3: '',
    history_size: 0,
    knife_fork,
    setting,
  }

  export default {
    name: 'UserDashboard',
    data () {
      return data
    },
    methods: {
      load_pagina(){
        const historico = this.$session.getAll().usuario.historico
        let i = 0, j = 0
        let hora_entrada, hora_saida
        let date_in, date_out, espera
        while(i < 3 && j < historico.length) {
          if(historico[j].hora_entrada_atendimento === null){
            j++
          }
          else {
            switch(i) {
              case 0:
                data.rest1 = historico[j].nome
                data.date1 = historico[j].hora_entrada_fila.slice(8,10)
                  + '/' + historico[0].hora_entrada_fila.slice(5,7)
                  + '/' + historico[0].hora_entrada_fila.slice(0,4)
                hora_entrada = historico[j].hora_entrada_fila.replace(/-/g,'/').replace('T',' ').slice(0, -5)
                hora_saida = historico[j].hora_entrada_atendimento.replace(/-/g,'/').replace('T',' ').slice(0, -5)
                date_in = new Date(hora_entrada)
                date_out = new Date(hora_saida)
                espera = Math.round((Math.abs(date_in - date_out)/1000)/60)
                data.time1 = espera + ' min'
                break;
              case 1:
                data.rest2 = historico[j].nome
                data.date2 = historico[j].hora_entrada_fila.slice(8,10)
                  + '/' + historico[0].hora_entrada_fila.slice(5,7)
                  + '/' + historico[0].hora_entrada_fila.slice(0,4)
                hora_entrada = historico[j].hora_entrada_fila.replace(/-/g,'/').replace('T',' ').slice(0, -5)
                hora_saida = historico[j].hora_entrada_atendimento.replace(/-/g,'/').replace('T',' ').slice(0, -5)
                date_in = new Date(hora_entrada)
                date_out = new Date(hora_saida)
                espera = Math.round((Math.abs(date_in - date_out)/1000)/60)
                data.time2 = espera + ' min'
                break;
              case 2:
                data.rest3 = historico[j].nome
                data.date3 = historico[j].hora_entrada_fila.slice(8,10)
                  + '/' + historico[0].hora_entrada_fila.slice(5,7)
                  + '/' + historico[0].hora_entrada_fila.slice(0,4)
                hora_entrada = historico[j].hora_entrada_fila.replace(/-/g,'/').replace('T',' ').slice(0, -5)
                hora_saida = historico[j].hora_entrada_atendimento.replace(/-/g,'/').replace('T',' ').slice(0, -5)
                date_in = new Date(hora_entrada)
                date_out = new Date(hora_saida)
                espera = Math.round((Math.abs(date_in - date_out)/1000)/60)
                data.time3 = espera + ' min'
                break;
              default:
                break;
            }
            i++
            j++
          }
        }
        data.history_size = i
      }
    },
    mounted() {
      if(this.$session.exists()) {
        this.load_pagina()
      }
    }
  }
</script>
