<template>
  <section id="dashboard">
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
    <!-- CARDS DE ESTATISTICAS -->
    <section class="mt-lg-5">
      <mdb-row>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <mdb-icon icon="money-bill-alt" far class="primary-color" />
              <div class="data">
                <p>TRANSACIONADO</p>
                <h4>
                  <strong>$2000</strong>
                </h4>
              </div>
            </div>
            <mdb-card-body>
              <div class="progress">
                <div
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="25"
                  class="progress-bar bg-primary"
                  role="progressbar"
                  style="width: 25%"
                ></div>
              </div>
              <mdb-card-text>Valor transacionado este mês.</mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <mdb-icon icon="chart-line" class="warning-color" />
              <div class="data">
                <p>ESTABELECIMENTOS</p>
                <h4>
                  <strong>200</strong>
                </h4>
              </div>
            </div>
            <mdb-card-body>
              <div class="progress">
                <div
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="25"
                  class="progress-bar bg grey darken-2"
                  role="progressbar"
                  style="width: 25%"
                ></div>
              </div>
              <mdb-card-text>Quantidade de estabelecimentos ativos.</mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <mdb-icon icon="chart-line" class="light-blue lighten-1" />
              <div class="data">
                <p>USUÁRIOS</p>
                <h4>
                  <strong>20000</strong>
                </h4>
              </div>
            </div>
            <mdb-card-body>
              <div class="progress">
                <div
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="75"
                  class="progress-bar grey darken-2"
                  role="progressbar"
                  style="width: 75%"
                ></div>
              </div>
              <mdb-card-text>Quantidade de usuários ativos.</mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <mdb-icon icon="chart-bar" class="red accent-2" />
              <div class="data">
                <p>VENDAS</p>
                <h4>
                  <strong>2000</strong>
                </h4>
              </div>
            </div>
            <mdb-card-body>
              <div class="progress">
                <div
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="25"
                  class="progress-bar bg-primary"
                  role="progressbar"
                  style="width: 25%"
                ></div>
              </div>
              <mdb-card-text>Quantidade de vendas feitas pelo App</mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>

    <!-- Últimas Vendas Pelo App -->
    <section>
      <mdb-row>
        <mdb-col md="12" class="mb-4">
          <mdb-card>
            <mdb-card-body>
              <h2>Últimas Vendas</h2>
              <mdb-datatable :data="vendasTableData" striped bordered :tfoot="false" />
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>

    <!-- Ultimas Lojas Cadastradas -->
    <section>
      <mdb-row>
        <mdb-col md="12" class="mb-4">
          <mdb-card>
            <mdb-card-body>
              <h2>Últimos Lojas Cadastradas</h2>
              <mdb-datatable :data="lojasTableData" bordered responsive autoWidth striped :tfoot="false" />
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>

    <!-- Ultimos Usuários Cadastrados -->
    <section>
      <mdb-row>
        <mdb-col md="12" class="mb-4">
          <mdb-card>
            <mdb-card-body>
              <h2>Últimos Usuários Cadastrados</h2>
              <mdb-datatable :data="usuariosTableData" striped bordered :tfoot="false" />
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
  </section>
</template>

<script>
import {
  mdbRow,
  mdbCol,
  mdbBtn,
  mdbCard,
  mdbCardBody,
  mdbCardText,
  mdbIcon,
  mdbDatatable
} from "mdbvue";

export default {
  name: "Dashboard",
  components: {
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbCardText,
    mdbIcon,
    mdbDatatable
  },
  data() {
    return {
      showFrameModalTop: false,
      showFrameModalBottom: false,
      showSideModalTopRight: false,
      showSideModalTopLeft: false,
      showSideModalBottomRight: false,
      showSideModalBottomLeft: false,
      showCentralModalSmall: false,
      showCentralModalMedium: false,
      showCentralModalLarge: false,
      showCentralModalFluid: false,
      showFluidModalRight: false,
      showFluidModalLeft: false,
      showFluidModalTop: false,
      showFluidModalBottom: false,
      vendasTableData: {
        columns: [
          {
            label: "ID",
            field: "id",
            sort: "asc"
          },
          {
            label: "PAYMENT ID",
            field: "payment_id",
            sort: "asc"
          },
          {
            label: "Usuário",
            field: "subscriber_name",
            sort: "asc"
          },
          {
            label: "Estabelecimento",
            field: "company",
            sort: "asc"
          },
          {
            label: "Valor Bruto",
            field: "amount",
            sort: "asc"
          },
          {
            label: "Valor Com Desconto",
            field: "value",
            sort: "asc"
          },
          {
            label: "Valor Descontado",
            field: "discount_value",
            sort: "asc"
          },
          {
            label: "Data",
            field: "created_at",
            sort: "asc"
          }
        ],
        rows: [
          {
            id: 1,
            payment_id: "PAY-OYUXZAO",
            subscriber_name: "Wesley Paulo",
            company: "Magazine Luiza",
            amount: "R$ 100,00",
            value: "R$ 85,00",
            discount_value: "R$ 15,00",
            created_at: "2019-12-01 16:35:12"
          },
          {
            id: 2,
            payment_id: "PAY-OYUXZAO",
            subscriber_name: "Wesley Paulo",
            company: "Magazine Luiza",
            amount: "R$ 100,00",
            value: "R$ 85,00",
            discount_value: "R$ 15,00",
            created_at: "2019-12-01 16:35:12"
          },
          {
            id: 3,
            payment_id: "PAY-OYUXZAO",
            subscriber_name: "Wesley Paulo",
            company: "Magazine Luiza",
            amount: "R$ 100,00",
            value: "R$ 85,00",
            discount_value: "R$ 15,00",
            created_at: "2019-12-01 16:35:12"
          }
        ]
      },
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
            phone: "",
            address:
              "Rua Antonio Goveia Souza, nº339 - Sítio do Campo, Praia Grande / SP, 11725150",
            percent: "15%",
            created_at: "2019-11-03 18:35:12"
          },
          {
            id: 2,
            name: "Lojas Americanas",
            cnpj: "",
            owner_name: "Elias Filipe Viana",
            owner_email: "eliasviana@mgluiza.com",
            phone: "",
            address:
              "Rua Sebastião Carneiro da Silva, nº116 - Alto do Mateus, João Pessoa / PB, 58090643",
            percent: "12%",
            created_at: "2019-11-05 17:45:11"
          }
        ]
      },
      usuariosTableData: {
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
          }
        ],
        rows: [
          {
            id: 1,
            name: "Wesley Paulo",
            phone: "",
            subscriber_id: "SUB-OYUXZAO",
            number_purchases: 50,
            created_at: "2019-15-03 18:35:12"
          }
        ]
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cascading-admin-card {
  margin: 20px 0;
}
.cascading-admin-card .admin-up {
  margin-left: 4%;
  margin-right: 4%;
  margin-top: -20px;
}
.cascading-admin-card .admin-up .fas,
.cascading-admin-card .admin-up .far {
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
  padding: 1.7rem;
  font-size: 2rem;
  color: #fff;
  text-align: left;
  margin-right: 1rem;
  border-radius: 3px;
}
.cascading-admin-card .admin-up .data {
  float: right;
  margin-top: 2rem;
  text-align: right;
}
.admin-up .data p {
  color: #999999;
  font-size: 12px;
}
.classic-admin-card .card-body {
  color: #fff;
  margin-bottom: 0;
  padding: 0.9rem;
}
.classic-admin-card .card-body p {
  font-size: 13px;
  opacity: 0.7;
  margin-bottom: 0;
}
.classic-admin-card .card-body h4 {
  margin-top: 10px;
}
</style>
