import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/'
import Login from '../components/auth/Login.vue'
import Register from '../components/auth/Register.vue'
import DashMain from '../components/resources/DashMain.vue'
import Dashboard from '../components/resources/Dashboard.vue'
import Estabelecimentos from '../components/resources/Estabelecimentos.vue'
import Usuarios from '../components/resources/Usuarios.vue'
import Relatorios from '../components/resources/Relatorios.vue'

Vue.use(Router)
let router = new Router({
  mode: 'history',
  routes: [

    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      props: { page: 1 },
    },
    {
      path: '/dashmain',
      name: 'dashmain',
      component: DashMain,
      props: { page: 0 },
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '/dashboard',
          component: Dashboard,
        },
        {
          path:'/estabelecimentos',
          component:Estabelecimentos,
        },
        {
          path:'/usuarios',
          component:Usuarios,
        },
        {
          path:'/relatorios',
          component:Relatorios,
        }
      ]
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router