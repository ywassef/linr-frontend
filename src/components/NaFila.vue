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

  </section>
</template>

<script>

  let id_usuario_fila

  var data = {
    nome: 'def name',
    qtd_pessoas: 'def qtd',
    num_pessoas_fila: 'def num',
    tempo_fila: 'def tempo'
  }

  import Vue from 'vue'
  import { api } from '../js/environment.js'
  export default {
    name: 'NaFila',
    data () {
      return data
    },
    methods: {
      preencherPagina () {
        const vm = this
        let id_fila =  this.$route.params.id_fila
        let id_user = this.$route.query.id
        vm.$http
          .get(api(`/filas/${id_fila}`))
          .then(function (response) {
            const users = response.data.data.usuarios_na_fila;
            for(var i = 0; i < users.length; i++) {
              if (users[i].id_usuario === id_user && users[i].hora_entrada_atendimento === null) {
                id_usuario_fila = users[i].id
                data.nome = users[i].nome
                data.qtd_pessoas = users[i].qtd_pessoas
                data.num_pessoas_fila = i + 1
                break
              }
            }
          })
      },
      desistir: function (event) {
        if (confirm('Você tem certeza que deseja sair da fila?') === true) {
          const vm = this
          let id_fila =  this.$route.params.id_fila
          vm.$http
            .put(api(`/filas/${id_fila}/desistir`), {
              id_usuario_fila: id_usuario_fila
            })
            .then(function(response) {
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
    }
  }

</script>

<style lang="scss" scoped>
  @import "../scss/style";
  .tile {
    border: 5px solid white;
    border-radius: 10px;
  }

</style>
