<template>
  <section class="seaction">
    <div class="content">
      <section class="hero">
        <div class="hero-body">
          <img :src="logo" style="width: auto; height: auto"/>
        </div>
        <div class="hero-body">
          <div class="field">
            <label class="label">Código do Restaurante</label>
            <div class="control">
              <input class="input" id="RestID" type="email"
                     placeholder="Ex: outback12" value="outback12">
            </div>
          </div>
        </div>
        <div class="hero-body">
          <div class="container has-text-centered">
            <button class="button is-large is-primary"
                    v-on:click="entrar_na_fila">ENTRAR NA FILA
            </button>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
  import logo from '../img/logo_big.png'

  export default {
    name: 'Home',
    data () {
      return {
        logo,
      }
    },
    methods: {
      entrar_na_fila: function (event) {
        this.$router.push({path: 'r/' + document.getElementById('RestID').value})
        console.log(event)
      },
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

  #navbar {
    background-color: #c40000;
  }
</style>
