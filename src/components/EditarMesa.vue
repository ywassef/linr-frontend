<template>
  <section>
    <div class="columns is-multiline has-text-centered">
      <div v-for="mesa in mesas">
        <div class="column has-text-centered">
          <div class="card">
            <div class="card-content">
              <div class="content">
                <p class="title">
                  ID: {{mesa.id_mesa}}
                </p>
                <p class="subtitle">
                  Capacidade
                  {{mesa.capacidade}}
                </p>
              </div>
            </div>
            <footer class="card-footer">
              <button class="button is-primary card-footer-item" v-if="mesa.ocupada"
                      v-on:click="atualizar(mesa.id_mesa, mesa.ocupada)">
                Ocupada
              </button>
              <button class="button is-success is-outlined card-footer-item" v-else
                      v-on:click="atualizar(mesa.id_mesa, mesa.ocupada)">
                Desocupada
              </button>
              <button class="button is-primary is-outlined card-footer-item is-centered" v-on:click="excluir(mesa.id_mesa)">
                Excluir
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { api } from '../js/environment'

  const idr = 1

  export default {
    name: 'EditarMesa',
    components: {},
    methods: {
      atualizar (id, ocupada) {
        ocupada = !ocupada
        this.$http.put(api('/restaurantes/' + idr + '/mesas/' + id), {
          ocupada: ocupada,
        })
          .then(response => {
            console.log(`Response: ${response}`)
            // TODO add session to cookies
          })

        this.pegarMesas()
        this.$router.push({name: 'Mesas'})
      },
      excluir (id) {
        this.$http.put(api('/restaurantes/' + idr + '/mesas/' + id), {
          capacidade: -1,
        })
          .then(response => {
            console.log(`Response: ${response}`)
            // TODO add session to cookies
          })

        this.pegarMesas()
      },
      pegarMesas () {
        const vm = this

        this.$http.get(api('/restaurantes/' + idr))
          .then(function (response) {
            vm.mesas = response.data.data.mesas.filter(e => {
              return e.capacidade > 0
            }).sort(function (a, b){
              return (a.id_mesa - b.id_mesa)
            })
          })
      },
    },
    data () {
      return {
        mesas: [],
      }
    },
    created () {
      this.pegarMesas()
    }
  }
</script>

<style lang="scss" scoped>

  .card {
    margin: 20px;
    padding: 5px;
  }

  button {
    text-align: center;
    padding: 5px;
    margin: 5px;
  }

</style>