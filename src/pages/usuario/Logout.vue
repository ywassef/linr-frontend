<template>
  <section>
    <div class="content">
      <section class="hero">
        <div v-if="this.$session.exists()">
          <div class="hero-body">
            <h2 class="title"><b>Você tem certeza que deseja sair?</b></h2>
          </div>
          <div class="hero-body">
            <button class="button is-large is-primary"
                    v-on:click="logout">Sim
            </button>
          </div>
          <div class="hero-body">
            <button class="button is-large is-primary is-outlined"
                    v-on:click="cancelar">Não
            </button>
          </div>
        </div>
        <div v-else>
          <div class="content">
            <section class="hero">
              <div class="hero-body">
                <h2 class="title"><b>Não autorizado</b></h2>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
  import VueSession from 'vue-session'
  Vue.use(VueSession)

  export default {
    name: 'Logout',
    methods: {
     logout () {
       this.$session.destroy()
       this.$bus.$emit('login', 'User not logged')
       this.$router.push({path: '/'})
     },
      cancelar () {
       this.$router.push({path: '../usuario'})
      }
    }
  }
</script>
