<template>
  <div class="section">
    <navigation></navigation>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
  import Fila from '../../img/fila.png'
  import Mesa from '../../img/mesa.png'
  import Restaurante from '../../img/restaurante.png'
  import Usuario from '../../img/usuario.png'
  import NavigationAdmin from '../../components/NavigationAdmin.vue'

  export default {
    name: 'Admin',
    components: {
      'navigation': NavigationAdmin,
    },
    methods: {
      login(){
        this.$root.adm = 1
      }
    },
    data () {
      return {
        'fila': Fila,
        'mesa': Mesa,
        'restaurante': Restaurante,
        'usuario': Usuario,
      }
    },
    mounted (){
      this.login()
    }
  }
</script>

<style lang="scss" scoped>
  #navbar {
    background-color: black;
  }

  .section {
    padding: 0px;
  }

  div {
    section {
      padding: 1.5%;
    }
  }

  .imagem {
    height: 96px;
    width: 96px;
    position: relative;
    margin-bottom: 20px;
  }
</style>
