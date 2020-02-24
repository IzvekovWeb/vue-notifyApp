export default {
  state: {
    loading: false,
  },
  mutations: {
    setLoading(state, payload){
      state.loading = payload
    }
  },
  actions: {
    setLoading ({commit}, payload) {
      return new Promise((resolve, reject) => {
        commit('setLoading', payload)
        resolve()
      })
    }
  },
  getters: {
    getLoading (state) {
      return state.loading
    }
  }
}