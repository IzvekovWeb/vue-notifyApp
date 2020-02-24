export default {
 state: {
   error: {
    isError: false,
    message: null
   }
 },
 mutations: {
   setError (state, payload) {
     if(payload.isError){
      state.error.message = payload.message
      state.error.isError = payload.isError
     }else { 
      state.error.message = null
      state.error.isError = false
     }
   }
 },
 actions: {
   setError ({commit}, payload) {
     commit('setError', payload)
   }
 },
 getters: {
   getError(state) {
     return state.error
   }
 }
}