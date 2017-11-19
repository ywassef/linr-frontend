<template>
  <section>
    <div class="content">
      <div class="columns is-centered has-text-centered">
        <div class="column">
          <abbr title="Posição">Pos</abbr>
        </div>
        <div class="column is-one-quarter has-text-centered">
          Nome
        </div>
        <div class="column has-text-centered">
          Telefone
        </div>
        <div class="column has-text-centered">
          <abbr title="Hora Entrada Fila">HEF</abbr>
        </div>
        <div class="column has-text-centered">
          <abbr title="Hora Saida Fila">HSF</abbr>
        </div>
        <div class="column has-text-centered">
          <abbr title="Hora Prevista Atendimento">HPA</abbr>
        </div>
        <div class="column has-text-centered">
          <abbr title="Quantidade Pessoas">QP</abbr>
        </div>
        <div class="column has-text-centered">
          <abbr title="Tem Reserva">R</abbr>
        </div>
        <div class="column has-text-centered">
          Obs
        </div>
        <div class="column has-text-centered">
          <abbr title="Retirar da Fila">RF</abbr>
        </div>
      </div>

      <div class="columns is-centered has-text-centered" v-for="user in Usuarios" id="linha">
        <div class="column has-text-centered">
          {{user.posicao}}
        </div>
        <div class="column is-one-quarter has-text-centered">
          {{user.nome}}
        </div>
        <div class="column has-text-centered">
          {{user.telefone}}
        </div>
        <div class="column has-text-centered">
          {{user.hef}}
        </div>
        <div class="column has-text-centered">
          {{user.hsf}}
        </div>
        <div class="column has-text-centered">
          {{user.hpa}}
        </div>
        <div class="column has-text-centered">
          {{user.qp}}
        </div>
        <div class="column has-text-centered">
          {{user.r}}
        </div>
        <div class="column has-text-centered">
          {{user.obs}}
        </div>
        <div class="column has-text-centered">
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
      consultar () {
        this.$http
          .get(`http://localhost:8080/filas/${id}`)
          .then(response => {
            console.log(`Response: ${response}`)
            // TODO add session to cookies
            const session_id = response.data.id_usuario
            this.$router.push('Dashboard')
          })
          .catch(err => {
            console.log(`Error: ${err}`)
            return false
          })
      },
    },
    data () {
      return {
        usuarios: [
          {
            posicao: 1,
            nome: 'Denis Taveira L de Lima',
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

        restaurante: {nome: 'Outback'},
      }
    },

  }
</script>

<style lang="scss" scoped>
  @import "../scss/style";

  .content {
    position: relative;
    top: 40px;
  }

  section {
    padding-right: 50px;
    padding-left: 20px;
  }

  #linha {
    padding-top: 20px;
  }

</style>
