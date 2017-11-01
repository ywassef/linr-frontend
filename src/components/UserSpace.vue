<template>
  <section class="section_large">
    <div class="title_container">
      <div class="title_body">
        <h1 class="title has-text-left" style="color: white">Bem vindo(a) Maria!</h1>
      </div>
    </div>

    <div class="user_body">
      <div class="content">
        <nav class="level is-mobile">
          <div class="level-left">
            <div class="level-item">
              <h2 class="title has-text-centered"><strong>Meu Histórico</strong></h2>
            </div>
          </div>
        </nav>

        <table class="table is-mobile">
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
          </tbody>
        </table>

        <nav class="level is-mobile">
          <div class="level-left"></div>
          <div class="level-right">
            <div class="level-item">
              <button type="submit" class="button is-small is-info"
                      v-on:click="historico">
                Ver mais
              </button>
            </div>
          </div>
        </nav>
        <button type="submit" class="button is-large is-success"
                v-on:click="restaurantes">
          <img src="../img/knife_fork.png" style="height: 30px; width: 30px"/>
          Restaurantes
        </button>
        <button type="submit" class="button is-medium is-danger"
                v-on:click="alterar_dados">
          <img src="../img/setting.png" style="height: 25px; width: 25px"/>
          Alterar dados cadastrais
        </button>
      </div>
    </div>
  </section>
</template>

<script>
   export default {
    name: 'UserSpace',
    methods: {
      alterar_dados: function (event) {
        this.$router.push({ path: 'alterar_dados' });
      },
      historico: function (event) {
        this.$router.push({ path: 'historico' });
      },
      restaurantes: function (event) {
        this.$router.push({ path: 'restaurantes' });
      },
    }
  }
</script>

<style>
 .section_large {
   padding: 0;
 }

  .user_body {
    padding: 3rem 1.5rem;
  }

  .title_container {
    background-color: #ff4c2c;
    height: 90px;
  }

  .title_body {
    padding: 1.5rem 1.5rem;
  }

  .button {
    margin: 10px;
  }

 #navbar {
   background-color: #c40000;
 }

</style>