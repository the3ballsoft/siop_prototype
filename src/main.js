import Vue from 'vue'
import VueResource from 'vue-resource'
import Materials from 'vue-materials'
import App from './App'
import router from './router'
import store from './store'

// 3rd party imports
window.jQuery = window.$ = require('jquery')
import 'normalize.css/normalize.css'
import 'materialize-css/dist/js/materialize'
import 'materialize-css/dist/css/materialize.min.css'

//init plugins
Vue.use(VueResource)
Vue.use(Materials)

/* eslint-disable no-new */
new Vue({
  template: '<App/>',
  components: { App },
  router,
  store
}).$mount('#app')
