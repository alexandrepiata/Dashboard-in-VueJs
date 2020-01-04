<template>
  <section id="relatorios">
    <div class="input-group mb-3">
    <div class="input-group-prepend">
     <label class="input-group-text" for="inputGroupSelect01">Filtrar</label>
    </div>
    <select class="browser-default custom-select" id="inputGroupSelect01" v-model="selected1">
     <option selected>Buscar...</option>
     <option value="1">RELATORIOS DE VENDAS</option>
     <option value="2">RELATORIOS DE PAGAMENTOS</option>
     <option value="3">POR LOJA</option>
     <option value="4">POR DATA</option>
     <option value="5">POR FORMA DE PAGAMENTO</option>
     <option value="6">RELATORIO DE COMISSAO</option>
    </select>
    </div>
    <mdb-card>
      <mdb-card-body class="justify-content-between">
        <mdb-datatable
        :data="data"
        striped
        bordered
        />
      </mdb-card-body>
    </mdb-card>
  </section>
</template>

<script>
import {
  mdbCard,
  mdbDatatable,
} from "mdbvue";


export default {
  name: "Tables",
  components: {
    mdbCard,
    mdbDatatable,
  },
  data() {
    return {
      register: false,
      data: {
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
            phone: "(77) 988494606",
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