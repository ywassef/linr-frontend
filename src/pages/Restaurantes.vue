<template>
  <section>
    <div v-if="this.$session.exists()">
      <div class="hero-body">
        <h2 class="title"><b>Restaurantes</b></h2>
      </div>
      <div class="hero-body">
        <div class="columns is-mobile has-text-centered">
          <div class="column is-mobile has-text-centered">
            <div class="columns is-multiline has-text-centered">
              <div v-for="restaurante in restaurantes">
                <div class="column has-text-centered">
                  <div class="card">
                    <div class="card-content">
                      <div class="content">
                        <p class="title">
                          {{restaurante.nome}}
                        </p>
                        <p class="subtitle">
                          {{restaurante.descricao}}
                        </p>
                        <p class="subtitle">
                          {{restaurante.local}}
                        </p>
                      </div>
                    </div>
                    <footer class="card-footer">
                      <button class="button is-primary card-footer-item"
                              v-on:click="entrar">
                        ENTRAR
                      </button>
                      <button
                          class="button is-outlined is-primary card-footer-item"
                          v-on:click="perfil(restaurante.id)">
                        Ver perfil
                      </button>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="content">
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
  import MaskedInput from 'vue-masked-input'
  import EntrarFila from '../components/EntrarFilaCadastrado.vue'
  import { api } from '../js/environment.js'
  import Vue from 'vue'
  import VueSession from 'vue-session'
  Vue.use(VueSession)

  export default {
    name: 'Restaurantes',
    components: {
      'entrar-fila': EntrarFila,
    },
    data () {
      return {
        restaurantes: [],
      }
    },
    methods: {
      entrar () {
        this.$router.push('/')
      },
      perfil (id) {
        this.$router.push('/restaurantes/' + id)
      },
      preencherRestaurantes () {
        const vm = this
        vm.$http
          .get(api('/restaurantes'))
          .then(function (response) {
            return response.data.data
              .map(function (restaurante) {
                return {
                  nome: restaurante.nome,
                  descricao: restaurante.descricao,
                  local: restaurante.endereco,
                  id: restaurante.id,
                }
              })
          })
          .then(function (data) {
            vm.restaurantes = data
          })
      },
    },
    mounted () {
      this.preencherRestaurantes()
    },
  }
</script>

<style lang="scss" scoped>
  @import "../scss/style";

  .card {
    margin: 20px;
    padding: 5px;
  }

  .button {
    text-align: center;
    padding: 0px;
    margin: 0px;
  }

</style>
