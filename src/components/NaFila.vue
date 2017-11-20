<template>
  <section class="section">
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-parent">
        <div class="tile is-child notification is-primary">
          <h2 class="title">Código do restaurante: {{rest_nome}}</h2>
        </div>
        <div class="tile is-child">
          <div class="tile is-parent">
            <div class="tile is-child notification is-info">
              <h3 class="subtitle">Nome: {{user_nome}}</h3>
            </div>

            <div class="tile is-child notification is-info">
              <h3 class="subtitle">Grupo de: {{num_people}}</h3>
            </div>
          </div>
        </div>

        <div class="tile is-child">
          <div class="tile is-parent">
            <div class="tile is-child notification is-warning">
              <h3 class="subtitle"><i class="fa fa-clock-o" aria-hidden="true"></i>
                {{line_time}} min</h3>
            </div>

            <div class="tile is-child notification is-warning">
              <h3 class="subtitle"><i class="fa fa-users" aria-hidden="true"></i>
                {{line_numpeople}} grupos na fila</h3>
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
    rest_nome: 'Default_Rest_Name',
    user_nome: 'Default_User_Name',
    num_people: 'Default_Num_People',
    line_time: 'XX',
    line_numpeople: 'YY',
  }

  export default {
    name: 'NaFila',
    methods: {
      desistir: function (event) {
        if (confirm('Você tem certeza que deseja sair da fila?') === true) {
          this.$router.push({path: '/'})
          console.log(event)
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import "../scss/style";
  .tile {
    border: 5px solid white;
    border-radius: 10px;
  }

</style>
