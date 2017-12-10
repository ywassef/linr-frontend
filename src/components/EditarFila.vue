<template>
  <section>
    <div class="columns is-multiline has-text-centered">
      <div v-for="fila in filas">
        <div class="column has-text-centered">
          <div class="card">
            <div class="card-content">
              <div class="content">
                <p class="title">Descrição: {{fila.descricao}}</p>
                <p class="subtitle"> ID: {{fila.id}} </p>
                <p class="subtitle"> Hora Funcionamento Inicio: <br> {{fila.hora_funcionamento_inicio}}</p>
                <p class="subtitle">Hora Funcionamento Fim: <br> {{fila.hora_funcionamento_fim}}</p>
              </div>
            </div>
            <!--<footer class="card-footer">
              <button class="button is-primary is-outlined card-footer-item" v-on:click="">
                Ativar
              </button>
              <button class="button is-primary is-outlined card-footer-item is-centered" v-on:click="">
                Excluir
              </button>
            </footer>-->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { api } from '../js/environment'
  const adr = 1

  export default {
    name: 'EditarFila',
    components: {},
    methods: {
      pegarFilas () {
        const vm = this

        this.$http.get(api('/filas'))
          .then(function (response) {
            vm.filas = response.data.data.filter(e => {
              return e.id_restaurante == adr
            })
          })

        /*this.filas = [
          {
            id: 1,
            id_restaurante: 0,
            hora_funcionamento_inicio: '14:30',
            hora_funcionamento_fim: '15:50',
            tempo_medio_inicial: '00:30',
          },
          {
            id: 2,
            id_restaurante: 0,
            hora_funcionamento_inicio: '14:30',
            hora_funcionamento_fim: '15:50',
            tempo_medio_inicial: '00:40',
          },
        ]*/
      },
    },
    data () {
      return {
        filas: [],
      }
    },
    created () {
      this.pegarFilas()
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