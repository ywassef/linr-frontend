<template>
  <section>
    <div class="content">
      <h1 align="center">{{restaurante[0].nome}}</h1>
      <div class="select" id="dropdown">
        <select v-model="nfila" @change="atualizarFila">
          <option v-for="f in filas" :value="f.id">{{f.id}} {{f.descricao}}</option>
        </select>
      </div>
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Data</p>
            <p class="title">{{datahoje.d}}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Pessoas Na Fila</p>
            <p class="title">{{datahoje.quantidade_pessoas_fila}}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Tempo Médio Espera</p>
            <p class="title">{{fila.tempo_medio_inicial}} min</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Previsão Próximo Atendimento</p>
            <p class="title">{{datahoje.hp}}</p>
          </div>
        </div>
      </nav>
      <div class="columns">
        <div class="column is-three-quarters">
          <h2 id="tituloFila">Fila Restaurante</h2>
          <fila :idfila="nfila"></fila>
        </div>
        <div class="column is-one-quarter">
          <h2 id="tituloFila2">Inserção Manual</h2>
          <inserir></inserir>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import FilaRestaurante from '../../components/FilaRestaurante.vue'
  import InsercaoManual from '../../components/InsercaoManual.vue'
  import MaskedInput from 'vue-masked-input'
  import { api } from '../../js/environment'

  const hoje = new Date()
  const dia = hoje.getDate()
  const mes = hoje.getMonth()
  const ano4 = hoje.getFullYear()
  const str_data = dia + '/' + (mes + 1) + '/' + ano4

  const hora = new Date()
  hora.setMinutes(hora.getMinutes() + 15)
  let str_prevAtendimento = hora.getHours() + ':' + hora.getMinutes()
  let idf = 1
  const idr = 1

  export default {
    name: 'MeuRestaurante',
    components: {
      'fila': FilaRestaurante,
      'inserir': InsercaoManual,
    },
    methods: {
      consultarFilas () {
        const vm = this
        this.$http
          .get(api('/filas'))
          .then(response => {
            // TODO add session to cookies
            vm.filas = response.data.data.filter(e => {
              return e.id_restaurante == idr
            })
            //this.$router.push({name: 'Dashboard'})
          })
          .catch(err => {
            console.log(`Error: ${err}`)
            return false
          })

        /*this.fila =
          {
            id: 1,
            id_restaurante: 0,
            hora_funcionamento_inicio: '14:30',
            hora_funcionamento_fim: '15:50',
            tempo_medio_inicial: '00:30',
          }*/
      },
      consultarFila () {
        const vm = this
        this.$http
          .get(api('/filas/' + idf))
          .then(response => {
            // TODO add session to cookies
            vm.fila = response.data.data
            vm.datahoje.quantidade_pessoas_fila = response.data.data.usuarios_na_fila.length
            //this.$router.push({name: 'Dashboard'})
          })
          .catch(err => {
            console.log(`Error: ${err}`)
            return false
          })

        /*this.fila =
          {
            id: 1,
            id_restaurante: 0,
            hora_funcionamento_inicio: '14:30',
            hora_funcionamento_fim: '15:50',
            tempo_medio_inicial: '00:30',
          }*/
      },
      consultarRestautante () {
        const vm = this
        this.$http
          .get(api('/restaurantes/' + idr)) //Arrumar
          .then(response => {
            vm.restaurante = response.data.data
          })
          .catch(err => {
            console.log(`Error: ${err}`)
            return false
          })
      },
      atualizarFila () {
        idf = this.nfila
        this.consultarFila()
        this.consultarRestautante()
        this.consultarFilas()

        hora.setMinutes(hora.getMinutes() + 15)
        this.datahoje.hp = hora.getHours() + ':' + hora.getMinutes()
      }
    },
    data () {
      return {
        fila: [],
        filas: [],
        restaurante: [],
        datahoje: {
          d: str_data,
          hp: str_prevAtendimento,
          quantidade_pessoas_fila: {},
        },
        nfila: 1,
      }
    },
    mounted () {
      this.consultarFila()
      this.consultarRestautante()
      this.consultarFilas()
      console.log(this.nfila)
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../scss/style";

  #dropdown {
    position: absolute;
    top: 100px;
    left: 4%;
    font-size: 20px;
  }

  #navbar {
    background-color: black;
  }

  div.content h1 {
    font-size: 42px;
    color: darkred;
  }

  div.content nav.level {
    padding-top: 40px;
    padding-bottom: 50px;
  }

  #tituloFila {
    margin-bottom: -10px;
    position: relative;
    text-align: center;
  }

  #tituloFila2 {
    margin-bottom: -10px;
    position: relative;
    text-align: center;
  }

  fila {
    position: relative;
    border-bottom: 300px;
  }
</style>
