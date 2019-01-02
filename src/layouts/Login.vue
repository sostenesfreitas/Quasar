<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center">
        <div class="bloco">
          <q-list>
            <q-item>
              <q-item-main>
                <q-field label="Login" :label-width="3">
                  <q-input v-model="nome"/>
                </q-field>
              </q-item-main>
            </q-item>

            <q-item>
              <q-item-main>
                <q-field label="Senha" :label-width="3">
                  <q-input type="password" v-model="senha"/>
                </q-field>
              </q-item-main>
            </q-item>
            <q-btn
              color="primary full-width"
              @click="$router.push({path:'/layout', query:{nome, senha}})"
            >Login</q-btn>
          </q-list>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
</style>

<script>
export default {
  data() {
    return {
      nome: "admin",
      senha: "admin"
    };
  }
};
</script>
