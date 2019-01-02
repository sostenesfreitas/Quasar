<template>
<div class="row">
  <q-tabs>
      <q-route-tab
        to="/vendedores"
        exact
        slot="title"
        label="Vendedores"
        :class=" nome != 'admin' && nome != 'vendedor' ? 'hidden' : '' "
      />

      <q-route-tab
        to="/estoque"
        exact
        slot="title"
        label="Estoque"
      />
      <q-route-tab
        to="/adm"
        exact
        slot="title"
        label="ADM"
        :class=" nome != 'admin' ? 'hidden' : ''"
      />

      <q-route-tab
        to="/design"
        exact
        slot="title"
        label="Designer"
      />

      <!-- <q-route-tab
        to="/"
        exact
        slot="title"
        label="Test"
      /> -->

     
    </q-tabs>
     <router-link to="/" class="	" style="margin-top:1%">
        <q-btn rounded color="red-12" label="Sair" />
      </router-link>
</div>
  
</template>

<script>
export default {
  name: 'Tabs',
  data () {
    return {
      nome:''
    }
  },
  created() {
    this.nome = this.$route.query.nome
  }
}
</script>