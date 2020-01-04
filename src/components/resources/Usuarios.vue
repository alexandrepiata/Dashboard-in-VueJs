<template>
  <section id="tables">
    <!-- BREADCRUMBS -->
    <mdb-card class="mb-4">
      <mdb-card-body class="d-sm-flex justify-content-between">
        <h4 class="mb-sm-0 pt-2">
          <a href="https://mdbootstrap.com/material-design-for-bootstrap/" target="_blank">Home</a>
          <span>/</span>
          <span>{{ this.$route.name }}</span>
        </h4>
        <form class="d-flex md-form justify-content-center" style="margin:0;">
          <input
            aria-label="Search"
            class="form-control"
            placeholder="Type your query"
            type="search"
          />
          <mdb-btn color="primary" size="sm" class="my-0" type="submit">
            <i class="fa fa-search"></i>
          </mdb-btn>
        </form>
      </mdb-card-body>
    </mdb-card>

    <!-- Usuários Cadastrados -->
    <section>

      <template>
          <mdb-tabs
          :active="0"
          default
          :links="[
            { text: 'Cadastrar Usuários' },
            { text: 'Alterar' }]"
          :transition-duration="0.5"
          transition-style="linear"
        >
          <template :slot="'Cadastrar Usuários'">
            <mdb-row>
              <mdb-col md="12" class="mb-4">
                <mdb-card>
                  <mdb-card-body>
                    <h2>Últimos Lojas Cadastradas</h2>
                      <div class="row">
                      <div class="col-md-8"></div>
                      <div class="col-md-4">
                        <input class="form-control" type="text" v-model="search"  placeholder="Search" />
                      </div>
                    </div>
                    <div class="d-flex flex-row-reverse">

                    </div>
                    <!--<mdb-datatable :data="usuariosTableData" striped bordered :tfoot="false" /> --->
                    <table style="width:100%" id="customers">
                    <tr>
                      <th v-for="column in columns"  v-bind:key="column">{{column.label}}</th>
                    </tr>
                    <tr v-for="row in rows"  v-bind:key="row">
                      <td>{{row.id}}</td>
                      <td>{{row.name}}</td>
                      <td>{{row.phone}}</td>
                      <td>{{row.subscriber_id}}</td>
                      <td>{{row.number_purchases}}</td>
                      <td>{{row.created_at}}</td>
                      <td>
                        <mdb-btn color="primary" size="sm" class="right" @click.native="register = true">
                        <i class="fa fa-edit"></i>&nbsp;
                        Editar
                        </mdb-btn>
                        <mdb-btn color="danger" size="sm" class="right">
                        <i class="fas fa-trash"></i>&nbsp;
                        Deletar
                        </mdb-btn>
                      </td>
                    </tr>

                  </table>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
            </mdb-row>
          </template>
          <template :slot="'Alterar'">
            <mdb-row>
              <mdb-col md="12" class="mb-4">
                <mdb-card>
                  <mdb-card-body>
                    <h2>Alterar Dados Usuários</h2>
                  

                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
            </mdb-row>
          </template>
        </mdb-tabs>
      </template>
    </section>

    <!-- MODAL -->
    <mdb-container>
      <mdb-modal :show="register" @close="register = false">
        <mdb-modal-header class="text-center">
          <mdb-modal-title tag="h4" bold class="w-100">Novo Usuário</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body class="mx-3 grey-text">
          <mdb-input label="Your name" icon="user" class="mb-5" />
          <mdb-input label="Your email" icon="envelope" type="email" class="mb-5" />
          <mdb-input label="Your password" icon="lock" type="password" />
        </mdb-modal-body>
        <mdb-modal-footer center>
          <mdb-btn @click.native="register = false" color="deep-orange">Cadastrar</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>
    </mdb-container>
  </section>
</template>

<script>
import {
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbBtn,
  mdbContainer,
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbInput

} from "mdbvue";
import {mdbTabs } from 'mdbvue';

export default {
  name: "Tables",
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbTabs,
    mdbCardBody,
    mdbBtn,
    mdbContainer,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbInput
  },
  data() {
    return {
      register: false,
      columns: [
        {
          label: "ID",
          field: "id",
          sort: "asc"
        },
        {
          label: "Nome",
          field: "name",
          sort: "asc"
        },
        {
          label: "Telefone",
          field: "phone",
          sort: "asc"
        },
        {
          label: "Assinatura",
          field: "subscriber_id",
          sort: "asc"
        },
        {
          label: "Numero de Compras",
          field: "number_purchases",
          sort: "asc"
        },
        {
          label: "Cadastrado Em",
          field: "created_at",
          sort: "asc"
        },
        {
          label: "Ação",
          field: "Action",
          sort: "asc"
        }
      ],
      rows: [
        {
          id: 1,
          name: "Wesley Paulo",
          phone: "(77) 988494606",
          subscriber_id: "SUB-OYUXZAO",
          number_purchases: 50,
          created_at: "2019-15-03 18:35:12"
        },
         {
          id: 1,
          name: "Wesley Paulo",
          phone: "(77) 988494606",
          subscriber_id: "SUB-OYUXZAO",
          number_purchases: 50,
          created_at: "2019-15-03 18:35:12"
        },
                {
          id: 1,
          name: "Wesley Paulo",
          phone: "(77) 988494606",
          subscriber_id: "SUB-OYUXZAO",
          number_purchases: 50,
          created_at: "2019-15-03 18:35:12"
        },
                {
          id: 1,
          name: "Wesley Paulo",
          phone: "(77) 988494606",
          subscriber_id: "SUB-OYUXZAO",
          number_purchases: 50,
          created_at: "2019-15-03 18:35:12"
        }
      ]      
    };
  },
  methods: {
    filterItems(query) {
      return this.row.filter(function(el) {
          return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card.card-cascade .view.gradient-card-header {
  padding: 1rem 1rem;
  text-align: center;
}
.card.card-cascade h3,
.card.card-cascade h4 {
  margin-bottom: 0;
}
#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  border:2px ;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgb(119, 129, 119);
  color: white;
}
table, th, td {
  border: 1px solid #ddd;
  border-collapse: collapse;
}
</style>