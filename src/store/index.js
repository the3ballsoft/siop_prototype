import Vuex from 'vuex';
import Vue from 'vue';
import teacher from './modules/teacher';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    teacher 
  }
})
