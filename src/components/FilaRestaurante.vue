<template>
  <section>
    <div class="content">
      <div class="columns is-centered has-text-centered">
        <div class="column">
          <abbr title="Posição">Pos</abbr>
        </div>
        <div class="column has-text-centered">
          Nome
        </div>
        <div class="column has-text-centered">
          Telefone
        </div>
        <div class="column has-text-centered">
          <abbr title="Hora Entrada Fila">HEF</abbr>
        </div>
        <!--<div class="column has-text-centered">
          <abbr title="Hora Saida Fila">HSF</abbr>
        </div>
        <div class="column has-text-centered">
          <abbr title="Hora Prevista Atendimento">HPA</abbr>
        </div>-->
        <div class="column has-text-centered">
          <abbr title="Quantidade Pessoas">Qtd Pessoas</abbr>
        </div>
        <div class="column has-text-centered">
          <abbr title="Tem Reserva">Reservado</abbr>
        </div>
        <!--<div class="column has-text-centered">
          Obs
        </div>-->
        <div class="column has-text-centered">
          <abbr title="Retirar da Fila">Desistiu</abbr>
        </div>
        <div class="column has-text-centered">
          <abbr title="Retirar da Fila">Atendido</abbr>
        </div>
      </div>

      <div class="columns is-centered has-text-centered" v-for="usuario in usuarios" id="linha">
        <div class="column has-text-centered">
          {{usuarios.indexOf(usuario)+1}}
        </div>
        <div class="column has-text-centered">
          {{usuario.nome}}
        </div>
        <div class="column has-text-centered">
          {{usuario.telefone}}
        </div>
        <div class="column has-text-centered">
          {{usuario.hora_entrada_fila}}
        </div>
        <!--<div class="column has-text-centered">
          {{usuario.hora_entrada_atendimento}}
        </div>
        <div class="column has-text-centered">
          {{usuario.hora_saida_restaurante}}
        </div>-->
        <div class="column has-text-centered">
          {{usuario.qtd_pessoas}}
        </div>
        <div class="column has-text-centered">
          {{usuario.tem_reserva}}
        </div>
        <!--<div class="column has-text-centered">
          {{usuario.obs}}
        </div>-->
        <div class="column has-text-centered">
          <a class="button is-danger is-outlined"
             v-on:click="usuario_desistiu(usuario.id)">Desistiu</a>
        </div>
        <div class="column has-text-centered">
          <a class="button is-success is-outlined"
             v-on:click="usuario_atendido(usuario.id_usuario)">Entrou</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import MaskedInput from 'vue-masked-input'
  import { api } from '../js/environment'

  export default {
    name: 'FilaRestaurante',
    props: ['idfila'],
    methods: {
      usuario_desistiu (id) {
        console.log(id)
        this.$http
          .put(api('/filas/' + this.idfila + '/desistir'), {
            id_usuario_fila: id,
          })
          .then(response => {
            console.log(`Response: ${response}`)
          })
          .catch(err => {
            console.log(`Error: ${err}`)
            return false
          })
        this.consultarFila()
      },
      usuario_atendido (id) {
        this.$http
          .put(api('/filas/' + this.idfila + '/sair'), {
            id_usuario_fila: id,
          })
          .then(response => {
            console.log(`Response: ${response}`)
          })
          .catch(err => {
            console.log(`Error: ${err}`)
            return false
          })
        this.consultarFila()
      },
      consultarFila () {

        const vm = this
        this.$http
          .get(api(`/filas/` + vm.idfila)) //Arrumar
          .then(response => {
            // TODO add session to cookies
            vm.usuarios = response.data.data.usuarios_na_fila
            //this.$router.push({name: 'Dashboard'})
          })
          .catch(err => {
            console.log(`Error: ${err}`)
            return false
          })
      },
    },
    watch: {
      idfila : function(){
        this.consultarFila()
      }
    },
    data () {
      return {
        usuarios: [],

        restaurante: {},

        filas: [],
      }
    },
    mounted () {
      this.consultarFila()
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/style";

  .content {
    position: relative;
    top: 40px;
  }

  .select {
    position: relative;
    padding-bottom: 20px;
    border-bottom: 20px;
    margin-bottom: 20px;
  }

  section {
    padding-right: 50px;
    padding-left: 20px;
  }

  #linha {
    padding-top: 20px;
  }

</style>
