import loadMore from '../assets/js/loadMore.js'
import loading from './loading.js'
import axios from 'axios'

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
    },
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
    }, 
 
    getNotifyLazy ({ dispatch, commit }) {
      return dispatch('setLoading', true)
        .then(() => {
          setTimeout(() => {
            dispatch('getNotify')
          }, 1000)
      })  
    },
    getNotify({state, dispatch}) {
      return dispatch('setLoading', true)
        .then(() => {
          axios
            .get('http://sasha-izvekov.ru/api/notifyApi.php')
              .then(response => {
                let res = response.data.notify,
                    messages = [],
                    messagesMain = [];

                // Filter
                for (let i = 0; i < res.length; i++) {
                  if (res[i].main) messagesMain.push(res[i])
                  else messages.push(res[i])
                }

                dispatch('setMessages', messages)
                dispatch('setMessagesMain', messagesMain)
              })
              .catch(error => {
                console.log(error)
                dispatch('setError', {message: 'Network error', isError: true})
              })
              .finally( () => {dispatch('setLoading', false)})
          })
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