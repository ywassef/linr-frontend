<template>
  <section>
    <div class="content">
      <div class="columns is-centered has-text-centered">
        <div class="column is-one-quarter has-text-centered">
          <b>Nome</b>
        </div>
        <div class="column is-one-quarter has-text-centered">
          <b>Email</b>
        </div>
        <div class="column has-text-centered">
          <b>Permissão</b>
        </div>
        <div class="column has-text-centered">
          <abbr title="Remover Usuário"><b>Remover Usuário</b></abbr>
        </div>
      </div>

      <div class="columns is-centered  has-text-centered" v-for="func in funcionarios" id="linha">
        <div class="column is-one-quarter has-text-centered">
          {{func.nome}}
        </div>
        <div class="column is-one-quarter has-text-centered">
          {{func.email}}
        </div>
        <div class="column has-text-centered">
          {{func.permissao}}
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
    name: 'EditarFunc',
    methods: {
      remover_da_fila (nome, posicao) {
        alert(nome + ' removido da fila! ')

        this.Usuarios.splice(posicao - 1, 1)
      },
    },
    data () {
      return {
        funcionarios: [
          {
            nome: 'Denis Taveira',
            email: 'denis.taveira@hotmail.com',
            permissao: 'Gerente',
          },
          {
            nome: 'Ivan Alves',
            email: 'ivan@hotmail.com',
            permissao: 'Funcionario',
          },
          {
            nome: 'Yasmin Wassef',
            email: 'yasmin@hotmail.com',
            permissao: 'Funcionario',
          },
          {
            nome: 'Igor Luppi',
            email: 'igor@hotmail.com',
            permissao: 'Funcionario',
          },
          {
            nome: 'Alexandre Alves',
            email: 'alex@hotmail.com',
            permissao: 'Funcionario',
          },
        ],
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
