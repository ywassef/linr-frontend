<template>
  <section class="section">
    <div class="box has-text-centered" style="background-color: #F44D41;">
      <h2 class="title" style="color: #fff">Código da fila: {{ this.$route.params.id_fila }}</h2>
    </div>

    <div class="box has-text-centered" style="background-color: #fff;">
      <h3 class="subtitle">Nome: {{ nome }}</h3>
    </div>

    <div class="box has-text-centered" style="background-color: #fff;">
      <h3 class="subtitle">Grupo de: {{ qtd_pessoas }}</h3>
    </div>

    <div class="box has-text-centered" style="background-color: #FFF;">
      <h3 class="subtitle" style="color: #FF5722;"><i class="fa fa-clock-o" aria-hidden="true"></i>
        {{ tempo_fila }} min</h3>
    </div>

    <div class="box has-text-centered" style="background-color: #FFF;">
      <h3 class="subtitle" style="color: #FF5722;"><i class="fa fa-users" aria-hidden="true"></i>
        {{ num_pessoas_fila }} grupos na fila</h3>
    </div>

      <button class="button is-large is-primary" v-on:click="desistir">
        Desistir
      </button>

    <div class="box has-text-centered" style="background-color: #fff;">
      <h3 class="subtitle">Grupo de: {{ qtd_pessoas }}</h3>
    </div>

    <div class="box has-text-centered" style="background-color: #FFF;">
      <h3 class="subtitle" style="color: #FF5722;"><i class="fa fa-clock-o"
                                                      aria-hidden="true"></i>
        {{ tempo_fila }} min</h3>
    </div>

    <div class="box has-text-centered" style="background-color: #FFF;">
      <h3 class="subtitle" style="color: #FF5722;"><i class="fa fa-users"
                                                      aria-hidden="true"></i>
        {{ num_pessoas_fila }} grupos na fila</h3>
    </div>

    <button class="button is-large is-primary" v-on:click="desistir">
      Desistir
    </button>

  </section>
</template>

<script>

  let id_usuario_fila

  import Vue from 'vue'
  import { api } from '../js/environment.js'

  export default {
    name: 'NaFila',
    data () {
      return {
        nome: 'def name',
        qtd_pessoas: 'def qtd',
        num_pessoas_fila: 'def num',
        tempo_fila: 'def tempo',
      }
    },
    methods: {
      preencherPagina () {
        const vm = this
        const id_fila = this.$route.params.id_fila
        const id_user = this.$route.query.id
        let posicao
        vm.$http
          .get(api(`/filas/${id_fila}`))
          .then(function (response) {
            const users = response.data.data.usuarios_na_fila
            for (let i = 0; i < users.length; i++) {
              if (users[i].id_usuario === id_user) {
                id_usuario_fila = users[i].id
                vm.nome = users[i].nome
                vm.qtd_pessoas = users[i].qtd_pessoas
                vm.num_pessoas_fila = i + 1
                posicao = i
                break
              }
            }
            const dia = new Date()
            const dia_semana = dia.getDay()
            const hora = new Date(users[posicao].hora_entrada_fila.replace(/-/g, '/').replace('T', ' ').slice(0, -5))
            const hora_entrada = hora.getHours() * 60 + hora.getMinutes()
            vm.$http
              .get(`https://linrapp-prediction.herokuapp.com/prediction/${id_fila}`, {
                params: {
                  dia_da_semana: dia_semana,
                  hora_de_entrada: hora_entrada,
                  posicao: posicao,
                },
                headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Credentials': 'true',
                }
              })
              .then(function (response) {
                const type_predict = response.data.type
                const prediction = response.data.data.prediction
                if (type_predict === 0) {
                  vm.tempo_fila = (prediction * vm.num_pessoas_fila) / 60
                }
                else {
                  vm.tempo_fila = (prediction) / 60
                }
                setInterval(function () {
                  if(vm.tempo_fila === 10) {
                    alert('Faltam 10 minutos para a sua vez!')
                    vm.tempo_fila -= 1;
                  } else
                  if(vm.tempo_fila === 5) {
                    alert('Faltam 5 minutos para a sua vez!')
                    vm.tempo_fila -= 1;
                  } else
                  if(vm.tempo_fila === 0) {
                    alert('Você está atrasado!')
                  } else
                  {
                    vm.tempo_fila -= 1;
                  }

                }, 1000 * 60)
              })

          })
      },
      desistir: function (event) {
        if (confirm('Você tem certeza que deseja sair da fila?') === true) {
          const vm = this
          let id_fila = this.$route.params.id_fila
          vm.$http
            .put(api(`/filas/${id_fila}/desistir`), {
              id_usuario_fila: id_usuario_fila,
            })
            .then(function (response) {

              vm.$router.push({path: '/'})
            })
            .catch(function (err) {
              console.log(`Error: ${err}`)
              return false
            })

        }
      },
    },
    mounted () {
      this.preencherPagina()
    },
  }

</script>

<style lang="scss" scoped>
  @import "../scss/style";

  .tile {
    border: 5px solid white;
    border-radius: 10px;
  }
</style>
