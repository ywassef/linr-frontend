<template>
    <div class="about">
        <div class="content">
            <button class="button is-primary is-outlined" v-on:click="entrar_na_fila">ENTRAR NA FILA</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Entrarnafila',
        methods: {
            entrar_na_fila: function (event) {
                var cljs = new ClientJS();
                alert('Entrou na fila! ' + cljs.getFingerprint());
                console.log(event)
            }
        }
    }
</script>
