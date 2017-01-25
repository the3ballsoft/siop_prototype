import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Components
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Teachers from './components/Teachers.vue'
import TeacherForm from './components/TeacherForm.vue'


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
  },
  {
    path: '/teacherplant/new',
    component: TeacherForm 
  },
  {
    path: '/teacherplant/edit/:id',
    component: TeacherForm 
  }
]

export default new VueRouter({
  routes,
  saveScrollPosition: true,
  history: true
})
