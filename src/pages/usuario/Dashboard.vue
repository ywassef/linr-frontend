<template>
  <div class="user_body">
    <div class="content">
      <nav class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <h2 class="title has-text-centered"><strong>Meu Histórico</strong>
            </h2>
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

      <div class="level is-mobile">
        <div class="level-left"></div>
        <div class="level-right">
          <div class="level-item">
            <router-link to="historico">
              <button class="button is-small is-info">
                Ver mais
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <router-link to="restaurantes">
        <button class="button is-large is-success">
          <img :src="knife_fork" style="height: 30px; width: 30px"/>
          Restaurantes
        </button>
      </router-link>
      <router-link to="config">
        <button class="button is-medium is-danger">
          <img :src="setting" style="height: 25px; width: 25px"/>
          Alterar dados cadastrais
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
  import knife_fork from '../../img/knife_fork.png'
  import setting from '../../img/setting.png'

  export default {
    name: 'UserDashboard',
    data () {
      return {
        knife_fork,
        setting,
      }
    },
  }
</script>
