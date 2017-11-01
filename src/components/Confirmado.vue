<template>
  <section class="section">

    <div class="tile is-ancestor">
      <div class="tile is-vertical is-parent is-mobile">
        <div class="tile is-child notification is-primary">
          <h2 class="title">Código do restaurante: {{this.$rest_id}}</h2>
        </div>
        <div class="tile is-child">
          <div class="tile is-parent is-mobile">
            <div class="tile is-child notification is-info">
              <h3 class="subtitle">Nome: {{this.$name}}</h3>
            </div>

            <div class="tile is-child notification is-info">
              <h3 class="subtitle">Grupo de: {{this.$num_people}}</h3>
            </div>
          </div>
        </div>

        <div class="tile is-child">
          <div class="tile is-parent is-mobile">
            <div class="tile is-child notification is-warning">
              <span style="font-size: 30px"><img src="../img/clock.png" style="height: 25px; width: 25px"/> {{this.$time}} min</span>
            </div>

            <div class="tile is-child notification is-warning">
              <span style="font-size: 30px"><img src="../img/group_of.png" style="height: 25px; width: 25px"/> {{this.$line}} grupos na fila</span>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="container has-text-centered">
      <button class="button is-large is-primary" v-on:click="desistir">Desistir</button>
    </div>

  </section>
</template>

<script>
  export default {
    name: 'Confirmado',
    methods: {
      desistir: function(event) {
        if (confirm("Você tem certeza que deseja sair da fila?") === true) {
          this.$router.push({ path: '/'});
          console.log(event)
        }
      }
    },
  };
</script>

<style>
 .tile {
   border: 5px solid white;
   border-radius: 10px;
 }

 #navbar {
   background-color: #c40000;
 }

</style>
