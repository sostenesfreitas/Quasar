<template>
    <q-page class="flex flex-center">
      <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    </q-page>
</template>

<style>
</style>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      nome: this.$route.query.nome,
      senha: this.$route.query.senha
    };
  }
};
</script>
