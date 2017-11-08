<template>
  <section class="section">
    <div class="columns is-multiline is-mobile is-centered has-text-centered">
      <div v-for="restaurante in restaurantes" :key="restaurante.id">
        <div class="column is-one-third-desktop is-centered has-text-centered">
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
              <a href="#" class="card-footer-item">
                Informações
              </a>
              <entrar-fila class="card-footer-item"></entrar-fila>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import MaskedInput from 'vue-masked-input'
  import EntrarFila from '../components/EntrarFilaCadastrado.vue'

  export default {
    name: 'Restaurantes',
    components: {
      'entrar-fila': EntrarFila,
    },
    data () {
      return {
        restaurantes: [
          {
            nome: 'Outback Steakhouse',
            descricao: 'Australiano',
            local: 'Shopping CenterVale',
          },
        ],
      }
    },
    /*methods: {
      preencherRestaurantes () {
        const vm = this
        vm.$http
          .get('http://localhost:8080/restaurante')
          .then(function (response) {
            return response.data.data
              .map(function (restaurante) {
                return {
                  nome: restaurante.nome,
                  descricao: restaurante.descricao,
                  local: restaurante.endereco,
                }
              })
          })
          .then(function (data) {
            console.log(`1: ${JSON.stringify(data)}`)
            vm.restaurantes = data
          })
      },
    },
    mounted () {
      this.preencherRestaurantes()
    },*/
  }
</script>

<style lang="scss">
  @import "../scss/style";

  html, body, #app {
    height: 100%;
    width: 100%;
    margin: 0;
  }

  html {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  #navbar {
    background-color: #c40000;
  }
</style>
