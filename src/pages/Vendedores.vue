<template>
    <q-layout>
        <q-page-container class="vendedor">
            <router-link  v-for="vendedor in vendedores"
             :to="{path:'/vendedor', query:{vendedor}}"
             :key="vendedor.id">
                <q-btn rounded  color="primary" :label="vendedor.name" icon="folder"/>
            </router-link>
        </q-page-container>
    </q-layout>
</template>
<script>
export default {
    data () {
        return {
            vendedores: [
                {
                    name: "Fernando",
                    contratos: [
                        {
                            instituicao:"universidade",
                            data: "31/12/2018",
                            pdf:"assets/habitus-modelo3-contrato-marcenaria.pdf"
                        },
                        {
                            instituicao:"faculdade",
                            data: "31/12/2018",
                            pdf:"assets/habitus-modelo3-contrato-marcenaria.pdf"
                        },
                        {
                            instituicao:"escola",
                            data: "31/12/2018",
                            pdf:"assets/habitus-modelo3-contrato-marcenaria.pdf"
                        }
                    ]
                },
                {
                    name: "Marcos",
                    contratos: [
                        {
                            instituicao:"universidade",
                            data: "31/12/2018",
                            pdf:"assets/habitus-modelo3-contrato-marcenaria.pdf"
                        },
                        {
                            instituicao:"faculdade",
                            data: "31/12/2018",
                            pdf:"assets/habitus-modelo3-contrato-marcenaria.pdf"
                        },
                        {
                            instituicao:"escola",
                            data: "31/12/2018",
                            pdf:"assets/habitus-modelo3-contrato-marcenaria.pdf"
                        }
                    ]
                },
                {
                    name: "Lucas",
                    contratos: [
                        {
                            instituicao:"universidade",
                            data: "31/12/2018",
                            pdf:"assets/habitus-modelo3-contrato-marcenaria.pdf"
                        },
                        {
                            instituicao:"faculdade",
                            data: "31/12/2018",
                            pdf:"assets/habitus-modelo3-contrato-marcenaria.pdf"
                        },
                        {
                            instituicao:"escola",
                            data: "31/12/2018",
                            pdf:"assets/habitus-modelo3-contrato-marcenaria.pdf"
                        }
                    ]
                },
                {
                    name: "Fernando",
                    contratos: [
                        {
                            instituicao:"universidade",
                            data: "31/12/2018",
                            pdf:"assets/habitus-modelo3-contrato-marcenaria.pdf"
                        },
                        {
                            instituicao:"faculdade",
                            data: "31/12/2018",
                            pdf:"assets/habitus-modelo3-contrato-marcenaria.pdf"
                        },
                        {
                            instituicao:"escola",
                            data: "31/12/2018",
                            pdf:"assets/habitus-modelo3-contrato-marcenaria.pdf"
                        }
                    ]
                },
                {
                    name: "Marcos",
                    contratos: [
                        {
                            instituicao:"universidade",
                            data: "31/12/2018",
                            pdf:"assets/habitus-modelo3-contrato-marcenaria.pdf"
                        },
                        {
                            instituicao:"faculdade",
                            data: "31/12/2018",
                            pdf:"assets/habitus-modelo3-contrato-marcenaria.pdf"
                        },
                        {
                            instituicao:"escola",
                            data: "31/12/2018",
                            pdf:"assets/habitus-modelo3-contrato-marcenaria.pdf"
                        }
                    ]
                },
                {
                    name: "Lucas",
                    contratos: [
                        {
                            instituicao:"universidade",
                            data: "31/12/2018",
                            pdf:"assets/habitus-modelo3-contrato-marcenaria.pdf"
                        },
                        {
                            instituicao:"faculdade",
                            data: "31/12/2018",
                            pdf:"assets/habitus-modelo3-contrato-marcenaria.pdf"
                        },
                        {
                            instituicao:"escola",
                            data: "31/12/2018",
                            pdf:"assets/habitus-modelo3-contrato-marcenaria.pdf"
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped>
    
    .q-btn {
        margin: 3%;
    }

</style>