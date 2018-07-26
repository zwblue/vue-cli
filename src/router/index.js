import Vue from 'vue'
import Router from 'vue-router'
const Template = resolve => require(['@/components/template'], resolve)
const Home = resolve => require(['@/views/home/home'], resolve)
const Login = resolve => require(['@/views/login/login'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Template',
      component: Template
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
