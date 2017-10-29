<template>
    <section class="section">
        <div class="columns is-multiline is-mobile is-centered">
            <div v-for="rest in restaurantes">
                <div class="column">
                    <div class="card">
                        <div class="card-content">
                            <p class="title">
                                {{rest.nome}}
                            </p>
                            <p class="subtitle">
                                {{rest.descricao}}
                            </p>
                            <p class="subtitle">
                                {{rest.local}}
                            </p>
                        </div>
                        <footer class="card-footer">
                            <p class="card-footer-item">
                          <span>
                            <a href="#">Informações</a>
                          </span>
                            </p>
                            <p class="card-footer-item">
                          <span>
                            <a href="#">Entrar na Fila</a>
                          </span>
                            </p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import MaskedInput from 'vue-masked-input'

    export default {
        name: 'Home',
        methods: {},
        data() {
            return {
                restaurantes: [
                    {nome: 'Restaurante 1', descricao: 'Pizzaria', local: 'Rua 21 de Abril'},
                    {nome: 'Restaurante 2', descricao: 'Pizzaria', local: 'Rua 21 de Abril'},
                    {nome: 'Restaurante 3', descricao: 'Pizzaria', local: 'Rua 21 de Abril'},
                    {nome: 'Restaurante 4', descricao: 'Pizzaria', local: 'Rua 21 de Abril'},
                    {nome: 'Restaurante 5', descricao: 'Pizzaria', local: 'Rua 21 de Abril'},
                    {nome: 'Restaurante 6', descricao: 'Pizzaria', local: 'Rua 21 de Abril'}
                ]
            }
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
</style>