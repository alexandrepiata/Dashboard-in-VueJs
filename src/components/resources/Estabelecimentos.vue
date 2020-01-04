<template>
  <section id="profile">
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

    <!-- Ultimas Lojas Cadastradas -->
    <section>
      <mdb-row>
        <mdb-col md="12" class="mb-4">
          <mdb-card>
            <mdb-card-body>
              <h2>Últimos Lojas Cadastradas</h2>
              <div class="d-flex flex-row-reverse">
                <mdb-btn color="success" class="right" @click.native="register = true">
                  <i class="fa fa-plus"></i>&nbsp;
                  Novo Estabelecimento
                </mdb-btn>
              </div>
              <mdb-datatable :data="lojasTableData" bordered responsive autoWidth striped  :tfoot="false" />
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>

    <!-- MODAL -->
    <mdb-container>
      <mdb-modal :show="register" @close="register = false">
        <mdb-modal-header class="text-center">
          <mdb-modal-title tag="h4" bold class="w-100">Novo Estabelecimento</mdb-modal-title>
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
  mdbDatatable,
  mdbContainer,
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbInput
} from "mdbvue";

export default {
  name: "Profile",
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbBtn,
    mdbDatatable,
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
      lojasTableData: {
        columns: [
          {
            label: "#ID",
            field: "id",
            sort: "asc"
          },
          {
            label: "Nome",
            field: "name",
            sort: "asc"
          },
          {
            label: "CNPJ",
            field: "cnpj",
            sort: "asc"
          },
          {
            label: "Proprietario",
            field: "owner_name",
            sort: "asc"
          },
          {
            label: "Prop. Email",
            field: "owner_email",
            sort: "asc"
          },
          {
            label: "Telefone",
            field: "phone",
            sort: "asc"
          },
          {
            label: "Endereço",
            field: "address",
            sort: "asc"
          },
          {
            label: "%Desconto",
            field: "percent",
            sort: "asc"
          },
          {
            label: "Criado Em",
            field: "created_at",
            sort: "asc"
          }
        ],
        rows: [
          {
            id: 1,
            name: "Magazine Luiza",
            cnpj: "38.280.489/0001-75",
            owner_name: "Luiz Henrique de Souza",
            owner_email: "luizsousa@mgluiza.com",
            phone: "00000000000",
            address:
              "Rua Antonio Goveia Souza, nº339 - Sítio do Campo, Praia Grande / SP, 11725150",
            percent: "15%",
            created_at: "2019-11-03 18:35:12"
          },
          {
            id: 2,
            name: "Lojas Americanas",
            cnpj: "9999999999999",
            owner_name: "Elias Filipe Viana",
            owner_email: "test@test.com",
            phone: "0000000000000000",
            address:
              "Rua Sebastião Carneiro da Silva, nº116 - Alto do Mateus, João Pessoa / PB, 58090643",
            percent: "12%",
            created_at: "2019-11-05 17:45:11"
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.profile-card-footer {
  background-color: #f7f7f7 !important;
  padding: 1.25rem;
}
.card.card-cascade .view {
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15), 0 3px 12px 0 rgba(0, 0, 0, 0.15);
}
</style>