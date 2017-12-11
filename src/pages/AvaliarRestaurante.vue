<template>
  <section>
    <div class="content">
      <section class="hero">
        <div v-if="this.$session.exists()">
          <div class="hero-body">
            <h2 class="title"><b>Conte como foi sua experiência no {{rest_nome}}</b></h2>
          </div>
          <form onsubmit="return false">
            <div class="hero-body">
              <div class="box has-text-left">
                <strong>Nota:</strong>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <label class="radio">
                        <input type="radio" name="rating" value="0">
                        0
                      </label>
                      <label class="radio">
                        <input type="radio" name="rating" value="1">
                        1
                      </label>
                      <label class="radio">
                        <input type="radio" name="rating" value="2">
                        2
                      </label>
                      <label class="radio">
                        <input type="radio" name="rating" value="3">
                        3
                      </label>
                      <label class="radio">
                        <input type="radio" name="rating" value="4">
                        4
                      </label>
                      <label class="radio">
                        <input type="radio" name="rating" value="5">
                        5
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="box has-text-left">
                <strong style="padding-bottom: 1rem">Comentário:</strong>
                <textarea class="textarea" placeholder=""></textarea>
              </div>
            </div>
          </form>
          <div class="hero-body">
            <button type="submit" class="button is-medium is-primary"
                    v-on:click="submeter">
              Submeter
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
  import { api } from '../js/environment.js'
  import Vue from 'vue'
  import VueSession from 'vue-session'
  Vue.use(VueSession)

  var data = {
    rest_nome: '',
    user_avg: 0,
    user_avg_exists: false,
    rest_avg: 0
  }

  export default {
    name: 'Logout',
    data () {
      return data
    },
    methods: {
      submeter () {
        const vm = this
        const rest_id = this.$route.params.r_id
        const user_id = this.$session.getAll().usuario.id
        let new_user_avg
        let radios = document.getElementsByName('rating');
        for (var i = 0, length = radios.length; i < length; i++) {
          if (radios[i].checked) {
            new_user_avg = i
            break;
          }
        }

        if(data.user_avg_exists) {
          vm.$http
            .put(api(`/restaurantes/${rest_id}/avaliacao/${user_id}/${new_user_avg}`))
            .then(function (response) {
              vm.$router.push({path: '/usuario'})
            })
        }
        else {
          vm.$http
            .post(api(`/restaurantes/${rest_id}/avaliacao/${user_id}/${new_user_avg}`))
            .then(function (response) {
              vm.$router.push({path: '/usuario'})
            })
        }

      },
      load_pagina() {
       data.user_avg_exists = false
       const vm = this
       const rest_id = this.$route.params.r_id
       const user_id = this.$session.getAll().usuario.id
       vm.$http
         .get(api(`/restaurantes/${rest_id}`))
         .then(function (response) {
           data.rest_nome = response.data.data.nome
           vm.$http
             .get(api(`/restaurantes/${rest_id}/avaliacao/${user_id}`))
             .then(function (response) {
               if(response.data.data.avaliacao_usuario) {
                 data.user_avg_exists = true
                 data.user_avg = response.data.data.avaliacao_usuario.valor
               }
               data.rest_avg = parseFloat(response.data.data.avaliacao_media.avg).toFixed(1)
             })

         })
      }
    },
    mounted () {
      this.load_pagina()
    }
  }
</script>

<style lang="scss" scoped>

  input{
    width: 1rem;
    height: 1rem;
  }
  .hero-body {
    padding: 2rem 2rem 0rem 2rem;
  }

</style>
