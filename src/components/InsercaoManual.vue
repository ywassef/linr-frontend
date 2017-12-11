<template>
  <section class="section">
    <form onsubmit="return false">
      <div class="field">
        <label class="label">Nome</label>
        <div class="control">
          <input class="input" name="NameField" type="text"
                 placeholder="Ex: Ivan Alves">
        </div>
      </div>
      <div class="field">
        <label class="label">Telefone</label>
        <div class="control">
          <input class="input" name="TelephoneField" type="tel"
                 placeholder="(11) 11111-1111">
        </div>
      </div>
      <div class="field">
        <label class="label">Quantidade de Pessoas</label>
        <div class="control">
          <input class="input" name="NumPeopleField" type="text"
                 placeholder="2">
        </div>
      </div>
      <button class="button is-primary is-outlined" v-on:click="insertmanual">
        Inserir
      </button>
    </form>
  </section>
</template>

<script>
  import MaskedInput from 'vue-masked-input'
  import { api } from '../js/environment'

  export default {
    name: 'InsercaoManual',
    props: ['idfila', 'qtd_pessoas_fila'],
    methods: {
      insertmanual () {
        const [form] = document.getElementsByTagName('form')

        const id_user = Math.floor(Math.random() * 10000000)

        const vm = this

        console.log("Qtd pessoas na fila")
        console.log(this.qtd_pessoas_fila)
        vm.$http.post(api('/auth/new/temp'), {
          id: id_user,
          nome: form.NameField.value,
          telefone: form.TelephoneField.value,
        })
          .then(response => {
            vm.$http.put(api(`/filas/${vm.idfila}/enter`), {
              id_usuario: id_user,
              qtd_pessoas: form.NumPeopleField.value,
              posicao_qdo_entrou: vm.qtd_pessoas_fila
            })
              .then(response => {
                console.log(`Response: ${response}`)
                // TODO add session to cookies
              })
              .catch(err => {
                console.log(`Error: ${err}`)
                return false
              })
          })
        this.chamarPai
        this.$emit('idpassado', this.idfila);
        this.$router.push({name: 'MeuRestaurante'}).$forceUpdate()
      },
      chamarPai() {
        this.$emit('chamou');
      },
    },
    data () {
      return {}
    },
  }
</script>

<style lang="scss" scoped>
  @import "../scss/style";

  html, body, #app {
    height: 100%;
    width: 100%;
    margin: 0;
  }

  html {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  button {
    position: relative;
  }
</style>
