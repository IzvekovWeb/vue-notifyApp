import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import notify from "./notify"
import loading from "./loading"
import error from "./error"

export default new Vuex.Store({
  modules: {
    notify, loading, error
  }
})