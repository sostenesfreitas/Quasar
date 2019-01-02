<template>
    <q-page padding class="row justify-center">
    <div  style="width: 500px; max-width: 90vw;">
        <q-list>
            <q-list-header inset>{{vendedor.name}}</q-list-header>
            <q-item v-for="contrato in vendedor.contratos"
            :key="contrato.id">
                <q-item-side icon="folder" inverted color="primary" />
                <q-item-main class="column">
                    <q-item-tile label>{{contrato.instituicao}}</q-item-tile>
                    <q-item-tile sublabel>{{ contrato.data }}</q-item-tile>
                </q-item-main>
                <!-- <a :href="contrato.pdf">
                    <q-item-side right icon="arrow_downward" color="primary" />
                </a>  -->
             </q-item>
        </q-list>
    </div>
    </q-page>
</template>
<script>
export default {
    data () {
        return {
            vendedor: this.$route.query.vendedor
        }
    }
}
</script>
