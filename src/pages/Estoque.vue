<template>
    <q-page padding class="row justify-center">
    <div  style="width: 500px; max-width: 90vw;">
        <q-list>

            <q-list-header inset>Producao</q-list-header>
            <q-item-separator />
            <q-item 
              v-for="prod in producao"
              v-bind:key="prod.id">
             
                <q-item-side icon="work" inverted color="primary" />
                <q-item-main
                    :label="prod.material"
                    :sublabel="prod.name"
                >
                <p class="q-item-sublabel">{{ prod.data }}</p>
                </q-item-main>
                
                <q-item-side right 
                :icon="prod.tipo == 'saida' ? 'arrow_downward' : 'arrow_upward'" 
                :color="prod.tipo == 'saida' ? 'negative' : 'positive'" />
                
             </q-item>

              <q-item-separator />

            <q-list-header inset>Fotografia</q-list-header>
            <q-item-separator />
            <q-item 
            v-for="foto in fotografia"
            :key="foto.id">
                <q-item-side icon="camera_alt" inverted color="primary" />
                <q-item-main
                    :label="foto.material"
                    :sublabel="foto.name"
                >
                <p class="q-item-sublabel">{{ foto.data }}</p>
                </q-item-main>
                <q-item-side right 
                :icon="foto.tipo == 'saida' ? 'arrow_downward' : 'arrow_upward'" 
                :color="foto.tipo == 'saida' ? 'negative' : 'positive'" />
             </q-item>

        </q-list>
    </div>
    </q-page>
</template>
<script>
export default {
    data() {
        return {
            producao : [
                {
                    material: "tinta",
                    tipo:"saida",
                    data:"31/12/2018",
                    name: "Fernando"
                },
                {
                    material: "papel",
                    tipo:"entrada",
                    data:"31/12/2018",
                    name: "Lucas"
                }
            ],
            fotografia : [
                {
                    material: "bateria",
                    tipo:"saida",
                    data:"31/12/2018",
                    name: "Jonas"
                },
                {
                    material: "camera",
                    tipo:"entrada",
                    data:"31/12/2018",
                    name: "Fernando"
                }
            ]
        }
    }
}
</script>
