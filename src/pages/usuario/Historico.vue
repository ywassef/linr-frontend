<template>
  <section class="section">
    <nav class="level is-mobile">
      <div class="level-item has-text-centered">
        <p class="title">Meu Histórico</p>
      </div>
    </nav>

    <div class="columns is-mobile is-centered">
      <div class="column has-text-centered is-half-desktop">
        <table class="table is-mobile is-full-width">
          <thead>
          <tr>
            <th>Data</th>
            <th>Restaurante</th>
            <th>Espera</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>25/10/2017</td>
            <td>Outback</td>
            <td>30 min</td>
          </tr>
          <tr>
            <td>15/09/2017</td>
            <td>Outback</td>
            <td>1h 24 min</td>
          </tr>
          <tr>
            <td>06/08/2017</td>
            <td>Outback</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>03/08/2017</td>
            <td>Outback</td>
            <td>20 min</td>
          </tr>
          <tr>
            <td>20/07/2017</td>
            <td>Outback</td>
            <td>1h 06 min</td>
          </tr>
          <tr>
            <td>19/07/2017</td>
            <td>Outback</td>
            <td>47 min</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <button type="submit" class="button is-medium is-primary"
            v-on:click="voltar">
      Voltar
    </button>
  </section>
</template>

<script>
  export default {
    name: 'Historico',
    methods: {
      voltar: function (event) {
        this.$router.push({path: 'usuario'})
      },
    },
  }
</script>

<style>

</style>
