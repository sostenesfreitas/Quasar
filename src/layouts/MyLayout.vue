<template>
  <q-layout>
    <q-layout-header>
      <q-toolbar class="head">
        <my-tabs v-if="$q.theme === 'mat'"/>
      </q-toolbar>
    </q-layout-header>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import Tabs from "components/Tabs";
export default {
  name: "MyLayout",
  components: {
    "my-tabs": Tabs
  },
  data() {
    return {
      fotos: [
        {
          title: "miojo"
        },
        {
          title: "nissin"
        }
      ]
    };
  }
};
</script>

<style>
.head {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
