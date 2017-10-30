<template>
  <section>
    <div class="content">
      <div class="columns">
        <div class="column">
          <abbr title="Posição">Pos</abbr>
        </div>
        <div class="column is-one-quarter">
          Nome
        </div>
        <div class="column">
          Telefone
        </div>
        <div class="column">
          <abbr title="Hora Entrada Fila">HEF</abbr>
        </div>
        <div class="column">
          <abbr title="Hora Saida Fila">HSF</abbr>
        </div>
        <div class="column">
          <abbr title="Hora Prevista Atendimento">HPA</abbr>
        </div>
        <div class="column">
          <abbr title="Quantidade Pessoas">QP</abbr>
        </div>
        <div class="column">
          <abbr title="Tem Reserva">R</abbr>
        </div>
        <div class="column">
          Obs
        </div>
        <div class="column">
          <abbr title="Retirar da Fila">RF</abbr>
        </div>
      </div>

      <div class="columns" v-for="user in Usuarios">
        <div class="column">
          {{user.posicao}}
        </div>
        <div class="column is-one-quarter">
          {{user.nome}}
        </div>
        <div class="column">
          {{user.telefone}}
        </div>
        <div class="column">
          {{user.hef}}
        </div>
        <div class="column">
          {{user.hsf}}
        </div>
        <div class="column">
          {{user.hpa}}
        </div>
        <div class="column">
          {{user.qp}}
        </div>
        <div class="column">
          {{user.r}}
        </div>
        <div class="column">
          {{user.obs}}
        </div>
        <div class="column">
          <a class="button is-danger is-outlined"
             v-on:click="remover_da_fila(user.nome, user.posicao)">Remover</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import MaskedInput from 'vue-masked-input'

  export default {
    name: 'FilaRestaurante',
    methods: {
      remover_da_fila (nome, posicao) {
        alert(nome + ' removido da fila! ')

        this.Usuarios.splice(posicao - 1, 1)
      },
    },
    data () {
      return {
        Usuarios: [
          {
            posicao: 1,
            nome: 'Denis Taveira Laurentino de Lima',
            telefone: '12982054061',
            hef: '14:30',
            hsf: '14:50',
            hpa: '14:40',
            qp: 2,
            r: 'N',
            obs: '-',
          },
          {
            posicao: 2,
            nome: 'Igor',
            telefone: '12982054061',
            hef: '14:30',
            hsf: '14:50',
            hpa: '14:40',
            qp: 2,
            r: 'N',
            obs: '-',
          },
          {
            posicao: 3,
            nome: 'Ivan',
            telefone: '12982054061',
            hef: '14:30',
            hsf: '14:50',
            hpa: '14:40',
            qp: 2,
            r: 'N',
            obs: '-',
          },
          {
            posicao: 4,
            nome: 'Yasmin',
            telefone: '12982054061',
            hef: '14:30',
            hsf: '14:50',
            hpa: '14:40',
            qp: 2,
            r: 'N',
            obs: '-',
          },
          {
            posicao: 5,
            nome: 'Alex',
            telefone: '12982054061',
            hef: '14:30',
            hsf: '14:50',
            hpa: '14:40',
            qp: 2,
            r: 'N',
            obs: '-',
          },
        ],

        Restaurante: {nome: 'Outback'},
      }
    },
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

  .content {
    position: relative;
    top: 40px;
  }
</style>
