<template>
  <div id="dashboard">
  <div class="flexible-content">
    <!--Navbar-->
    <mdb-navbar class="flexible-navbar white" light position="top" scrolling>
      <mdb-navbar-brand href="https://mdbootstrap.com/docs/vue/" target="_blank">MDB</mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav right>
          <button class="btn btn-info btn-block" @click="logout" type="submit">logout</button>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <!--/.Navbar-->
    <!-- Sidebar -->
    <div class="sidebar-fixed position-fixed" style="display: block">
      <a class="logo-wrapper"><img alt="" class="img-fluid" src="../../assets/logo-mdb-vue-small.png"/></a>
      <mdb-list-group class="list-group-flush">
        <router-link to="/dashboard" @click.native="activeItem = 1">
          <mdb-list-group-item :action="true" :class="activeItem === 1 && 'active'"><mdb-icon icon="chart-pie" class="mr-3"/>Geral</mdb-list-group-item>
        </router-link>
        <router-link to="/estabelecimentos" @click.native="activeItem = 2">
          <mdb-list-group-item :action="true" :class="activeItem === 2 && 'active'">
            <mdb-icon icon="store-alt" class="mr-3" />Estabelecimentos
          </mdb-list-group-item>
        </router-link>
        <router-link to="/usuarios" @click.native="activeItem = 3">
          <mdb-list-group-item :action="true" :class="activeItem === 3 && 'active'">
            <mdb-icon icon="user" class="mr-3" />Usuários
          </mdb-list-group-item>
        </router-link>
        <router-link to="/relatorios" @click.native="activeItem = 4">
          <mdb-list-group-item :action="true" :class="activeItem === 4 && 'active'">
            <mdb-icon icon="chart-bar" class="mr-3" />Relatórios
          </mdb-list-group-item>
        </router-link>
        <router-link to="/configuracoes" @click.native="activeItem = 6">
          <mdb-list-group-item :action="true" :class="activeItem === 6 && 'active'">
            <mdb-icon icon="cog" class="mr-3" />Configurações
          </mdb-list-group-item>
        </router-link>

      </mdb-list-group>
    </div>
    <!-- /Sidebar  -->
    <main>
      <div class="mt-5 p-5">
        
        <router-view></router-view>
      </div>
      <ftr color="primary-color-dark" class="text-center font-small darken-2">
        <div class="pt-4">
          <mdb-btn outline="white" tag="a" href="https://mdbootstrap.com/docs/vue/getting-started/download/" target="_blank">Download MDB <mdb-icon icon="download" class="ml-2"/></mdb-btn>
          <mdb-btn outline="white" tag="a" href="https://mdbootstrap.com/education/bootstrap/" target="_blank">Start free tutorial <mdb-icon icon="graduation-cap" class="ml-2"/></mdb-btn>
        </div>
        <hr class="my4"/>
        <div class="pb-4">
          <a href="#"><mdb-icon fab icon="facebook-square" class="mr-3"/></a>
          <a href="#"><mdb-icon fab icon="twitter" class="mr-3"/></a>
          <a href="#"><mdb-icon fab icon="youtube" class="mr-3"/></a>
          <a href="#"><mdb-icon fab icon="google-plus" class="mr-3"/></a>
          <a href="#"><mdb-icon fab icon="dribbble" class="mr-3"/></a>
          <a href="#"><mdb-icon fab icon="pinterest" class="mr-3"/></a>
          <a href="#"><mdb-icon fab icon="github" class="mr-3"/></a>
          <a href="#"><mdb-icon fab icon="codepen" class="mr-3"/></a>
        </div>
        <p class="footer-copyright mb-0 py-3 text-center">
          &copy; {{new Date().getFullYear()}} Copyright: <a href="https://mdbootstrap.com/docs/vue/"> MDBootstrap.com </a>
        </p>
      </ftr>
    </main>
  </div>   
  </div>
</template>

<script>
import {  mdbNavbar, mdbNavbarBrand, mdbNavbarNav, mdbNavbarToggler, mdbBtn, mdbIcon, mdbListGroup, mdbListGroupItem, mdbFooter, waves } from 'mdbvue'

export default {
  name: 'dashboard',
  components: {
    mdbNavbar,
    mdbNavbarBrand,    
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbBtn,
    mdbListGroup,
    mdbListGroupItem,
    mdbIcon,
    'ftr': mdbFooter,
  },
  data () {
    return {
      activeItem: 1
    }
  },
  beforeMount () {
   // this.activeItem = this.$route.matched[0].props.default.page
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/");
      });
    }
  },
  mixins: [waves]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  background-color: #EDEDEE;
}
.flexible-content {
  transition: padding-left 0.3s;
  padding-left: 270px;
}
.flexible-navbar {
  transition: padding-left 0.5s;
  padding-left: 270px;
}
.sidebar-fixed {
  left: 0;
  top: 0;
  height: 100vh;
  width: 270px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 1050;
  background-color: #fff;
  padding: 1.5rem;
  padding-top: 0;
}
.sidebar-fixed .logo-wrapper img{
  width: 100%;
  padding: 2.5rem;
}
.sidebar-fixed .list-group-item {
  display: block !important;
  transition: background-color 0.3s;
}
.sidebar-fixed .list-group .active {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 5px;
}
@media (max-width: 1199.98px) {
  .sidebar-fixed {
    display: none;
  }
  .flexible-content {
    padding-left: 0;
  }
  .flexible-navbar {
    padding-left: 10px;
  }
}
</style>
<style>
.navbar-light .navbar-brand {
  margin-left: 15px;
  color: #2196f3 !important;
  font-weight: bolder;
}
</style>