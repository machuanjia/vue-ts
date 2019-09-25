import Vue from 'vue'
import Vuex from 'vuex'

// modules
import Login from './modules/login'
import Index from './modules/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    Login,
    Index
  }
})
