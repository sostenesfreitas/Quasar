<template>
  <q-layout>
    <q-page-container class="flex wrap justify-around">
      <div class="bloco">
        <q-list>
          <q-list-header inset>Contas - Pagar / Receber</q-list-header>
          <q-item-separator/>
          <q-item v-for="conta in contas" :key="conta.id">
            <q-item-side icon="attach_money" inverted color="primary"/>
            <q-item-main :label="conta.valor" :sublabel="conta.name">
              <p class="q-item-sublabel">{{ conta.data }}</p>
            </q-item-main>
            <q-item-side
              right
              :icon="conta.tipo == 'saida' ? 'arrow_downward' : 'arrow_upward'"
              :color="conta.tipo == 'saida' ? 'negative' : 'positive'"
            />
          </q-item>
        </q-list>
      </div>

      <div class="bloco">
        <q-list>
          <q-list-header inset>Entradas / Saidas</q-list-header>
          <q-item-separator/>
          <q-item v-for="entrada in verba" v-bind:key="entrada.id">
            <q-item-side icon="attach_money" inverted color="primary"/>
            <q-item-main :label="entrada.valor" :sublabel="entrada.name">
              <p class="q-item-sublabel">{{ entrada.data }}</p>
            </q-item-main>

            <q-item-side
              right
              :icon="entrada.tipo == 'saida' ? 'arrow_downward' : 'arrow_upward'"
              :color="entrada.tipo == 'saida' ? 'negative' : 'positive'"
            />
          </q-item>
        </q-list>
      </div>

      <div class="bloco">
        <q-list>
          <q-list-header inset>Agendamentos</q-list-header>
          <q-item-separator/>
          <q-item v-for="agenda in agendamentos" :key="agenda.id">
            <q-item-side icon="alarm" inverted color="primary"/>
            <q-item-main :label="agenda.turma" :sublabel="agenda.local">
              <p class="q-item-sublabel">{{ agenda.data }}</p>
            </q-item-main>
            <q-item-side right icon="check" color="primary"/>
          </q-item>
        </q-list>
      </div>

      <div class="bloco">
        <q-list>
          <q-list-header inset>Cadastro Funcionario</q-list-header>
          <q-item-separator/>
          <q-item>
            <q-item-main>
              <q-field
                icon="person"
                label="Nome"
                helper="Nome"
                :label-width="3"
                count
              >
                <q-input  v-model="nome"/>
              </q-field>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-main>
              <q-field
                icon="local_phone"
                label="Numero"
                helper="Numero"
                :label-width="3"
                count
              >
                <q-input type="number" v-model="numero"/>
              </q-field>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-main>
              <q-field
                icon="mail"
                label="Email"
                helper="Email valido"
                :label-width="3"
                :error="$v.email.$error"
                error-label="Email com erro"
                count
              >
                <q-input type="email" v-model="email" @blur="$v.email.$touch"/>
              </q-field>
            </q-item-main>
          </q-item>
          <q-btn color="primary full-width" @click="submit">Cadastrar</q-btn>
        </q-list>
      </div>
    </q-page-container>
  </q-layout>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      nome: "",
      numero: "",
      verba: [
        {
          valor: "R$300,00",
          tipo: "saida",
          data: "31/12/2018",
          name: "Fernando"
        },
        {
          valor: "R$400,00",
          tipo: "entrada",
          data: "31/12/2018",
          name: "Lucas"
        }
      ],
      contas: [
        {
          valor: "R$50,00",
          tipo: "saida",
          data: "31/12/2018",
          name: "Jonas"
        },
        {
          valor: "R$30,00",
          tipo: "entrada",
          data: "31/12/2018",
          name: "Fernando"
        }
      ],
      agendamentos: [
        {
          data: "30/01/2019",
          local: "praia",
          turma: "nutri"
        },
        {
          data: "30/03/2019",
          local: "prefeitura",
          turma: "ads"
        },
        {
          data: "30/10/2019",
          local: "centro",
          turma: "adm"
        }
      ]
    };
  },
  validations: {
    email: { required, email }
  },
  methods: {
    submit() {
      this.$v.email.$touch();

      if (this.$v.email.$error) {
        this.$q.notify("Please review fields again.");
        return;
      }

      // ...
    }
  }
};
</script>
<style scoped>
.bloco {
  width: 45%;
  max-width: 90vw;
  margin: 2%;
}
</style>
