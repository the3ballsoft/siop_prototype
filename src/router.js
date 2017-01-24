import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Components
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Teachers from './components/Teachers.vue'


const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/teacherplant',
    component: Teachers 
  }
]

export default new VueRouter({
  routes,
  saveScrollPosition: true,
  history: true
})
