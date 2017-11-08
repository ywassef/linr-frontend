<template>
  <section class="section_large">
    <div class="title_container">
      <div class="title_body">
        <h1 class="title has-text-left" style="color: white">
          Bem vindo(a) Maria!</h1>
      </div>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
  export default {
    name: 'UserSpace',
  }
</script>

<style lang="scss" scoped>
  .section_large {
    padding: 0;
  }

  .user_body {
    padding: 3rem 1.5rem;
  }

  .title_container {
    background-color: #ff4c2c;
    height: 90px;
  }

  .title_body {
    padding: 1.5rem 1.5rem;
  }

  .button {
    margin: 10px;
  }

  #navbar {
    background-color: #c40000;
  }
</style>
