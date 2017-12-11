<template>
  <section>
    <div class="content">
      <section class="hero">
        <div class="columns is-mobile is-centered">
          <div class="column has-text-centered is-one-third-desktop">
            <div class="hero-body">
              <img :src="logo" style="width: auto; height: auto"/>
            </div>
            <div class="hero-body">
              <div class="field">
                <label class="label">Código da Fila</label>
                <div class="control">
                  <input class="input" id="RestID" type="text"
                         placeholder="Ex: outback12">
                </div>
              </div>
            </div>
            <div class="hero-body">
              <button class="button is-large is-primary"
                      v-on:click="entrar_na_fila">ENTRAR NA FILA
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
  import logo from '../img/full_logo640px.png'

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
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import "../scss/style";

</style>
