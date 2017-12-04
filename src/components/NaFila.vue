<template>
  <section class="section">
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-parent">
        <div class="tile is-child notification is-primary">
          <h2 class="title">Código da fila: {{ this.$route.params.id_fila }}</h2>
        </div>
        <div class="tile is-child">
          <div class="tile is-parent">
            <div class="tile is-child notification is-info">
              <h3 class="subtitle">Nome: {{ nome }}</h3>
            </div>

            <div class="tile is-child notification is-info">
              <h3 class="subtitle">Grupo de: {{ qtd_pessoas }}</h3>
            </div>
          </div>
        </div>

        <div class="tile is-child">
          <div class="tile is-parent">
            <div class="tile is-child notification is-warning">
              <h3 class="subtitle"><i class="fa fa-clock-o" aria-hidden="true"></i>
                {{ tempo_fila }} min</h3>
            </div>

            <div class="tile is-child notification is-warning">
              <h3 class="subtitle"><i class="fa fa-users" aria-hidden="true"></i>
                {{ num_pessoas_fila }} grupos na fila</h3>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="container has-text-centered">
      <button class="button is-large is-primary" v-on:click="desistir">
        Desistir
      </button>
    </div>

  </section>
</template>

<script>

  var data = {
    nome: 'def name',
    qtd_pessoas: 'def qtd',
    num_pessoas_fila: 'def num',
    tempo_fila: 'def tempo'
  }

  import Vue from 'vue'
  import api from '../js/environment.js'

  export default {
    name: 'NaFila',
    data () {
      return data
    },
    methods: {
      preencherPagina () {
        const vm = this
        const id_fila =  this.$route.params.id_fila
        const id_user = this.$route.query.id

        vm.$http
          .get(api(`/filas/${id_fila}`))
          .then(function (response) {
            const users = response.data.data.usuarios_na_fila;
            console.log(users)
            for(var i = 0; i < users.length; i++) {
              console.log('posicao usuario: '+ i + ' - ' + users[i].id_usuario + ' id_user: ' + id_user)
              if (users[i].id_usuario === id_user) {
                console.log('entrou no if')
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
          this.$router.push({path: '/'})
          console.log(event)
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
