import loadMore from '../assets/js/loadMore.js'

export default {
  state: {
    messages: [],
    messagesMain: [],
  },
  mutations: {
    setMessages (state, payload) {
      state.messages = payload
    },
    setMessagesMain (state, payload) {
      state.messagesMain = payload
    },
    loadMessages(state, payload) {
      state.messagesMain = [...state.messagesMain, ...payload]
    }
  },
  actions: {
    setMessages ({commit}, payload) {
      commit('setMessages', payload)
    },
    setMessagesMain ({commit}, payload) {
      commit('setMessagesMain', payload)
    },
    loadMessages ({commit, getters} ){
      let res = getters.getMessagesFilter
      commit('loadMessages', loadMore(res)) 
    }
  },
  getters: {
     getMessages (state) {
       return state.messages
     },
     getMessagesFilter (state) {
      return state.messages.filter(mes => {
        return mes.main === false
      })
    },
     getMessagesMain (state) {
      return state.messagesMain
    }
  },
}