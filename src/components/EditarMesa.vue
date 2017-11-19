<template>
  <section>
    <div class="columns is-multiline has-text-centered">
      <div v-for="mesa in mesas">
        <div class="column has-text-centered">
          <div class="card">
            <div class="card-content">
              <div class="content">
                <p class="title">
                  ID: {{mesa.id}}
                </p>
                <p class="subtitle">
                  Capacidade
                  {{mesa.capacidade}}
                </p>
              </div>
            </div>
            <footer class="card-footer">
              <button class="button is-primary is-outlined card-footer-item" v-on:click="insertmanual">
                Ocupada
              </button>
              <button class="button is-primary is-outlined card-footer-item is-centered" v-on:click="insertmanual">
                Excluir
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'EditarMesa',
    components: {},
    methods: {
      insertmanual (event) {
        const cljs = new ClientJS()
        alert(document.getElementById('NameField').value + '\n'
          + document.getElementById('TelephoneField').value + '\n'
          + 'ID do usuário: ' + cljs.getFingerprint())
        console.log(event)
      },
    },
    data () {
      return {
        mesas: [
          {
            id: '1',
            capacidade: 2,
          },
          {
            id: '5',
            capacidade: 2,
          },
          {
            id: '9',
            capacidade: 4,
          },
          {
            id: '14',
            capacidade: 4,
          },
          {
            id: '19',
            capacidade: 2,
          },
          {
            id: '51',
            capacidade: 2,
          },
          {
            id: '49',
            capacidade: 4,
          },
          {
            id: '54',
            capacidade: 4,
          }
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

  .card {
    margin: 20px;
    padding: 5px;
  }

  button {
    text-align: center;
    padding: 5px;
    margin: 5px;
  }

</style>